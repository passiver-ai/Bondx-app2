"use client";
import Image from "next/image";
import BondXLogo from "../../public/BondXlogo.svg";
import ActionButton from "@/components/Buttons/ActionButton";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(data); // Handle form submission here
        router?.push("/email-varification");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-center justify-center h-full bg-neutral-50 px-6"
        >
            <Image src={BondXLogo} width={118} height={23} alt={"BondX Logo"} />
            <div className="text-[24px] inter-600 text-black">
                Forgot your password?
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="w-full">
                    <div className="mb-[2px] pretendard-400 text-[16px] text-black leading-[28px]">
                        E-mail
                    </div>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full p-3 rounded-[6px] border-[1px] border-neutral-300 text-[20px]"
                        placeholder="E-mail"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="w-full">
                <ActionButton
                    title={"Send Verification E-mail"}
                    type={"submit"}
                    isDisabled={!isDirty || !isValid}
                />
            </div>
        </form>
    );
}
