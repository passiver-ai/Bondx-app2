"use client";

import Image from "next/image";
import BondXLogo from "../../public/BondXlogo.svg";
import ActionButton from "../components/Buttons/ActionButton";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    router?.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center h-full"
    >
      <Image src={BondXLogo} width={118} height={23} alt={"BondX Logo"} />
      <div className="text-[24px] inter-600 text-black">Reset Password</div>
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full">
          <div className="mb-[2px] pretendard-400 text-[16px] text-black leading-[28px]">
            Password
          </div>
          <input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message:
                  "Password must be at least 8 characters long, 1 lowercase letter, 1 number, and 1 special character",
              },
              minLength: {
                value: 8,
                message:
                  "Password must be at least 8 characters long, 1 lowercase letter, 1 number, and 1 special character",
              },
            })}
            autoComplete={"off"}
            className="w-full p-3 rounded-[6px] border-[1px] border-neutral-300 text-[20px]"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <div className="mb-[2px] pretendard-400 text-[16px] text-black leading-[28px]">
            Password Confirm
          </div>
          <input
            {...register("password_confirm", {
              required: "Password Confirm is required",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Passwords do not match";
                }
              },
            })}
            autoComplete={"off"}
            className="w-full p-3 rounded-[6px] border-[1px] border-neutral-300 text-[20px]"
            placeholder="Password Confirm"
            type="password"
          />
          {errors.password_confirm && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password_confirm.message}
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
        <ActionButton
          title={"Change Password"}
          type={"submit"}
          isDisabled={!isDirty || !isValid}
        />
      </div>
    </form>
  );
}
