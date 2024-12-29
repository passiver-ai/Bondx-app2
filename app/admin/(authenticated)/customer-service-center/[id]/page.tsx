'use client';

import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@kit/ui/form';
import { Heading } from '@kit/ui/heading';
import { PageBody, PageHeader } from '@kit/ui/page';
import { Table, TableBody, TableCell, TableRow } from '@kit/ui/table';
import { Textarea } from '@kit/ui/textarea';

const inquiry = {
  email: 'usersemail@gmail.com',
  title: '출금 이슈',
  category: '출금',
  date: '2024.12.05 12:29:11',
  content: '본드엑스 출금이 안돼요.\n\n확인해 주세요.',
  attachment: '/images/kyc-dummy.png',
};

const responseSchema = z.object({
  response: z.string().min(1, '답변 내용을 입력하세요.'),
});

type ResponseFormValues = z.infer<typeof responseSchema>;

export default function CustomerDetailPage() {
  const form = useForm<ResponseFormValues>({
    mode: 'onChange',
    resolver: zodResolver(responseSchema),
  });

  const onSubmit: SubmitHandler<ResponseFormValues> = (data) => {
    console.log('Response Submitted:', data);
    // Handle form submission logic
  };

  return (
    <>
      <PageHeader title="고객 센터 상세페이지" />
      <PageBody>
        <Heading level={6}>질문 정보</Heading>
        <section className="mt-2 rounded-sm border">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="border-r align-top font-bold">
                  날짜
                </TableCell>
                <TableCell>{inquiry.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r align-top font-bold">
                  이메일 계정
                </TableCell>
                <TableCell>{inquiry.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r align-top font-bold">
                  카테고리
                </TableCell>
                <TableCell>{inquiry.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r align-top font-bold">
                  문의 제목
                </TableCell>
                <TableCell>{inquiry.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r align-top font-bold">
                  문의 내용
                </TableCell>
                <TableCell className="whitespace-pre-line">{inquiry.content}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r align-top font-bold">
                  첨부 파일
                </TableCell>
                <TableCell>
                  <Image
                    src={inquiry.attachment}
                    alt="첨부 파일"
                    width={150}
                    height={150}
                    className="rounded border"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="mt-8 max-w-[530px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="response"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>답변하기</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="메시지를 입력하세요."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="mt-4 flex justify-end gap-2">
                <Button type="button" variant="outline">
                  수정하기
                </Button>
                <Button
                  type="submit"
                  disabled={
                    !form.formState.isValid || form.formState.isSubmitting
                  }
                >
                  답변 등록
                </Button>
              </div>
            </form>
          </Form>
        </section>
      </PageBody>
    </>
  );
}
