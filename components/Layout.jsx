'use client';
import React from 'react';
import BottomNavigationBar from './BottomNavigationBar';
import BackIcon from './Icons/BackIcon';
import { useRouter } from 'next/navigation';

const Layout = ({ children, showBottomBar, title, hasBackButton = false }) => {
  const router = useRouter();
  return (
    <div className="h-full w-full ">
      <div className={`${showBottomBar ? 'h-[calc(100vh-76px)]' : 'h-[100vh]'} overflow-y-auto no-scrollbar relative`}>
        {hasBackButton ? (
          <div className="h-[56px] pretendard-500 text-[24px] text-[#1E293B] flex items-center sticky top-0 bg-white px-6 z-[99] border-b-[1px] border-[#E2E8F0]">
            <button onClick={() => router?.back()}>
              <BackIcon />
            </button>
            <div className="text-center justify-center items-center absolute left-1/2 -translate-x-1/2">{title}</div>
          </div>
        ) : (
          <div className="h-[56px] inter-600 text-[24px] flex items-center sticky top-0 bg-white px-6">{title}</div>
        )}
        <div className="px-6">{children}</div>
      </div>
      {showBottomBar && <BottomNavigationBar />}
    </div>
  );
};

export default Layout;
