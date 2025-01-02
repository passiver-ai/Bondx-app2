'use client';

import * as React from 'react';

import AlertDialog, {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/AlertDialog';
import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { CircleCheckBig, CircleX, Hourglass } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';
import { PageBody, PageHeader } from '@kit/ui/page';
import { Table, TableBody, TableCell, TableRow } from '@kit/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@kit/ui/tabs';
import { cn } from '@kit/ui/utils';

const userWalletData = [
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

const transactionsData = [
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '+1,000.000000 BONDIX',
    type: '입금',
    date: '2024.12.05 12:29:11',
    status: '대기중',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '-999,999,999.999999 BNB',
    type: '출금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '+999,999,999.999999 BNB',
    type: '입금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '-999,999,999.999999 BNB',
    type: '출금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '+999,999,999.999999 BNB',
    type: '입금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '-999,999,999.999999 BNB',
    type: '출금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '+999,999,999.999999 BNB',
    type: '입금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '-999,999,999.999999 BNB',
    type: '출금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '+999,999,999.999999 BNB',
    type: '입금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '-999,999,999.999999 BNB',
    type: '출금',
    date: '2024.12.05 12:29:11',
    status: '완료',
  },
];

const withdrawalData = [
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '대기중',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x234567890ABCDEF1234567890ABCDEF123456789',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x34567890ABCDEF1234567890ABCDEF1234567890',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '반려',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x4567890ABCDEF1234567890ABCDEF12345678901',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x567890ABCDEF1234567890ABCDEF123456789012',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x67890ABCDEF1234567890ABCDEF1234567890123',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x7890ABCDEF1234567890ABCDEF12345678901234',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x890ABCDEF1234567890ABCDEF123456789012345',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x90ABCDEF1234567890ABCDEF1234567890123456',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
  {
    email: 'usersemail@gmail.com',
    walletAddress: '0x0ABCDEF1234567890ABCDEF12345678901234567',
    amount: '1,000.000000 BONDX',
    date: '2024.12.05 12:29:11',
    approvalStatus: '승인',
  },
];

export default function WalletManagementPage() {
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [isOpenTransactionDetail, setOpenTransactionDetail] =
    React.useState(false);
  const [isOpenAuthorizeWithdraw, setOpenAuthorizeWithdraw] =
    React.useState(false);
  const [isOpenRejectWithdraw, setOpenRejectWithdraw] = React.useState(false);

  const handleFilterChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setGlobalFilter(event.target.value);
  }, []);

  const handleOpenTransactionDetail = React.useCallback((open: boolean) => {
    setOpenTransactionDetail(open);
  }, []);

  const handleOpenAuthorizeWithdraw = React.useCallback((open: boolean) => {
    setOpenAuthorizeWithdraw(open);
  }, []);

  const handleOpenRejectWithdraw = React.useCallback((open: boolean) => {
    setOpenRejectWithdraw(open);
  }, []);

  const userWalletColumns: ColumnDef<(typeof userWalletData)[0]>[] = [
    { accessorKey: 'email', header: '이메일 계정' },
    { accessorKey: 'address', header: '지갑 주소' },
    { accessorKey: 'bondxAmount', header: 'BONDX 수량' },
    { accessorKey: 'bondxDepositAmount', header: 'BONDX 잠금 수량' },
    { accessorKey: 'bondxTotalAmount', header: 'BONDX 총 수량' },
  ];

  const transactionsColumns: ColumnDef<(typeof transactionsData)[0]>[] = [
    { accessorKey: 'email', header: '이메일 계정' },
    { accessorKey: 'walletAddress', header: '지갑 주소' },
    { accessorKey: 'amount', header: '수량' },
    { accessorKey: 'type', header: '내역' },
    { accessorKey: 'date', header: '날짜' },
    {
      accessorKey: 'status',
      header: '상태',
      cell: ({ row }) => {
        const isCheck = row.getValue('status') === '완료';
        const Icon = isCheck ? CircleCheckBig : Hourglass;

        return (
          <div>
            <Icon
              className={cn(
                'inline-block h-[1em]',
                !isCheck ? 'text-[#F97316]' : 'text-[#22C55E]',
              )}
            />{' '}
            {row.getValue('status')}
          </div>
        );
      },
    },
  ];

  const withdrawalColumns: ColumnDef<(typeof withdrawalData)[0]>[] = [
    { accessorKey: 'email', header: '이메일 계정' },
    { accessorKey: 'walletAddress', header: '지갑 주소' },
    { accessorKey: 'amount', header: '수량' },
    { accessorKey: 'date', header: '날짜' },
    {
      accessorKey: 'approvalStatus',
      header: '승인 상태',
      cell: ({ row }) => {
        const isCheck = row.getValue('approvalStatus') === '승인';
        const isCross = row.getValue('approvalStatus') === '반려';
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
            {row.getValue('approvalStatus')}
          </div>
        );
      },
    },
    {
      accessorKey: 'action',
      header: '승인',
      cell: ({ row }) => {
        const isWaiting = row.getValue('approvalStatus') === '대기중';

        if (!isWaiting) return null;

        return (
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setOpenAuthorizeWithdraw(true)}
            >
              승인
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setOpenRejectWithdraw(true)}
            >
              반려
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader title="유저 관리" />
      <PageBody>
        <Tabs defaultValue="wallet" className="space-y-4">
          <div className="max-w-[260px]">
            <TabsList className="w-full">
              <TabsTrigger value="wallet">유저 지갑</TabsTrigger>
              <TabsTrigger value="deposit_withdrawal">입/출금</TabsTrigger>
              <TabsTrigger value="withdrawal_application">
                출금 신청
              </TabsTrigger>
            </TabsList>
          </div>
          <div>
            <Input
              placeholder="Search 이메일 계정, 지갑 주소"
              value={globalFilter}
              onChange={handleFilterChange}
              className="mb-2"
            />
          </div>
          <TabsContent value="wallet">
            <DataTable
              data={userWalletData}
              columns={userWalletColumns}
              onRowClick={({ id }) =>
                router.push(`/admin/wallet-management/${id}`)
              }
            />
          </TabsContent>
          <TabsContent value="deposit_withdrawal">
            <Tabs defaultValue="all" className="mb-2">
              <div className="flex w-full items-center justify-between">
                <Heading level={6} className="font-bold">
                  거래내역
                </Heading>
                <TabsList className="w-[200px]">
                  <TabsTrigger value="all">전체보기</TabsTrigger>
                  <TabsTrigger value="deposit">입금</TabsTrigger>
                  <TabsTrigger value="withdraw">출금</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            <DataTable
              data={transactionsData}
              columns={transactionsColumns}
              onRowClick={() => setOpenTransactionDetail(true)}
            />
          </TabsContent>
          <TabsContent value="withdrawal_application">
            <Tabs defaultValue="all" className="mb-2">
              <div className="flex w-full items-center justify-between">
                <Heading level={6} className="font-bold">
                  출금 신청 내역
                </Heading>
                <TabsList className="w-[200px]">
                  <TabsTrigger value="all">전체보기</TabsTrigger>
                  <TabsTrigger value="authorized">신청</TabsTrigger>
                  <TabsTrigger value="rejected">완료</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            <DataTable data={withdrawalData} columns={withdrawalColumns} />
          </TabsContent>
        </Tabs>
      </PageBody>
      <AlertDialog
        open={isOpenTransactionDetail}
        onOpenChange={handleOpenTransactionDetail}
      >
        <AlertDialogContent className="max-w-[480px]">
          <AlertDialogHeader>
            <AlertDialogTitle>거래 상세 정보</AlertDialogTitle>
            <AlertDialogDescription>
              거래 상세 내역에 대한 정보입니다.
            </AlertDialogDescription>
            <div className="border">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      날짜
                    </TableCell>
                    <TableCell>2024.12.05 12:29:11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      상태
                    </TableCell>
                    <TableCell>
                      <Hourglass className="inline-block h-[1em] text-[#F97316]" />{' '}
                      <span>대기중</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      이메일 계정
                    </TableCell>
                    <TableCell>usersemail@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[180px] border-r font-semibold">
                      지갑 주소
                    </TableCell>
                    <TableCell className="max-w-[250px] break-words">
                      0xC38a918EAF6861E356316C6449E85E29C18EF39E
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      수량
                    </TableCell>
                    <TableCell>+1,000.000000 BONDX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      내역
                    </TableCell>
                    <TableCell>입금</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      Tx hash
                    </TableCell>
                    <TableCell className="max-w-[250px] truncate text-blue-500">
                      <a
                        href="#"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        // href="https://etherscan.io/tx/0xac2f005153c64b99c079..."
                        className="underline"
                      >
                        0xac2f005153c64b99c079126381762327836
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction buttonProps={{ variant: 'outline' }}>
              확인하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={isOpenAuthorizeWithdraw}
        onOpenChange={handleOpenAuthorizeWithdraw}
      >
        <AlertDialogContent className="max-w-[480px]">
          <AlertDialogHeader>
            <AlertDialogTitle>출금 승인하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              출금을 위한 정보를 확인해 주세요.
            </AlertDialogDescription>
            <div className="border">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      날짜
                    </TableCell>
                    <TableCell>2024.12.05 12:29:11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      이메일 계정
                    </TableCell>
                    <TableCell>usersemail@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[180px] border-r font-semibold">
                      지갑 주소
                    </TableCell>
                    <TableCell className="max-w-[250px] break-words">
                      0xC38a918EAF6861E356316C6449E85E29C18EF39E
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      수량
                    </TableCell>
                    <TableCell>1,000.000000 BONDX</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction>승인하기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={isOpenRejectWithdraw}
        onOpenChange={handleOpenRejectWithdraw}
      >
        <AlertDialogContent className="max-w-[480px]">
          <AlertDialogHeader>
            <AlertDialogTitle>출금 반려하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              출금을 위한 정보를 확인해 주세요.
            </AlertDialogDescription>
            <div className="border">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      날짜
                    </TableCell>
                    <TableCell>2024.12.05 12:29:11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      이메일 계정
                    </TableCell>
                    <TableCell>usersemail@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[180px] border-r font-semibold">
                      지갑 주소
                    </TableCell>
                    <TableCell className="max-w-[250px] break-words">
                      0xC38a918EAF6861E356316C6449E85E29C18EF39E
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      수량
                    </TableCell>
                    <TableCell>1,000.000000 BONDX</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction buttonProps={{ variant: 'destructive' }}>
              반려하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
