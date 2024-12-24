'use client';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { SubmitHandler, useForm } from 'react-hook-form';
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

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'common:errors:password:minLength')
      .regex(/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message: 'common:errors:password:criteria',
      }),
    password_confirm: z.string(),
  })
  .refine((data) => data.password === data.password_confirm, {
    path: ['password_confirm'],
    message: 'common:errors:password:confirm',
  });

type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const router = useRouter();
  const { t } = useTranslation();
  const form = useForm<ResetPasswordFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      password_confirm: '',
    },
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
        <Heading level={3}>
          <Trans i18nKey="auth:resetPasswordHeading" />
        </Heading>

        <div className="flex w-full flex-col gap-2">
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
          <FormField
            name="password_confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Trans i18nKey="common:form:passwordConfirmation" />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    autoComplete="off"
                    placeholder={t(
                      'common:form:passwordConfirmationPlaceholder',
                    )}
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
            <Trans i18nKey="auth:changePassword" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
