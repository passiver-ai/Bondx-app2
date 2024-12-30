'use client';

import * as React from 'react';

import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { CircleCheckBig, CircleMinus } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';

import { Input } from '@kit/ui/input';
import { PageBody, PageHeader } from '@kit/ui/page';
import { cn } from '@kit/ui/utils';

const data = [
  {
    email: 'usersemail@gmail.com',
    subject: '출금 이슈',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 미등록',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '입금 주소는 어디서 봐야하나요?',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '출금이 너무 늦어요 확인해주세요',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '이메일주소 변경하고 싶어요',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '출금된거 맞나요?',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '입금된 수량이 맞는지 모르겠어요',
    category: '지갑',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '사진 확인해주세요',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '첨부 파일을 확인해 주세요',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '로그인이 안되는거 같아요',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '로그아웃을 하고 싶어요',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '탈퇴는 어떻게 해야되나요?',
    category: '일반',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '출금 해주세요',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '본드엑스 입금하고 싶어요',
    category: '입금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '본드엑스는 어디서 사야하나요',
    category: '코인',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '본드엑스 출금 관련 정보',
    category: '출금',
    date: '2024.12.05 12:29:11',
    status: '답변 완료',
  },
  {
    email: 'usersemail@gmail.com',
    subject: '포인트 어떻게 바꾸나요?',
    category: '투자',
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
  const [globalFilter, setGlobalFilter] = React.useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <>
      <PageHeader title="고객 센터" />
      <PageBody>
        <div className="mb-4">
          <Input
            placeholder="Search 이메일 계정, 문의 제목, 카테고리"
            value={globalFilter}
            onChange={handleFilterChange}
            className="mb-2"
          />
        </div>
        <DataTable
          data={data}
          columns={columns}
          onRowClick={({ id }) =>
            router.push(`/admin/customer-service-center/${id}`)
          }
        />
      </PageBody>
    </>
  );
}
