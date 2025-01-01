'use client';

import * as React from 'react';

import Image from 'next/image';

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
import { zodResolver } from '@hookform/resolvers/zod';
import { ColumnDef } from '@tanstack/react-table';
import {
  CircleCheckBig,
  CircleMinus,
  CircleX,
  Hourglass,
  SquarePen,
} from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@kit/ui/form';
import { Input } from '@kit/ui/input';
import { PageBody, PageHeader } from '@kit/ui/page';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@kit/ui/select';
import { Table, TableBody, TableCell, TableRow } from '@kit/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@kit/ui/tabs';
import { cn } from '@kit/ui/utils';

const userRatingSchema = z.object({
  rating: z.string(),
});

const kycStatusSchema = z.object({
  status: z.string(),
});

type UserRatingInputs = z.infer<typeof userRatingSchema>;
type KYCStatusInputs = z.infer<typeof kycStatusSchema>;

const data = [
  {
    num: 15,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 14,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 13,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Investor',
    kycStatus: '미인증',
  },
  {
    num: 12,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 11,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 10,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Investor',
    kycStatus: '미인증',
  },
  {
    num: 9,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 8,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Investor',
    kycStatus: '미인증',
  },
  {
    num: 7,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Investor',
    kycStatus: '미인증',
  },
  {
    num: 6,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.10',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 5,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.11',
    level: 'Basic',
    kycStatus: '미인증',
  },
  {
    num: 4,
    email: 'jake0102@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.11',
    level: 'Basic',
    kycStatus: '반려',
  },
  {
    num: 3,
    email: 'jake0102@gmail.com',
    name: '김제이크',
    phoneNumber: '010-0000-0000',
    joinDate: '2024.12.11',
    level: 'Basic',
    kycStatus: '승인',
  },
  {
    num: 2,
    email: 'jake0102@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.11',
    level: 'Basic',
    kycStatus: '대기중',
  },
  {
    num: 1,
    email: 'usersemail@gmail.com',
    name: '-',
    phoneNumber: '-',
    joinDate: '2024.12.11',
    level: 'Investor',
    kycStatus: '미인증',
  },
];

