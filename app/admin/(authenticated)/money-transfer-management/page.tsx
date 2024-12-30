'use client';

import * as React from 'react';

import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { CircleCheckBig, CircleX, Hourglass } from 'lucide-react';

import { Input } from '@kit/ui/input';
import { PageBody, PageHeader } from '@kit/ui/page';
import { cn } from '@kit/ui/utils';

const data = [
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '대기중',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '실패',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    sender_account: 'usersemail@gmail.com',
    receiver_account: 'jake0102@gmail.com',
    bondx_amount: '161,000.193093',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: 'sender_account', header: '보낸 계정' },
  { accessorKey: 'receiver_account', header: '받은 계정' },
  { accessorKey: 'bondx_amount', header: 'BONDX 수량' },
  { accessorKey: 'date', header: '날짜' },
  {
    accessorKey: 'status',
    header: '상태',
    cell: ({ row }) => {
      const isCheck = row.getValue('status') === '완료';
      const isCross = row.getValue('status') === '실패';
      const Icon = isCheck ? CircleCheckBig : isCross ? CircleX : Hourglass;

      return (
        <div>
          <Icon
            className={cn(
              'inline-block h-[1em]',
              isCheck
                ? 'text-[#22C55E]'
                : isCross
                  ? 'text-[#EF4444]'
                  : 'text-[#F97316]',
            )}
          />{' '}
          {row.getValue('status')}
        </div>
      );
    },
  },
];

export default function MoneyTransferManagementPage() {
  const [globalFilter, setGlobalFilter] = React.useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <>
      <PageHeader title="유저 간 송금 관리" />
      <PageBody>
        <div className="mb-4">
          <Input
            placeholder="Search 보낸 계정, 받은 계정"
            value={globalFilter}
            onChange={handleFilterChange}
            className="mb-2"
          />
        </div>
        <DataTable data={data} columns={columns} />
      </PageBody>
    </>
  );
}
