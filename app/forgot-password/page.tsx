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

// Zod Schema for Validation
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
});

// Infer TypeScript type for the form inputs
type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const router = useRouter();
  const form = useForm<ForgotPasswordInputs>({
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
    console.log('Forgot Password Data:', data); // Handle form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
    router.push('/email-verification'); // Navigate to email verification page
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]"
      >
        <BondXLogo />
        <Heading level={3}>Forgot your password?</Heading>

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
            Send Verification E-mail
          </Button>
        </div>
      </form>
    </Form>
  );
}