export default function UserManagementPage() {
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [isOpenKYCStatus, setOpenKYCStatus] = React.useState(false);
  const [isOpenRatingForm, setOpenRatingForm] = React.useState(false);

  const ratingForm = useForm<UserRatingInputs>({
    mode: 'onChange',
    resolver: zodResolver(userRatingSchema),
    defaultValues: {
      rating: 'basic',
    },
  });

  const kycStatusForm = useForm<KYCStatusInputs>({
    mode: 'onChange',
    resolver: zodResolver(kycStatusSchema),
    defaultValues: {
      status: '',
    },
  });

  const onSubmitUserRating: SubmitHandler<UserRatingInputs> = async (data) => {
    console.log(data); // Handle ratingForm submission here

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
  };

  const onSubmitKYCStatus: SubmitHandler<KYCStatusInputs> = async (data) => {
    console.log(data); // Handle ratingForm submission here

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
  };

  const handleOpenRatingForm = React.useCallback((open: boolean) => {
    setOpenRatingForm(open);
  }, []);

  const handleOpenKYCStatusForm = React.useCallback((open: boolean) => {
    setOpenKYCStatus(open);
  }, []);

  const handleEditUserRating = React.useCallback(
    (user: (typeof data)[0]) => () => {
      ratingForm.setValue('rating', user.level.toLowerCase());
      handleOpenRatingForm(true);
    },
    [ratingForm, handleOpenRatingForm],
  );

  const handleEditKYCStatus = React.useCallback(
    (user: (typeof data)[0]) => () => {
      kycStatusForm.setValue('status', ['반려', '승인'].includes(user.kycStatus) ? user.kycStatus : '');
      handleOpenKYCStatusForm(true);
    },
    [kycStatusForm, handleOpenKYCStatusForm],
  );

  const handleFilterChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setGlobalFilter(event.target.value);
  }, []);

  const columns: ColumnDef<(typeof data)[0]>[] = [
    { accessorKey: 'num', header: 'Num' },
    { accessorKey: 'email', header: '이메일 계정' },
    { accessorKey: 'name', header: '이름' },
    { accessorKey: 'phoneNumber', header: '휴대폰 번호' },
    { accessorKey: 'joinDate', header: '가입일' },
    {
      accessorKey: 'level',
      header: '등급',
      cell: ({ row }) => {
        return (
          <div className="flex w-full items-center justify-between">
            {row.getValue('level')}
            <Button
              size="icon"
              variant="outline"
              className="size-[32px]"
              onClick={handleEditUserRating(row.original)}
            >
              <SquarePen className={'h-[14px]'} />
            </Button>
          </div>
        );
      },
    },
    {
      accessorKey: 'kycStatus',
      header: 'KYC 상태',
      cell: ({ row }) => {
        const isCheck = row.getValue('kycStatus') === '승인';
        const isCross = row.getValue('kycStatus') === '반려';
        const isWaiting = row.getValue('kycStatus') === '대기중';
        const Icon = isCheck
          ? CircleCheckBig
          : isCross
            ? CircleX
            : isWaiting
              ? Hourglass
              : CircleMinus;

        return (
          <div className="flex w-full items-center justify-between">
            <span>
              <Icon
                className={cn(
                  'inline-block h-[1em]',
                  isCheck
                    ? 'text-[#22C55E]'
                    : isCross
                      ? 'text-[#EF4444]'
                      : isWaiting
                        ? 'text-[#F97316]'
                        : 'text-[#64748B]',
                )}
              />{' '}
              {row.getValue('kycStatus')}
            </span>
            {(isCheck || isCross || isWaiting) && (
              <Button
                variant="outline"
                size="sm"
                className="h-[32px]"
                onClick={handleEditKYCStatus(row.original)}
              >
                상세 보기
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader title="유저 관리" />
      <PageBody>
        <Tabs defaultValue="all" className="mb-4 max-w-[390px]">
          <TabsList className="w-full">
            <TabsTrigger value="all">전체보기</TabsTrigger>
            <TabsTrigger value="kyc_apply">KYC 신청</TabsTrigger>
            <TabsTrigger value="kyc_completed">KYC 완료</TabsTrigger>
            <TabsTrigger value="investor">Investor 보기</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mb-4">
          <Input
            placeholder="Search 이메일 계정, 이름, 휴대폰 번호"
            value={globalFilter}
            onChange={handleFilterChange}
            className="mb-2"
          />
        </div>
        <DataTable data={data} columns={columns} />
      </PageBody>
      <AlertDialog open={isOpenRatingForm} onOpenChange={handleOpenRatingForm}>
        <AlertDialogContent className="max-w-[360px]">
          <AlertDialogHeader>
            <AlertDialogTitle>등급 설정</AlertDialogTitle>
            <AlertDialogDescription>
              사용자의 등급을 설정해 주세요.
            </AlertDialogDescription>
            <Form {...ratingForm}>
              <form onSubmit={ratingForm.handleSubmit(onSubmitUserRating)}>
                <FormField
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="investor">Investor</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction>저장하기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={isOpenKYCStatus}
        onOpenChange={handleOpenKYCStatusForm}
      >
        <AlertDialogContent className="max-w-[480px]">
          <AlertDialogHeader>
            <AlertDialogTitle>KYC 정보</AlertDialogTitle>
            <AlertDialogDescription>
              사용자의 KYC 정보입니다.
            </AlertDialogDescription>
            <div className="border">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-r font-bold">
                      이메일 계정
                    </TableCell>
                    <TableCell>jake@snapx.co</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-bold">이름</TableCell>
                    <TableCell>이제이크</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-bold">
                      휴대폰 번호
                    </TableCell>
                    <TableCell>010-0000-0000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="rounded-[6px] bg-[#F8FAFC] p-3">
              <Image
                src="/images/kyc-dummy.png"
                alt="첨부 파일"
                width={260}
                height={170}
                className="rounded border mx-auto"
              />
            </div>
            <Form {...kycStatusForm}>
              <form onSubmit={kycStatusForm.handleSubmit(onSubmitKYCStatus)}>
                <FormField
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="KYC 승인 상태를 선택해주세요." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="반려">반려</SelectItem>
                          <SelectItem value="승인">승인</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction>저장하기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
