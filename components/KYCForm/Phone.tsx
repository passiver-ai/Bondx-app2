'use client';

import * as React from 'react';

import { Loader2 } from 'lucide-react';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@kit/ui/form';
import { useMultiStepFormContext } from '@kit/ui/multi-step-form';

import FormMessage from '../FormMessage';
import OTPInput from '../OTPInput';
import { PhoneInput } from '../PhoneInput';

export const Phone: React.FC = () => {
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
      <div className={'mt-6 flex flex-col gap-4'}>
        <FormField
          name="phone.mobilePhone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Mobile Phone</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder="Enter Mobile Phone"
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
                <FormLabel>Verification code</FormLabel>
                <FormControl className="w-full">
                  <OTPInput placeholder="Enter Verification Code" {...field} />
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
              Verify
            </Button>
          )}
          <Button
            type="button"
            disabled={!isStepValid()}
            onClick={handleSendVerificationCode}
            variant={isCodeSent ? 'link' : 'default'}
          >
            {isSendingCode && <Loader2 className="mr-1 animate-spin" />}
            {isCodeSent ? 'Resend Verification Code' : 'Send Verification Code'}
          </Button>
        </div>
      </div>
    </Form>
  );
};
