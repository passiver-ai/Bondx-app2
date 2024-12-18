'use client';
import React from 'react';
import DashboardLogo from './Icons/DashboardLogo';
import WalletIcon from './Icons/WalletIcon';
import { useRouter, usePathname } from 'next/navigation';
import UserProfileIcon from './Icons/UserProfileIcon';

const tabs = [
  {
    route: '/dashboard',
    icon: <DashboardLogo />,
    label: 'Dashboard',
  },
  {
    route: '/wallet',
    icon: <WalletIcon />,
    label: 'Wallet',
  },
  {
    route: '/profile',
    icon: <UserProfileIcon />,
    label: 'Profile',
  },
];

const BottomNavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(router, 'router');
  console.log(pathname, 'pathname');

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[calc(506px-48px)] mx-auto">
      <nav className="w-full" role="navigation">
        <div className="flex flex-row justify-between px-6 py-3 border-t-[1px] border-neutral-300">
          {tabs.map((tab, index) => (
            <div key={`tab-${index}`} onClick={() => router.push(tab.route)} className="cursor-pointer min-w-[85px]">
              <div
                className={`nav-link ${
                  pathname?.includes(tab?.route)
                    ? 'text-neutral-800 stroke-neutral-800'
                    : 'text-neutral-400 stroke-neutral-400'
                }`}>
                <div className="flex flex-col justify-between gap-[4px] items-center">
                  <div className="h-[28px]">{tab?.icon}</div>
                  <div className={`inter-500 text-12 leading-[20px]`}>{tab.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigationBar;
