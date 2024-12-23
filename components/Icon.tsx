'use client';

import * as React from 'react';

import { cn } from '@kit/ui/utils';

const iconList = {
  back: () => import('@/assets/icons/back.svg'),
  send: () => import('@/assets/icons/send.svg'),
  check: () => import('@/assets/icons/check.svg'),
  trash: () => import('@/assets/icons/trash.svg'),
  wallet: () => import('@/assets/icons/wallet.svg'),
  dashboard: () => import('@/assets/icons/dashboard.svg'),
  'arrow-down': () => import('@/assets/icons/arrow-down.svg'),
  'arrow-right': () => import('@/assets/icons/arrow-right.svg'),
  'check-circle': () => import('@/assets/icons/check-circle.svg'),
  'cross-circle': () => import('@/assets/icons/cross-circle.svg'),
  'alert-circle': () => import('@/assets/icons/alert-circle.svg'),
  'user-profile': () => import('@/assets/icons/user-profile.svg'),
  'chevron-right': () => import('@/assets/icons/chevron-right.svg'),
  'message-circle': () => import('@/assets/icons/message-circle.svg'),
  'clipboard-signature': () => import('@/assets/icons/clipboard-signature.svg'),
};

export type Icons = keyof typeof iconList;
export type IconProps = {
  name: Icons;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<
    React.SVGProps<object>
  > | null>(null);

  React.useEffect(() => {
    const loadIcon = async () => {
      try {
        const importedIcon = await iconList[name]();
        setIconComponent(() => importedIcon.default as never);
      } catch (error) {
        console.error(`Error loading icon "${name}":`, error);
        setIconComponent(null); // Handle missing icons gracefully
      }
    };

    void loadIcon();
  }, [name]);

  if (!IconComponent) {
    return <div className={cn(className)} style={{ width: '1em', height: '1em' }} />;
  }

  return <IconComponent aria-hidden="true" className={cn(className)} />;
};

export default Icon;
