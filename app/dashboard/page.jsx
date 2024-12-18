'use client';
import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  return (
    <Layout showBottomBar={true} title={'Dashboard'}>
      <div className="text-white py-2 overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-start space-y-1 text-gray-900 mb-6">
          <div className="text-sm font-medium uppercase">Total Bondx</div>
          <div className="text-4xl font-bold">2,000.392839</div>
          <div className="text-sm text-gray-500">≈ 0 USDT</div>
        </div>

        <div className="bg-[#F8FAFC] rounded-[6px] p-3">
          <div className="mb-4">
            <p className="text-[#334155] text-[14px] pretendard-500 mb-[2px]">Withdrawable</p>
            <p className="text-[#334155] inter-600 text-[18px]">0 BONDX</p>
          </div>
          <div className="mb-4">
            <p className="text-[#334155] text-[14px] pretendard-500 mb-[2px]">Locked</p>
            <p className="text-[#334155] inter-600 text-[18px]">2,000.392839 BONDX</p>
          </div>
          <div>
            <p className="text-[#334155] text-[14px] pretendard-500 mb-[2px]">Withdrawn</p>
            <p className="text-[#334155] inter-600 text-[18px]">300.192839 BONDX</p>
          </div>
        </div>

        <div className="my-6 border-[1px] border-[#E2E8F0]"></div>

        <div>
          <div className="text-[18px] inter-600 text-[#334155] mb-4">History</div>
          <div className="bg-[#F8FAFC] rounded-[6px] p-3">
            <div className="mb-4">
              <p className="text-[#334155] text-[14px] pretendard-500 mb-[2px]">Lock Remaining</p>
              <p className="text-[#334155] inter-600 text-[18px]">1,203.398219 BONDX</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="w-full">
            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black pretendard-400 text-[16px]">Withdraw</span>
                <span className="text-red-500 pretendard-500 text-[16px]">-200.2345432</span>
              </div>
              <div className="text-[#64748B] pretendard-400 text-[14px]">2024.12.04 10:01:23</div>
            </div>

            <div className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">Deposit</span>
                <span className="text-green-500 font-semibold">+2,000.392839</span>
              </div>
              <div className="text-gray-500 text-sm mt-1">2024.12.06 12:07:36</div>
            </div>

            <div className="py-4">
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">Withdraw</span>
                <span className="text-red-500 font-semibold">-200.2345432</span>
              </div>
              <div className="text-gray-500 text-sm mt-1">2024.12.04 10:01:23</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => router?.push('/dashboard/bondx')}
            className="text-[#0F172A] px-4 py-2 pretendard-500 hover:bg-gray-200 h-[48px] rounded-[6px] border-[1px] border-[#E2E8F0] w-full">
            More
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
