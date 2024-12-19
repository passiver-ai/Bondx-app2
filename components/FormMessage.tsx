import * as React from 'react';

import { useFormField } from '@kit/ui/form';
import { cn } from '@kit/ui/utils';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
      {/* {typeof body === 'string' ? (
        <Trans i18nKey={body} defaults={body} />
      ) : ()} */}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

export default FormMessage;
