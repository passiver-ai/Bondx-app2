'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';

import BottomNavigationBar from '@/components/BottomNavigationBar';
import Icon from '@/components/Icon';

import { cn } from '@kit/ui/utils';

// Context for AuthenticatedLayout
interface AuthenticatedLayoutContextProps {
  title?: string;
  showBottomBar?: boolean;
  hasBackButton?: boolean;
  setTitle?: (title: string) => void;
  setShowBottomBar?: (showBottomBar: boolean) => void;
  setHasBackButton?: (hasBackButton: boolean) => void;
}

const AuthenticatedLayoutContext = React.createContext<
  AuthenticatedLayoutContextProps | undefined
>(undefined);

export const useAuthenticatedLayoutContext = () => {
  const context = React.useContext(AuthenticatedLayoutContext);
  if (!context) {
    throw new Error(
      'useAuthenticatedLayoutContext must be used within an AuthenticatedLayoutProvider',
    );
  }
  return context;
};

interface AuthenticatedLayoutProviderProps {
  value: AuthenticatedLayoutContextProps;
  children: React.ReactNode;
}

export const AuthenticatedLayoutProvider: React.FC<
  AuthenticatedLayoutProviderProps
> = ({ value, children }) => {
  const [title, setTitle] = React.useState<string | undefined>(value.title);
  const [showBottomBar, setShowBottomBar] = React.useState<boolean | undefined>(
    value.showBottomBar,
  );
  const [hasBackButton, setHasBackButton] = React.useState<boolean | undefined>(
    value.hasBackButton,
  );

  const contextValue = {
    title,
    showBottomBar,
    hasBackButton,
    setTitle,
    setShowBottomBar,
    setHasBackButton,
  };

  return (
    <AuthenticatedLayoutContext.Provider value={contextValue}>
      {children}
    </AuthenticatedLayoutContext.Provider>
  );
};

// AuthenticatedLayout Component
const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    title,
    showBottomBar,
    hasBackButton = false,
  } = useAuthenticatedLayoutContext(); // Access context values
  const router = useRouter();

  return (
    <div className="min-h-full w-full">
      <header
        className={cn(
          'container sticky top-0 z-50 flex h-[60px] items-center border-[#E2E8F0] bg-white',
          hasBackButton && 'border-b-[1px]',
        )}
      >
        {hasBackButton && (
          <button onClick={() => router?.back()}>
            <Icon size={26} name="back" />
          </button>
        )}
        <div
          className={cn(
            'w-full font-semibold text-[#1E293B]',
            hasBackButton ? 'pr-[26px] text-center text-[18px]' : 'text-[24px]',
          )}
        >
          {title}
        </div>
      </header>
      <div className={cn('relative', showBottomBar && 'pb-[80px]')}>
        {children}
      </div>
      {showBottomBar && <BottomNavigationBar />}
    </div>
  );
};

export default AuthenticatedLayout;
