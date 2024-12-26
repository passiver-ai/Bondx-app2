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
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { Heading } from '@kit/ui/heading';
import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
} from '@kit/ui/multi-step-form';
import { Trans } from '@kit/ui/trans';
import { cn } from '@kit/ui/utils';

/* eslint-disable @typescript-eslint/no-unsafe-call */

const FormSchema = createStepSchema({
  id: z.object({
    image: z
      .any()
      .refine((file) => file?.[0], 'common:errors:idCard:required')
      .refine(
        (file) =>
          file?.[0]?.type.startsWith('image/') &&
          file?.[0]?.size <= 5 * 1024 * 1024, // 5MB limit
        'common:errors:idCard:invalid',
      ),
  }),
  information: z.object({
    email: z
      .string()
      .email("common:errors:email:invalid")
      .min(1, "common:errors:email:required"),
    name: z.string().min(1, "common:errors:name:required"),
    residentRegistrationFront: z
      .string()
      .regex(/^\d+$/, "common:errors:residentRegistrationFront:numeric")
      .min(1, "common:errors:residentRegistrationFront:required"),
    residentRegistrationBack: z
      .string()
      .regex(/^\d+$/, "common:errors:residentRegistrationBack:numeric")
      .min(1, "common:errors:residentRegistrationBack:required"),
    postalCode: z.string().min(1, "common:errors:postalCode:required"),
    address: z.string().min(1, "common:errors:address:required"),
    detailedAddress: z.string().optional(),
  }),
  phone: z.object({
    mobilePhone: z.string().min(1, "common:errors:mobilePhone:required"),
    verificationCode: z.string().optional(),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function Help() {
  const { t } = useTranslation();
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
            steps={[
              t('profile:kyc:id:title'),
              t('profile:kyc:information:title'),
              t('profile:kyc:phone:title'),
            ]}
          />

          <div className="mt-8 w-full space-y-2 rounded-lg bg-[#F8FAFC] pb-3 pt-5 text-center text-[#334155]">
            <Icon name="file-check" className="inline-block text-[36px]" />
            <Heading level={4}>
              <Trans i18nKey="common:pending" />
              ...
            </Heading>
            <p>
              <Trans i18nKey="profile:messages:kyc:pendingReview" />
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
                  steps={[
                    t('profile:kyc:id:title'),
                    t('profile:kyc:information:title'),
                    t('profile:kyc:phone:title'),
                  ]}
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
            <AlertDialogTitle className="text-center">
              <Trans i18nKey="common:success" />
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              <Trans i18nKey="profile:messages:kyc:mobilePhoneVerified" />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="w-full"
              buttonProps={{ variant: 'outline' }}
            >
              <Trans i18nKey="common:confirm" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
