"use client";
import Image from "next/image";
import BondXLogo from "../../public/BondXlogo.svg";
import ActionButton from "@/components/Buttons/ActionButton";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-full bg-neutral-50 px-6">
            <Image src={BondXLogo} width={118} height={23} alt={"BondX Logo"} />
            <div className="text-[24px] inter-600 text-black">
                E-mail Verification Required
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-[16px] pretendard-400 text-[#1E293B] rounded-[6px] bg-[#E2E8F0] p-3 text-center">
                    Check your email and click the verification link to
                    continue. If you don&apos;t receive an email, check your
                    spam folder.
                </div>
            </div>
            <div className="w-full">
                <ActionButton
                    title={"Go to Login"}
                    onClick={() => router?.push("/")}
                />

                <button
                    type="button"
                    className="w-full h-[48px] p-3 rounded-[6px] text-[16px] pretendard-500 mt-[10px]"
                >
                    Resend Verification E-mail
                </button>
            </div>
        </div>
    );
}
