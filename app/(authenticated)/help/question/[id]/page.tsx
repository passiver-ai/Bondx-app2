'use client';

import * as React from 'react';

import { useParams } from 'next/navigation';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import type { RootState } from '@/store';
import { useRouter } from 'next-nprogress-bar';
import { useSelector } from 'react-redux';

import { Badge } from '@kit/ui/badge';
import { Heading } from '@kit/ui/heading';
import { cn } from '@kit/ui/utils';

export default function QuestionDetail() {
  const params = useParams();
  const router = useRouter();
  const { questions } = useSelector((state: RootState) => state.question);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const question = React.useMemo(
    () => questions.find((q) => q.id === params?.id),
    [questions, params],
  );

  React.useLayoutEffect(() => {
    setTitle?.('profile:question');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  React.useEffect(() => {
    if (!question) setTimeout(() => router.replace('/help'), 5000);
  }, [question, router]);

  return (
    <div className={cn('container flex flex-col py-2')}>
      {question ? (
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center justify-between py-2">
              <Badge
                variant="outline"
                className="bg-[#F1F5F9] capitalize text-[#475569]"
              >
                {question?.category}
              </Badge>
              <span className="text-sm text-[#64748B]">2024.12.05</span>
            </div>
            <Heading level={5}>{question?.title}</Heading>
            <p>{question?.description}</p>
          </div>
          <hr />
          <div className="w-full rounded-lg bg-[#F8FAFC] p-3 text-[#334155]">
            <span>
              <Icon
                name="message-circle"
                className="inline-block align-[-0.175em]"
              />{' '}
              Answered
            </span>
            <hr className="my-2" />
            <div className="space-y-3">
              <p>
                We apologize for the inconvenience. We&apos;ll take care of it
                quickly.
              </p>
              <p>We&apos;ll start by reaching out to you via email.</p>
              <p>Thank you.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 py-6 text-center text-[#64748B]">
          <Icon
            className="inline-block text-[36px]"
            name="clipboard-signature"
          />
          <p>Question not found.</p>
          <p>Redirecting in 5 seconds.</p>
        </div>
      )}
    </div>
  );
}
