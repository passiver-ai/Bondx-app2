'use client';

import { useRouter } from 'next/navigation';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import FormMessage from '@/components/FormMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import { Checkbox } from '@kit/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';

// Zod Schema
const signUpSchema = z
  .object({
    email: z
      .string()
      .email('Invalid email address')
      .nonempty('Email is required'),
    password: z
      .string()
      .min(8, 'The password must be at least 8 characters long')
      .regex(/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message:
          'Password must contain at least 1 special character, 1 lowercase letter, and 1 number',
      }),
    password_confirm: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({
        message: 'You must accept the terms and conditions',
      }),
    }),
  })
  .refine((data) => data.password === data.password_confirm, {
    path: ['password_confirm'], // Field to display error
    message: 'Passwords do not match',
  });

// Infer TypeScript type
type SignUpFormInputs = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const router = useRouter();
  const form = useForm<SignUpFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    console.log('Sign-Up Data:', data); // Handle sign-up logic here
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
    router.push('/email-verification');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]"
      >
        <BondXLogo />
        <Heading level={3}>Sign up to BONDX</Heading>

        <div className="flex w-full flex-col gap-2">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="E-mail" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password_confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    autoComplete="off"
                    placeholder="Confirm Password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="my-2 flex items-center justify-center gap-1">
                <FormControl>
                  <Checkbox {...field} />
                </FormControl>
                <FormLabel className="mt-0">
                  Accept the terms and conditions
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-2">
          <Button
            type="submit"
            disabled={
              !form.formState.isDirty ||
              !form.formState.isValid ||
              form.formState.isSubmitting
            }
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-1 animate-spin" />
            )}
            Sign up
          </Button>
          <Button type="button" variant="link" onClick={() => router.push('/')}>
            Already signed up?
          </Button>
        </div>
      </form>
    </Form>
  );
}
