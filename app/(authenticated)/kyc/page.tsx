/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import * as React from 'react';

import AlertDialog, {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/AlertDialog';
import Icon from '@/components/Icon';
import { IDCard, Information, Phone } from '@/components/KYCForm';
import { Stepper } from '@/components/Stepper';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Heading } from '@kit/ui/heading';
import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
} from '@kit/ui/multi-step-form';
import { cn } from '@kit/ui/utils';

/* eslint-disable @typescript-eslint/no-unsafe-call */

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
    mobilePhone: z.string().min(1, 'Mobile phone is required'),
    verificationCode: z.string().optional(),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function Help() {
  const rootRef = React.useRef<HTMLElement>(null);
  const [isSubmitted, setSubmitted] = React.useState(false);
  const [isVerificationDialogOpen, setVerificationDialogOpen] =
    React.useState(false);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    reValidateMode: 'onBlur',
    mode: 'onChange',
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
        verificationCode: '',
      },
    },
  });

  React.useLayoutEffect(() => {
    setTitle?.('profile:kycVerification');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);

    rootRef.current = document.getElementById('root-parent');
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const onSubmit = async (data: FormValues) => {
    console.log('Form submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setVerificationDialogOpen(true);
  };

  const handleVerificationDialogOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        setSubmitted(true);
        setVerificationDialogOpen(false);
      }
    },
    [],
  );

  return (
    <div className={cn('container flex flex-col py-3')}>
      {isSubmitted ? (
        <>
          <Stepper
            currentStep={2}
            variant={'numbers'}
            steps={['ID', 'Information', 'Phone']}
          />

          <div className="mt-8 w-full rounded-lg bg-[#F8FAFC] pb-3 pt-5 text-center text-[#334155] space-y-2">
            <Icon name="file-check" className="text-[36px] inline-block" />
            <Heading level={4}>Pending...</Heading>
            <p>
              The review process takes
              <br />
              1-3 business days.
            </p>
          </div>
        </>
      ) : (
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
      )}

      <AlertDialog
        open={isVerificationDialogOpen}
        onOpenChange={handleVerificationDialogOpenChange}
      >
        <AlertDialogContent
          className="max-w-[375px]"
          portalProps={{ container: rootRef.current }}
        >
          <AlertDialogHeader>
            <div className="flex justify-center">
              <Icon name="check-circle" className="text-[40px]" />
            </div>
            <AlertDialogTitle className="text-center">Success</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Mobile Phone verification completed successfully.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="w-full"
              buttonProps={{ variant: 'outline' }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
