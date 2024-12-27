'use client';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import { Checkbox } from '@kit/ui/checkbox';
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

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'common:errors:email:required')
      .email('common:errors:email:invalid'),
    password: z
      .string()
      .min(8, 'common:errors:password:minLength')
      .regex(/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message: 'common:errors:password:criteria',
      }),
    password_confirm: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({
        message: 'common:errors:termsCondition:required',
      }),
    }),
  })
  .refine((data) => data.password === data.password_confirm, {
    path: ['password_confirm'],
    message: 'common:errors:password:confirm',
  });

type SignUpFormInputs = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const router = useRouter();
  const { t } = useTranslation();
  const form = useForm<SignUpFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      password_confirm: '',
      acceptTerms: undefined,
    },
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
        <Heading level={3}>
          <Trans i18nKey="auth:signUpHeading" />
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
                    placeholder={t('common:form:passwordConfirmationPlaceholder')}
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
                  <Trans i18nKey="common:form:acceptTerms" />
                </FormLabel>
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
            <Trans i18nKey="auth:signUp" />
          </Button>
          <Button type="button" variant="link" onClick={() => router.push('/')}>
            <Trans i18nKey="auth:alreadyHaveAccount" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
