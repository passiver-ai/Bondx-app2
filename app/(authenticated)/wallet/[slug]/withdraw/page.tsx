'use client';

import * as React from 'react';

import { useRouter } from 'next-nprogress-bar';

import FormMessage from '@/components/FormMessage';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
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
import { Input } from '@kit/ui/input';

const availableBalance = 3.291029; // Example balance for BNB
const bnbAddressRegex = /^0x[a-fA-F0-9]{40}$/;

const transferSchema = z.object({
  address: z
    .string()
    .min(1, 'Address is required')
    .refine((val) => bnbAddressRegex.test(val), {
      message: 'The address format is wrong.',
    }),
  amount: z
    .number()
    .positive('Amount must be greater than zero')
    .lte(availableBalance, 'Insufficient balance.'),
});

type TransferFormData = z.infer<typeof transferSchema>;

export default function Withdraw() {
  const router = useRouter();
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Withdraw');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const form = useForm<TransferFormData>({
    mode: 'onChange',
    resolver: zodResolver(transferSchema),
    defaultValues: {
      address: '',
      amount: 0,
    },
  });

  const onSubmit: SubmitHandler<TransferFormData> = async (data) => {
    console.log('Form Submitted', data);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work

    router.push('/wallet/bnb/withdraw/confirmation');
  };

  const handleMaxClick = () => {
    form.setValue('amount', availableBalance, {
      shouldValidate: true,
    });
  };

  return (
    <div className="container py-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col items-center justify-center gap-4"
        >
          <div className="flex w-full flex-col gap-2">
            <FormField
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Enter Address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="input-box flex space-x-2">
                      <Input
                        {...field}
                        type="number"
                        placeholder="Enter Amount"
                        step="0.000001"
                        onBlur={() => field.onBlur()}
                        value={field.value ?? ''}
                        onChange={(e) =>
                          field.onChange(
                            e.target.valueAsNumber < 0
                              ? 0
                              : e.target.valueAsNumber,
                          )
                        }
                      />
                      <Button type="button" onClick={handleMaxClick}>
                        Max
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Available: {availableBalance} BNB
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              !form.formState.isDirty ||
              !form.formState.isValid ||
              form.formState.isSubmitting
            }
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-1 animate-spin" />
            )}
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
