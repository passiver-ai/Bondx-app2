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
      <header className="container fixed top-0 z-[99] flex h-[56px] items-center border-b-[1px] border-[#E2E8F0] bg-white">
        {hasBackButton && (
          <button onClick={() => router?.back()}>
            <Icon size={26} name="back" />
          </button>
        )}
        <div
          className={cn(
            'w-full text-[#1E293B]',
            hasBackButton
              ? 'pr-[26px] text-center text-[16px] font-normal'
              : 'text-[24px] font-semibold',
          )}
        >
          {title}
        </div>
      </header>
      <div className={cn('relative pt-[60px]', showBottomBar && 'pb-[80px]')}>
        {children}
      </div>
      {showBottomBar && <BottomNavigationBar />}
    </div>
  );
};

export default AuthenticatedLayout;
