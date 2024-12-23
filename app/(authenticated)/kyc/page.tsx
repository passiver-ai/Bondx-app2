/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import * as React from 'react';

import { IDCard, Information, Phone } from '@/components/KYCForm';
import { Stepper } from '@/components/Stepper';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
} from '@kit/ui/multi-step-form';
import { cn } from '@kit/ui/utils';

const FormSchema = createStepSchema({
  id: z.object({
    image: z
      .any()
      .refine((file) => file?.[0], 'An image is required.')
      .refine(
        (file) =>
          file?.[0]?.type.startsWith('image/') &&
          file?.[0]?.size <= 5 * 1024 * 1024, // 5MB limit
        'File must be an image and less than 5MB',
      ),
  }),
  information: z.object({
    email: z
      .string()
      .email('Email must be a valid email address')
      .min(1, 'Email is required'),
    name: z.string().min(1, 'Name is required'),
    residentRegistrationFront: z
      .string()
      .regex(/^\d+$/, 'Must be numeric')
      .length(6, 'Must be exactly 6 digits'),
    residentRegistrationBack: z
      .string()
      .regex(/^\d+$/, 'Must be numeric')
      .length(7, 'Must be exactly 7 digits'),
    postalCode: z.string().min(1, 'Postal Code is required'),
    address: z.string().min(1, 'Address is required'),
    detailedAddress: z.string().optional(),
  }),
  phone: z.object({
    mobilePhone: z
      .string()
      .regex(/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits')
      .min(1, 'Mobile phone is required'),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function Help() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
    defaultValues: {
      id: {
        image: null,
      },
      information: {
        email: '',
        name: '',
        residentRegistrationFront: '',
        residentRegistrationBack: '',
        postalCode: '',
        address: '',
        detailedAddress: '',
      },
      phone: {
        mobilePhone: '',
      },
    },
  });

  React.useLayoutEffect(() => {
    setTitle?.('KYC Verification');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className={cn('container flex flex-col py-3')}>
      <MultiStepForm form={form} schema={FormSchema} onSubmit={onSubmit}>
        <MultiStepFormHeader>
          <MultiStepFormContextProvider>
            {({ currentStepIndex }) => (
              <Stepper
                variant={'numbers'}
                steps={['ID', 'Information', 'Phone']}
                currentStep={currentStepIndex}
              />
            )}
          </MultiStepFormContextProvider>
        </MultiStepFormHeader>
        <MultiStepFormStep name="id">
          <IDCard />
        </MultiStepFormStep>
        <MultiStepFormStep name="information">
          <Information />
        </MultiStepFormStep>
        <MultiStepFormStep name="phone">
          <Phone />
        </MultiStepFormStep>
      </MultiStepForm>
    </div>
  );
}
