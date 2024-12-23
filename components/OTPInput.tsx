/* eslint-disable react/display-name */
'use client';

import * as React from 'react';

import { cn } from '@kit/ui/utils';

/* eslint-disable react/display-name */

/* eslint-disable react/display-name */

export type OTPInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onCountdownEnd?: () => void;
  startTimer?: boolean;
  hideTimer?: boolean;
  initialTimeLeft?: number;
};

const OTPInput = React.forwardRef<HTMLInputElement, OTPInputProps>(
  (
    {
      className,
      onCountdownEnd,
      startTimer = true,
      hideTimer = false,
      initialTimeLeft = 600,
      ...props
    },
    ref,
  ) => {
    const [timeLeft, setTimeLeft] = React.useState(initialTimeLeft);

    React.useEffect(() => {
      if (!startTimer) return;

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onCountdownEnd?.(); // Call the callback when the countdown ends
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, [startTimer, onCountdownEnd]);

    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`;
    };

    return (
      <div
        className={cn(
          'flex h-9 w-full items-center gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
          className,
        )}
      >
        <input
          type="text"
          maxLength={6} // Adjust maxLength based on your OTP length
          className={cn(
            'flex placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {!hideTimer && (
          <span className="whitespace-nowrap text-sm text-[#0EA5E9]">
            {formatTime(timeLeft)}
          </span>
        )}
      </div>
    );
  },
);

export default OTPInput;
