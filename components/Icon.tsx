'use client';

import * as React from 'react';

const iconList = {
  back: () => import('@/assets/icons/back.svg'),
  send: () => import('@/assets/icons/send.svg'),
  check: () => import('@/assets/icons/check.svg'),
  wallet: () => import('@/assets/icons/wallet.svg'),
  dashboard: () => import('@/assets/icons/dashboard.svg'),
  'cross-circle': () => import('@/assets/icons/cross-circle.svg'),
  'alert-circle': () => import('@/assets/icons/alert-circle.svg'),
  'user-profile': () => import('@/assets/icons/user-profile.svg'),
  'chevron-right': () => import('@/assets/icons/chevron-right.svg'),
};

export type Icons = keyof typeof iconList;
export type IconProps = {
  name: Icons;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
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
    return <div style={{ width: size, height: size }} />;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
};

export default Icon;
