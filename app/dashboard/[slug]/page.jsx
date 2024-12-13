import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

const Dashboard = () => {
  return (
    <Layout showBottomBar={false} title={"BNB"} hasBackButton={true}>
      <div className="py-2 overflow-y-auto no-scrollbar">
        <div className="max-w-xl mx-auto mb-6">
          <div className="space-y-6">
            {/* Token Info Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <img
                    src="https://img.freepik.com/premium-vector/bnx-logo-bnx-letter-bnx-letter-logo-design-initials-bnx-logo-linked-with-circle-uppercase-monogram-logo-bnx-typography-technology-business-real-estate-brand_229120-64149.jpg?w=740"
                    alt="BNX Token"
                    className="rounded-full bg-gray-100 h-[48px] w-[48px]"
                  />
                </div>
                <div>
                  <h2 className="inter-600 text-[18px] text-black">BNX</h2>
                  <p className="text-[#6B7280] pretendard-500 text-[14px]">
                    BONDX
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="inter-600 text-[18px] text-black">
                  2,000.392839
                </div>
                <div className="text-[#6B7280] pretendard-500 text-[14px]">
                  ≈ 0 USDT
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                variant="outline"
                className="w-full py-6 text-[#0F172A] pretendard-500 text-[16px] rounded-[6px] bg-[#F1F5F9] hover:bg-gray-100 h-[44px] border-[1px] border-[#E2E8F0] flex items-center justify-center"
              >
                Deposit
              </button>
              <button
                variant="outline"
                className="w-full py-6 text-[#0F172A] pretendard-500 text-[16px] rounded-[6px] bg-[#F1F5F9] hover:bg-gray-100 h-[44px] border-[1px] border-[#E2E8F0] flex items-center justify-center"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[18px] inter-600 text-[#334155] mb-4">
            History
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="w-full">
            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black pretendard-400 text-[16px]">
                  Withdraw
                </span>
                <span className="text-red-500 pretendard-500 text-[16px]">
                  -200.2345432
                </span>
              </div>
              <div className="text-[#64748B] pretendard-400 text-[14px]">
                2024.12.04 10:01:23
              </div>
            </div>

            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">Deposit</span>
                <span className="text-green-500 font-semibold">
                  +2,000.392839
                </span>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                2024.12.06 12:07:36
              </div>
            </div>
            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">Deposit</span>
                <span className="text-green-500 font-semibold">
                  +2,000.392839
                </span>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                2024.12.06 12:07:36
              </div>
            </div>

            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">Deposit</span>
                <span className="text-green-500 font-semibold">
                  +2,000.392839
                </span>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                2024.12.06 12:07:36
              </div>
            </div>
            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black pretendard-400 text-[16px]">
                  Withdraw
                </span>
                <span className="text-red-500 pretendard-500 text-[16px]">
                  -200.2345432
                </span>
              </div>
              <div className="text-[#64748B] pretendard-400 text-[14px]">
                2024.12.04 10:01:23
              </div>
            </div>

            <div className="py-4">
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">Withdraw</span>
                <span className="text-red-500 font-semibold">-200.2345432</span>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                2024.12.04 10:01:23
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
