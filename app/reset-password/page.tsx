'use client';

import { useRouter } from 'next/navigation';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

// Define Zod schema for validation
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message:
          'Password must include 1 lowercase letter, 1 number, and 1 special character',
      }),
    password_confirm: z.string(),
  })
  .refine((data) => data.password === data.password_confirm, {
    path: ['password_confirm'], // Specify the field to show the error
    message: 'Passwords do not match',
  });

// Infer TypeScript type from Zod schema
type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ResetPasswordFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = (data) => {
    console.log('Form Data:', data); // Handle form submission here
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]"
    >
      <BondXLogo />
      <div className="inter-600 text-[24px] text-black">Reset Password</div>
      <div className="flex w-full flex-col gap-2">
        <div className="w-full">
          <label
            htmlFor="password"
            className="pretendard-400 mb-[2px] text-[16px] leading-[28px] text-black"
          >
            Password
          </label>
          <input
            {...register('password')}
            id="password"
            type="password"
            autoComplete="off"
            className="w-full rounded-[6px] border-[1px] border-neutral-300 p-3 text-[20px]"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="password_confirm"
            className="pretendard-400 mb-[2px] text-[16px] leading-[28px] text-black"
          >
            Confirm Password
          </label>
          <input
            {...register('password_confirm')}
            id="password_confirm"
            type="password"
            autoComplete="off"
            className="w-full rounded-[6px] border-[1px] border-neutral-300 p-3 text-[20px]"
            placeholder="Confirm your password"
          />
          {errors.password_confirm && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password_confirm.message}
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
        <button
          type="submit"
          disabled={!isDirty || !isValid}
          className={`pretendard-500 h-[48px] w-full rounded-[6px] p-3 text-[16px] ${
            !isDirty || !isValid
              ? 'bg-gray-200 text-gray-500'
              : 'bg-black text-white'
          }`}
        >
          Change Password
        </button>
      </div>
    </form>
  );
}
