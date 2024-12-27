'use client';

import * as React from 'react';

import Link from 'next/link';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';

import { Button } from '@kit/ui/button';
import { Trans } from '@kit/ui/trans';
import { cn } from '@kit/ui/utils';

export default function Help() {
  const { questions } = useSelector((state: RootState) => state.question);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('profile:helpCenter');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div
      className={cn(
        'container flex flex-col',
        questions.length > 0 ? 'pb-6 pt-2' : 'py-6',
      )}
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100 - 60px)' }}
    >
      {questions.length > 0 ? (
        <div className="flex-1">
          {questions.map((question) => (
            <Link
              key={question.id}
              href={`/help/question/${question.id}`}
              className="block space-y-1 border-b border-gray-200 py-4"
            >
              <span className="text-sm text-[#64748B]">24.12.05</span>
              <div className="flex">
                <p className="flex-1">{question.title}</p>
                <span className="text-[#64748B]">
                  {/* {question.status} */}
                  <Trans i18nKey="common:pending" />{' '}
                  <Icon
                    name="chevron-right"
                    className="inline-block align-[-0.185em] text-xl"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex-1 py-6 text-center text-[#64748B]">
          <Icon
            className="inline-block text-[36px]"
            name="clipboard-signature"
          />
          <p>
            <Trans i18nKey="profile:messages:helpCenter:emptyInquiries" />
          </p>
        </div>
      )}
      <Button className="w-full" asChild>
        <Link href="/help/submission">
          <Trans i18nKey="profile:submitQuestion" />
        </Link>
      </Button>
    </div>
  );
}
