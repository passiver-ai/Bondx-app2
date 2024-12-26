'use client';

import * as React from 'react';

import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kit/ui/form';
import { useMultiStepFormContext } from '@kit/ui/multi-step-form';
import { Trans } from '@kit/ui/trans';

import OTPInput from '../OTPInput';
import { PhoneInput } from '../PhoneInput';

export const Phone: React.FC = () => {
  const { t } = useTranslation();
  const [isCodeSent, setCodeSent] = React.useState(false);
  const [isSendingCode, setSendingCode] = React.useState(false);
  const { form, isStepValid } = useMultiStepFormContext();

  const handleSendVerificationCode = React.useCallback(async () => {
    setSendingCode(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setSendingCode(false);
    setCodeSent(true);
  }, []);

  return (
    <Form {...form}>
      <div className={'mt-8 flex flex-col gap-4'}>
        <FormField
          name="phone.mobilePhone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>
                <Trans i18nKey="common:form:mobilePhone" />
              </FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder={t('common:form:mobilePhonePlaceholder')}
                  {...field}
                  defaultCountry="KR"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isCodeSent && (
          <FormField
            name="phone.verificationCode"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>
                  <Trans i18nKey="common:form:verificationCode" />
                </FormLabel>
                <FormControl className="w-full">
                  <OTPInput
                    placeholder={t('common:form:verificationCodePlaceholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex flex-1 flex-col gap-2">
          {isCodeSent && (
            <Button
              type="submit"
              disabled={!isStepValid() || form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-1 animate-spin" />
              )}
              <Trans i18nKey="common:verify" />
            </Button>
          )}
          <Button
            type="button"
            onClick={handleSendVerificationCode}
            variant={isCodeSent ? 'link' : 'default'}
            disabled={!isStepValid() || isSendingCode}
          >
            {isSendingCode && <Loader2 className="mr-1 animate-spin" />}
            {isCodeSent ? (
              <Trans i18nKey="common:resendVerificationCode" />
            ) : (
              <Trans i18nKey="common:sendVerificationCode" />
            )}
          </Button>
        </div>
      </div>
    </Form>
  );
};
