'use client';

import * as React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@kit/ui/utils';

import Icon, { type IconProps } from './Icon';

const tabs = [
  {
    route: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    route: '/wallet',
    icon: 'wallet',
    label: 'Wallet',
  },
  {
    route: '/profile',
    icon: 'user-profile',
    label: 'Profile',
  },
];

const BottomNavigationBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto bg-white">
      <nav className="w-full" role="navigation">
        <div className="container flex flex-row justify-between border-t-[1px] border-neutral-300 py-3">
          {tabs.map((tab, index) => (
            <div
              key={`tab-${index}`}
              onClick={() => router.push(tab.route)}
              className="min-w-[85px] cursor-pointer"
            >
              <div
                className={cn(
                  'nav-link',
                  pathname?.includes(tab?.route)
                    ? 'stroke-neutral-800 text-neutral-800'
                    : 'stroke-neutral-400 text-neutral-400',
                )}
              >
                <div className="flex flex-col items-center justify-between gap-[4px]">
                  <div className="h-[28px]">
                    <Icon name={tab.icon as IconProps['name']} className='text-[28px]' />
                  </div>
                  <div className="font-heading text-sm leading-[20px]">
                    {tab.label}
                  </div>
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
