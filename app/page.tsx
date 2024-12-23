'use client';

import * as React from 'react';

import { useRouter } from 'next-nprogress-bar';
import Link from 'next/link';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import FormMessage from '@/components/FormMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { type SubmitHandler, useForm } from 'react-hook-form';
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

// Define the Zod schema for form validation
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

// Infer the form data type from the schema
type LoginFormInputs = z.infer<typeof loginSchema>;

export default function SignIn() {
  const router = useRouter();
  const [isError, setIsError] = React.useState(false);

  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log(data); // Handle form submission here
    setIsError(false);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work

    router.push('/dashboard');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]"
      >
        {isError && (
          <div className="-mt-4 mb-6 rounded-[6px] bg-[#FEF2F2] p-3 text-center text-[16px] text-[#EF4444]">
            The email address does not exist or the password is invalid.
          </div>
        )}
        <BondXLogo />
        <Heading level={3}>Login to BONDX</Heading>
        <div className="flex w-full flex-col gap-2">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
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
            Login
          </Button>
          <Button asChild type="button" variant="secondary">
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button asChild type="button" variant="link">
            <Link href="/forgot-password">Forgot password?</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
