'use client';

import * as React from 'react';

import { Button } from '@kit/ui/button';
import { Form, FormControl, FormField, FormItem } from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';
import { useMultiStepFormContext } from '@kit/ui/multi-step-form';

import FormMessage from '../FormMessage';

export const IDCard: React.FC = () => {
  const { form, nextStep, isStepValid } = useMultiStepFormContext();
  const imageFile = form.watch('id.image');
  const [preview, setPreview] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (imageFile?.[0]) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [imageFile]);

  const handleRetry = () => {
    form.setValue('id.image', null); // Reset the file input
    setPreview(null); // Clear the preview
  };

  return (
    <Form {...form}>
      <div className={'mt-6 flex flex-col'}>
        <Heading level={5} className="mb-1 mt-3 w-full text-center">
          Take a photo of your ID
        </Heading>
        <FormField
          name="id.image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <Input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  <div className="space-y-4">
                    <div
                      className="h-48 w-full overflow-hidden rounded-lg border bg-gray-100"
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${preview ?? '/images/kyc-placeholder.jpg'})`,
                      }}
                    />
                    <div className="flex space-x-4">
                      <Button
                        asChild
                        type="button"
                        onClick={handleRetry}
                        className="flex-1 cursor-pointer"
                        variant={!preview ? 'default' : 'outline'}
                      >
                        <label htmlFor="file-input">
                          {preview ? 'Retry' : 'Take a photo'}
                        </label>
                      </Button>
                      {preview && (
                        <Button
                          onClick={nextStep}
                          className="flex-1"
                          disabled={!isStepValid()}
                        >
                          Continue
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
};
