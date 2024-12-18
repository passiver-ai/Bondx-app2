'use client';

import * as React from 'react';

const iconList = {
  back: () => import('@/assets/icons/back.svg'),
  wallet: () => import('@/assets/icons/wallet.svg'),
  dashboard: () => import('@/assets/icons/dashboard.svg'),
  'user-profile': () => import('@/assets/icons/user-profile.svg'),
};

const Icon = ({ name, size = 24, className }) => {
  const [IconComponent, setIconComponent] = React.useState(null);

  React.useEffect(() => {
    const loadIcon = async () => {
      try {
        const importedIcon = await iconList[name]();
        setIconComponent(() => importedIcon.default);
      } catch (error) {
        console.error(`Error loading icon "${name}":`, error);
        setIconComponent(null); // Handle missing icons gracefully
      }
    };

    loadIcon();
  }, [name]);

  if (!IconComponent) {
    return <div style={{ width: size, height: size }} />;
  }

  return <IconComponent width={size} height={size} className={className} aria-hidden="true" />;
};

export default Icon;
