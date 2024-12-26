'use client';

import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kit/ui/form';
import { Input } from '@kit/ui/input';
import { useMultiStepFormContext } from '@kit/ui/multi-step-form';
import { Trans } from '@kit/ui/trans';

export const Information: React.FC = () => {
  const { t } = useTranslation();
  const { form, nextStep, isStepValid } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className={'mt-6 flex flex-col gap-3'}>
        <FormField
          name="information.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:email" />
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('common:form:emailPlaceholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="information.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:name" />
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder={t('common:form:namePlaceholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.residentRegistrationFront"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:residentRegistrationNumberFront" />
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={t(
                    'common:form:residentRegistrationNumberFrontPlaceholder',
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.residentRegistrationBack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:residentRegistrationNumberFront" />
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={t(
                    'common:form:residentRegistrationNumberFrontPlaceholder',
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:postalCode" />
              </FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder={t('common:form:postalCodePlaceholder')}
                    {...field}
                  />
                  <Button type="button">
                    <Trans i18nKey="common:findAddress" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:address" />
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder={t('common:form:addressPlaceholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="information.detailedAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Trans i18nKey="common:form:detailedAddress" /> (
                <Trans i18nKey="common:optional" />)
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder={t('common:form:detailedAddressPlaceholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button onClick={nextStep} disabled={!isStepValid()} className="w-full">
          <Trans i18nKey="common:next" />
        </Button>
      </div>
    </Form>
  );
};
