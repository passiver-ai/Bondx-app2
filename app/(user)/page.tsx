'use client';

import * as React from 'react';

import Link from 'next/link';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';
import { Trans } from '@kit/ui/trans';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'common:errors:email:required')
    .email('common:errors:email:invalid'),
  password: z
    .string()
    .min(1, 'common:errors:password:required')
    .min(8, 'common:errors:password:minLength'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function SignIn() {
  const router = useRouter();
  const { t } = useTranslation();
  const [isError, setIsError] = React.useState(false);

  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
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
            <Trans i18nKey="auth:errors:invalidCredential" />
          </div>
        )}
        <BondXLogo />
        <Heading level={3}>
          <Trans i18nKey="auth:signInHeading" />
        </Heading>
        <div className="flex w-full flex-col gap-2">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Trans i18nKey="common:form:email" />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder={t('common:form:emailPlaceholder')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Trans i18nKey="common:form:password" />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    autoComplete="off"
                    placeholder={t('common:form:passwordPlaceholder')}
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
            <Trans i18nKey="auth:signIn" />
          </Button>
          <Button asChild type="button" variant="secondary">
            <Link href="/signup">
              <Trans i18nKey="auth:signUp" />
            </Link>
          </Button>
          <Button asChild type="button" variant="link">
            <Link href="/forgot-password">
              <Trans i18nKey="auth:forgotPassword" />
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
