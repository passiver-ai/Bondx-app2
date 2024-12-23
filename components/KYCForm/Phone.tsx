'use client';

import * as React from 'react';

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
import { PhoneInput } from '../PhoneInput';

export const Phone: React.FC = () => {
  const { form, isStepValid } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className={'mt-6 flex flex-col gap-4'}>
        <FormField
          name="mobilePhone"
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

        <Button type="submit" className="flex-1" disabled={!isStepValid()}>
          Send Verification Code
        </Button>
      </div>
    </Form>
  );
};
