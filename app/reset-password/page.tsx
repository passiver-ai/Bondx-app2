'use client';

import { useRouter } from 'next-nprogress-bar';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import FormMessage from '@/components/FormMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';

// Define Zod schema for validation
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message:
          'Password must include 1 lowercase letter, 1 number, and 1 special character',
      }),
    password_confirm: z.string(),
  })
  .refine((data) => data.password === data.password_confirm, {
    path: ['password_confirm'], // Specify the field to show the error
    message: 'Passwords do not match',
  });

// Infer TypeScript type from Zod schema
type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const router = useRouter();
  const form = useForm<ResetPasswordFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      password_confirm: '',
    }
  });

  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = async (data) => {
    console.log('Form Data:', data); // Handle form submission here
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
    router.push('/');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]"
      >
        <BondXLogo />
        <Heading level={3}>Reset Password</Heading>

        <div className="flex w-full flex-col gap-2">
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
        </div>
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
            Change Password
          </Button>
        </div>
      </form>
    </Form>
  );
}
