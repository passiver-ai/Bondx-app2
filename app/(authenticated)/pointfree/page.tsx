'use client';

import * as React from 'react';

import { useSearchParams } from 'next/navigation';

import AlertDialog, {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/AlertDialog';
import FormMessage from '@/components/FormMessage';
import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';
import { cn } from '@kit/ui/utils';

// Define the Zod schema for form validation
const formSchema = z.object({
  id: z.string().min(1, 'Invalid PointFree ID. Please try again.'),
});

// Infer the form data type from the schema
type FormInputs = z.infer<typeof formSchema>;

export default function PointFree() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rootRef = React.useRef<HTMLElement>(null);
  const [isTransferDialogOpen, setTransferDialogOpen] = React.useState(false);
  const [isVerificationDialogOpen, setVerificationDialogOpen] =
    React.useState(false);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const form = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
    },
  });

  const isVerified = React.useMemo(
    () => !!+(searchParams?.get('verified') ?? 0),
    [searchParams],
  );

  React.useLayoutEffect(() => {
    setTitle?.('PointFree');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);

    rootRef.current = document.getElementById('root-parent');
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data); // Handle form submission here

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work

    if (isVerified) setTransferDialogOpen(true);
    else setVerificationDialogOpen(true);
  };

  const handleTransferDialogOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        form.reset();
        setTransferDialogOpen(false);
        router.push('/pointfree?verified=1');
      }
    },
    [form, router],
  );

  const handleVerificationDialogOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        form.reset();
        setVerificationDialogOpen(false);
        router.push('/pointfree?verified=1');
      }
    },
    [form, router],
  );

  return (
    <div className={cn('container flex flex-col py-2')}>
      <div className="space-y-4">
        <div className="w-full rounded-lg bg-[#F8FAFC] p-3 text-[#334155]">
          <span>
            <Icon name="send" className="inline-block align-[-0.175em]" />{' '}
            Transfer points to PointFree
          </span>
          <hr className="my-2" />
          <div className="space-y-1">
            <span className="text-sm">Available</span>
            <p>{isVerified ? '0' : '510,243,000'} BONDX</p>
            <Icon name="arrow-down" />
            <p>{isVerified ? '0' : '241,240'} Point</p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="id"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>PointFree ID</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter PointFree ID"
                        type=""
                        {...field}
                      />
                      {!isVerified && (
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
                          Verify
                        </Button>
                      )}
                    </div>
                  </FormControl>
                  {!fieldState.invalid && !isVerified && (
                    <FormDescription>
                      Please enter your Pointfree ID to transfer Pointfree
                      points.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            {isVerified && (
              <Button
                type="submit"
                className="mt-4 w-full"
                disabled={
                  !form.formState.isDirty ||
                  !form.formState.isValid ||
                  form.formState.isSubmitting
                }
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-1 animate-spin" />
                )}
                Transfer Point
              </Button>
            )}
          </form>
        </Form>

        <div>
          <Heading level={5}>History</Heading>

          <div className="w-full border-b border-gray-200 py-3">
            <span className="text-sm text-[#64748B]">24.12.05</span>
            <p>
              510,243,000 BONDX{' '}
              <Icon
                name="arrow-right"
                className="inline-block align-[-0.175em]"
              />{' '}
              241,240 Point
            </p>
          </div>
          <div className="w-full py-3">
            <span className="text-sm text-[#64748B]">24.12.05</span>
            <p>
              3,000 BONDX{' '}
              <Icon
                name="arrow-right"
                className="inline-block align-[-0.175em]"
              />{' '}
              240 Point
            </p>
          </div>
        </div>
      </div>

      <AlertDialog
        open={isTransferDialogOpen}
        onOpenChange={handleTransferDialogOpenChange}
      >
        <AlertDialogContent
          className="max-w-[375px]"
          portalProps={{ container: rootRef.current }}
        >
          <AlertDialogHeader>
            <div className="flex justify-center">
              <Icon name="send" className="text-[40px]" />
            </div>
            <AlertDialogTitle className="text-center">
              Transfer points to PointFree
            </AlertDialogTitle>
            <AlertDialogDescription>
              <span
                role="alert"
                className="block rounded-[6px] bg-[#F8FAFC] px-6 py-3 text-center text-[16px] font-semibold text-[#475569]"
              >
                <p>510,243,000 BONDX</p>
                <Icon name="arrow-down" className="inline-block" />
                <p>241,240 Point</p>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="w-full"
              buttonProps={{ variant: 'outline' }}
            >
              Transfer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
            <AlertDialogDescription>
              <span
                role="alert"
                className="block rounded-[6px] bg-[#F8FAFC] px-6 py-3 text-center text-[16px] font-semibold text-[#475569]"
              >
                PointFree ID registration
                <br />
                completed successfully.
              </span>
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
