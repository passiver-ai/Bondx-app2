/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Fragment, useCallback } from 'react';

import { cva } from 'class-variance-authority';

import { If } from '@kit/ui/if';
import { cn } from '@kit/ui/utils';

/* eslint-disable @typescript-eslint/no-unused-vars */

type Variant = 'numbers' | 'default' | 'dots';

const classNameBuilder = getClassNameBuilder();

/**
 * Renders a stepper component with multiple steps.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - steps {string[]} - An array of strings representing the step labels.
 *   - currentStep {number} - The index of the currently active step.
 *   - variant {string} (optional) - The variant of the stepper component (default: 'default').
 **/
export function Stepper(props: {
  steps: string[];
  currentStep: number;
  variant?: Variant;
}) {
  const variant = props.variant ?? 'default';

  const Steps = useCallback(() => {
    return props.steps.map((labelOrKey, index) => {
      const selected = props.currentStep === index;
      const complete = props.currentStep > index;

      const className = classNameBuilder({
        selected,
        variant,
        complete,
      });

      const isNumberVariant = variant === 'numbers';
      const isDotsVariant = variant === 'dots';

      const labelClassName = cn({
        ['px-1.5 py-2 text-xs']: !isNumberVariant,
        ['hidden']: isDotsVariant,
      });

      const { label, number } = getStepLabel(labelOrKey, index);

      return (
        <Fragment key={index}>
          <div aria-selected={selected} className="relative flex items-center justify-center">
            <div className={className}>
              <span className={labelClassName}>
                {number}
                <If condition={!isNumberVariant}>. {label}</If>
              </span>
            </div>
            <If condition={isNumberVariant}>
              <span className="absolute text-sm text-[#94A3B8] top-[85%] whitespace-nowrap">{label}</span>
            </If>
          </div>

          <If condition={isNumberVariant && index < props.steps.length - 1}>
            <StepDivider selected={selected} complete={complete} />
          </If>
        </Fragment>
      );
    });
  }, [props.steps, props.currentStep, variant]);

  // If there are no steps, don't render anything.
  if (props.steps.length < 2) {
    return null;
  }

  const containerClassName = cn('w-full', {
    ['flex justify-between']: variant === 'numbers',
    ['flex space-x-0.5']: variant === 'default',
    ['flex space-x-2.5 self-center']: variant === 'dots',
  });

  return (
    <div className={containerClassName}>
      <Steps />
    </div>
  );
}

function getClassNameBuilder() {
  return cva(``, {
    variants: {
      variant: {
        default: `flex h-[2.5px] w-full flex-col transition-all duration-500`,
        numbers:
          'flex h-[24px] w-[24px] items-center justify-center rounded-full border text-sm font-bold',
        dots: 'h-2.5 w-2.5 rounded-full bg-muted transition-colors',
      },
      selected: {
        true: '',
        false: 'hidden sm:flex',
      },
      complete: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        selected: false,
        className: 'text-muted-foreground',
      },
      {
        variant: 'default',
        selected: true,
        className: 'bg-primary font-medium',
      },
      {
        variant: 'default',
        selected: false,
        complete: false,
        className: 'bg-muted',
      },
      {
        variant: 'default',
        selected: false,
        complete: true,
        className: 'bg-primary',
      },
      {
        variant: 'numbers',
        selected: false,
        complete: true,
        className: 'border-primary bg-primary text-primary-foreground',
      },
      {
        variant: 'numbers',
        selected: true,
        className: 'border-primary bg-primary text-primary-foreground',
      },
      {
        variant: 'numbers',
        selected: false,
        className: 'text-muted-foreground',
      },
      {
        variant: 'dots',
        selected: true,
        complete: true,
        className: 'bg-primary',
      },
      {
        variant: 'dots',
        selected: false,
        complete: true,
        className: 'bg-primary',
      },
      {
        variant: 'dots',
        selected: true,
        complete: false,
        className: 'bg-primary',
      },
      {
        variant: 'dots',
        selected: false,
        complete: false,
        className: 'bg-muted',
      },
    ],
    defaultVariants: {
      variant: 'default',
      selected: false,
    },
  });
}

function StepDivider({
  selected,
  complete,
  children,
}: React.PropsWithChildren<{
  selected: boolean;
  complete: boolean;
}>) {
  //   const spanClassName = cn('min-w-max text-sm font-medium', {
  //     ['hidden text-muted-foreground sm:flex']: !selected,
  //     ['text-secondary-foreground']: selected || complete,
  //     ['font-medium']: selected,
  //   });

  const className = cn(
    'flex h-9 flex-1 items-center justify-center last:flex-[0_0_0]' +
      ' group flex w-full items-center space-x-3 px-3',
  );

  return (
    <div className={className}>
      {/* <span className={spanClassName}>{children}</span> */}
      <div
        className={
          'divider h-[1px] w-full bg-gray-200 transition-colors' +
          ' hidden group-last:hidden dark:bg-border sm:flex'
        }
      />
    </div>
  );
}

function getStepLabel(labelOrKey: string, index: number) {
  const number = (index + 1).toString();

  return {
    number,
    // label: <Trans i18nKey={labelOrKey} defaults={labelOrKey} />,
    label: labelOrKey,
  };
}
