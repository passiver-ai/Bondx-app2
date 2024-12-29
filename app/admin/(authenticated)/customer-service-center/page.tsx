'use client';

import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { CircleCheckBig, CircleMinus } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';

import { PageBody, PageHeader } from '@kit/ui/page';
import { cn } from '@kit/ui/utils';

const data = [
  {
    email: 'usersemail@gmail.com',
    title: '출금 이슈',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 미등록',
  },
  {
    email: 'usersemail@gmail.com',
    title: '입금 주소는 어디서 봐야하나요?',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    title: '출금이 너무 늦어요 확인해주세요',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    title: '이메일주소 변경하고 싶어요',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    title: '출금된거 맞나요?',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: 'email', header: '이메일 계정' },
  { accessorKey: 'title', header: '문의 제목' },
  { accessorKey: 'category', header: '카테고리' },
  { accessorKey: 'date', header: '날짜' },
  {
    accessorKey: 'status',
    header: '답변 상태',
    cell: ({ row }) => {
      const isCheck = row.getValue('status') === '답변 완료';
      const Icon = !isCheck ? CircleMinus : CircleCheckBig;

      return (
        <div>
          <Icon
            className={cn(
              'inline-block h-[1em]',
              !isCheck ? 'text-[#64748B]' : 'text-[#22C55E]',
            )}
          />{' '}
          {row.getValue('status')}
        </div>
      );
    },
  },
];

export default function CustomerCenterPage() {
  const router = useRouter();

  return (
    <>
      <PageHeader title="고객 센터" />
      <PageBody>
        <DataTable
          data={data}
          columns={columns}
          onRowClick={({ id }) => router.push(`/admin/customer-service-center/${id}`)}
        />
      </PageBody>
    </>
  );
}
