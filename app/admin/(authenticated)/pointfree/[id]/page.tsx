'use client';

import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { CircleCheckBig, CircleMinus, CircleX, Hourglass } from 'lucide-react';

import { Heading } from '@kit/ui/heading';
import { PageBody, PageHeader } from '@kit/ui/page';
import { Table, TableBody, TableCell, TableRow } from '@kit/ui/table';
import { cn } from '@kit/ui/utils';

const usersInfo = {
  email: 'usersemail@gmail.com',
  pointEntryID: '-',
  status: '미등록',
};

const data = [
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '대기중',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '실패',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
  {
    date: '2024.12.05 12:29:11',
    points: '241,240 Point',
    status: '완료',
  },
];
const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: 'date', header: '날짜' },
  { accessorKey: 'points', header: '포인트' },
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

export default function PointFreeDetailPage() {
  const isCheck = usersInfo.status === '등록';
  const Icon = !isCheck ? CircleMinus : CircleCheckBig;

  return (
    <>
      <PageHeader title="포인트프리 상세페이지" />
      <PageBody>
        <Heading level={6} className="mb-2">
          유저 정보
        </Heading>
        <section className="rounded-sm border">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="w-[180px] border-r align-top font-bold">
                  이메일 계정
                </TableCell>
                <TableCell>{usersInfo.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-[180px] border-r align-top font-bold">
                  포인트프리 ID
                </TableCell>
                <TableCell>{usersInfo.pointEntryID}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-[180px] border-r align-top font-bold">
                  ID 등록 상태
                </TableCell>
                <TableCell>
                  <Icon
                    className={cn(
                      'inline-block h-[1em]',
                      !isCheck ? 'text-[#64748B]' : 'text-[#22C55E]',
                    )}
                  />{' '}
                  {usersInfo.status}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="mb-4 mt-8">
          <Heading level={6} className="mb-2">
            포인트프리 지급내역
          </Heading>
          <DataTable data={data} columns={columns} />
        </section>
      </PageBody>
    </>
  );
}
