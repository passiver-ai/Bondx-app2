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

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'common:errors:email:required')
    .email('common:errors:email:invalid'),
});

type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const router = useRouter();
  const { t } = useTranslation();
  const form = useForm<ForgotPasswordInputs>({
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
    console.log('Forgot Password Data:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push('/email-verification');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]"
      >
        <BondXLogo />
        <Heading level={3}>
          <Trans i18nKey="auth:forgotPasswordHeading" />
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
            <Trans i18nKey="auth:sendEmailVerification" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
