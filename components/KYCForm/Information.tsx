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
import { Input } from '@kit/ui/input';
import { useMultiStepFormContext } from '@kit/ui/multi-step-form';

import FormMessage from '../FormMessage';

export const Information: React.FC = () => {
  const { form, nextStep, isStepValid } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className={'mt-6 flex flex-col gap-3'}>
        <FormField
          name="information.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter E-mail Address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="information.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.residentRegistrationFront"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resident Registration Number (Front)</FormLabel>
              <FormControl>
                <Input placeholder="Enter Number" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.residentRegistrationBack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resident Registration Number (Back)</FormLabel>
              <FormControl>
                <Input placeholder="Enter Number" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter Postal Code"
                    type="number"
                    {...field}
                  />
                  <Button type="button">Find Address</Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.detailedAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detailed Address (Optional)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter Detailed Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button onClick={nextStep} disabled={!isStepValid()} className="w-full">
          Next
        </Button>
      </div>
    </Form>
  );
};
