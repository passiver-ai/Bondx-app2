'use client';

import * as React from 'react';

import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next-nprogress-bar';

import { Input } from '@kit/ui/input';
import { PageBody, PageHeader } from '@kit/ui/page';
import { Tabs, TabsList, TabsTrigger } from '@kit/ui/tabs';

const data = [
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '999,999,999.999999',
    bondxDepositAmount: '999,999,999.999999',
    bondxTotalAmount: '999,999,999.999999',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
  {
    email: 'usersemail@gmail.com',
    address: '0xC38a918EAF6861E356316C6449E85E29C18EF39E',
    bondxAmount: '1,000.000000',
    bondxDepositAmount: '161,000.193093',
    bondxTotalAmount: '162,000.193093',
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: 'email', header: '이메일 계정' },
  { accessorKey: 'address', header: '지갑 주소' },
  { accessorKey: 'bondxAmount', header: 'BONDX 수량' },
  { accessorKey: 'bondxDepositAmount', header: 'BONDX 잠금 수량' },
  { accessorKey: 'bondxTotalAmount', header: 'BONDX 총 수량' },
];

export default function WalletManagementPage() {
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = React.useState('');

  const handleFilterChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setGlobalFilter(event.target.value);
  }, []);

  return (
    <>
      <PageHeader title="유저 관리" />
      <PageBody>
        <Tabs defaultValue="wallet" className="mb-4 max-w-[260px]">
          <TabsList className="w-full">
            <TabsTrigger value="wallet">유저 지갑</TabsTrigger>
            <TabsTrigger value="deposit_withdrawal">입/출금</TabsTrigger>
            <TabsTrigger value="withdrawal_application">출금 신청</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mb-4">
          <Input
            placeholder="Search 이메일 계정, 지갑 주소"
            value={globalFilter}
            onChange={handleFilterChange}
            className="mb-2"
          />
        </div>
        <DataTable
          data={data}
          columns={columns}
          onRowClick={({ id }) => router.push(`/admin/wallet-management/${id}`)}
        />
      </PageBody>
    </>
  );
}
