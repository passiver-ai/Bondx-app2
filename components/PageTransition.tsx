'use client';

import * as React from 'react';

import { usePathname } from 'next/navigation';

import { cn } from '@kit/ui/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  duration?: number; // Default transition duration
  className?: string;
  transitionClasses?: {
    enter: string;
    exit: string;
  };
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className,
  duration = 300,
  transitionClasses = {
    enter: 'opacity-100 scale-100',
    exit: 'opacity-0 scale-95',
  },
}) => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), duration);
    return () => clearTimeout(timeout);
  }, [pathname, duration]);

  return (
    <div
      className={cn(
        className,
        `duration-${duration}`,
        'transition-all ease-in-out',
        isTransitioning ? transitionClasses.exit : transitionClasses.enter,
      )}
    >
      {!isTransitioning && children}
    </div>
  );
};

export default PageTransition;
