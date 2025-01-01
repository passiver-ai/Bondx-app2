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
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheckBig } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { Input } from '@kit/ui/input';
import { PageBody, PageHeader } from '@kit/ui/page';
import { Table, TableBody, TableCell, TableRow } from '@kit/ui/table';

const relockSchema = z.object({
  quantity: z.number(),
});

const unlockSchema = z.object({
  quantity: z.number(),
});

type ReLockInputs = z.infer<typeof relockSchema>;
type UnlockInputs = z.infer<typeof unlockSchema>;

export default function WalletManagementDetailPage() {
  const [isOpenReLockForm, setOpenReLockForm] = React.useState(false);
  const [isOpenUnlockForm, setOpenUnlockForm] = React.useState(false);

  const relockForm = useForm<ReLockInputs>({
    mode: 'onChange',
    resolver: zodResolver(relockSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  const unlockForm = useForm<UnlockInputs>({
    mode: 'onChange',
    resolver: zodResolver(unlockSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  const onSubmitReLock: SubmitHandler<ReLockInputs> = async (data) => {
    console.log(data); // Handle ratingForm submission here

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
  };

  const onSubmitUnlock: SubmitHandler<UnlockInputs> = async (data) => {
    console.log(data); // Handle ratingForm submission here

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work
  };

  const handleOpenReLockForm = React.useCallback((open: boolean) => {
    setOpenReLockForm(open);
  }, []);

  const handleOpenUnlockForm = React.useCallback((open: boolean) => {
    setOpenUnlockForm(open);
  }, []);

  return (
    <>
      <PageHeader title="지갑 상세페이지" />
      <PageBody className="space-y-8">
        <div>
          <Heading level={6} className="mb-2">
            유저 정보
          </Heading>
          <section className="border">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    이메일 계정
                  </TableCell>
                  <TableCell>usersemail@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    지갑 주소
                  </TableCell>
                  <TableCell className="truncate">
                    0xC38a918EAF6861E356316C6449E85E29C18EF39E
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    이름
                  </TableCell>
                  <TableCell>이제이크</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    휴대폰 번호
                  </TableCell>
                  <TableCell>010-0000-0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    KYC 상태
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <CircleCheckBig className="h-[1em]" />
                      <span>승인</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    복구 구문
                  </TableCell>
                  <TableCell>
                    ability, acoustic, disease, magnet, snow, agile, dish, tube,
                    turkey, football, border, cake
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </div>
        <div>
          <Heading level={6} className="mb-2">
            BONDX 현황
          </Heading>
          <section className="border">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    BONDX 출금 가능 수량
                  </TableCell>
                  <TableCell className="flex items-center justify-between p-1">
                    1,000.000000
                    <Button
                      size="sm"
                      className="h-7"
                      variant="outline"
                      onClick={() => setOpenReLockForm(true)}
                    >
                      BONDX 다시 잠금
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    BONDX 잠금 수량
                  </TableCell>
                  <TableCell className="flex items-center justify-between p-1">
                    161,000.193093
                    <Button
                      size="sm"
                      className="h-7"
                      variant="outline"
                      onClick={() => setOpenUnlockForm(true)}
                    >
                      BONDX 잠금 풀기
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    BONDX 총 수량
                  </TableCell>
                  <TableCell>162,000.193093</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </div>
        <div>
          <Heading level={6} className="mb-2">
            자산 정보
          </Heading>
          <section className="border">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    BNB
                  </TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[180px] border-r font-semibold">
                    USDT
                  </TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </div>
      </PageBody>
      <AlertDialog open={isOpenReLockForm} onOpenChange={handleOpenReLockForm}>
        <AlertDialogContent className="max-w-[480px]">
          <AlertDialogHeader>
            <AlertDialogTitle>BONDX 다시 잠금</AlertDialogTitle>
            <AlertDialogDescription>
              잠금을 원하시면 BONDX의 수량을 입력해 주세요.
            </AlertDialogDescription>
            <div className="border">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      BONDX 수량
                    </TableCell>
                    <TableCell>1,000.000000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <Form {...relockForm}>
              <form onSubmit={relockForm.handleSubmit(onSubmitReLock)}>
                <FormField
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <Input {...field} type="number" placeholder="0" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction>확인하기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={isOpenUnlockForm} onOpenChange={handleOpenUnlockForm}>
        <AlertDialogContent className="max-w-[480px]">
          <AlertDialogHeader>
            <AlertDialogTitle>BONDX 잠금 풀기</AlertDialogTitle>
            <AlertDialogDescription>
              잠금 풀기를 원하시면 BONDX의 수량을 입력해 주세요.
            </AlertDialogDescription>
            <div className="border">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-r font-semibold">
                      BONDX 잠금 수량
                    </TableCell>
                    <TableCell>161,000.193093</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <Form {...unlockForm}>
              <form onSubmit={unlockForm.handleSubmit(onSubmitUnlock)}>
                <FormField
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <Input {...field} type="number" placeholder="0" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction>확인하기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
