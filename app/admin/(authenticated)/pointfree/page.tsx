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
    num: 16,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 15,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 14,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 13,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 12,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 11,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 10,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 9,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 8,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 7,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 6,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 5,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 4,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 3,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
  {
    num: 2,
    email: 'usersemail@gmail.com',
    pointEntryID: '-',
    status: '미등록',
  },
  {
    num: 1,
    email: 'usersemail@gmail.com',
    pointEntryID: 'userid2024',
    status: '등록',
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: 'num', header: 'Num' },
  { accessorKey: 'email', header: '이메일 계정' },
  { accessorKey: 'pointEntryID', header: '포인트프리 ID' },
  {
    accessorKey: 'status',
    header: 'ID 등록 상태',
    cell: ({ row }) => {
      const isCheck = row.getValue('status') === '등록';
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

export default function PointFreePage() {
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = React.useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <>
      <PageHeader title="포인트프리" />
      <PageBody>
        <div className="mb-4">
          <Input
            placeholder="Search 이메일 계정, 포인트프리 ID"
            value={globalFilter}
            onChange={handleFilterChange}
            className="mb-2"
          />
        </div>
        <DataTable
          data={data}
          columns={columns}
          onRowClick={({ id }) =>
            router.push(`/admin/pointfree/${id}`)
          }
        />
      </PageBody>
    </>
  );
}
