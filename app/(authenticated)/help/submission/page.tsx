'use client';

import * as React from 'react';

import FormMessage from '@/components/FormMessage';
import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import type { AppDispatch, RootState } from '@/store';
import { addQuestionAsync } from '@/store/slices/question';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as z from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@kit/ui/form';
import { Input } from '@kit/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@kit/ui/select';
import { Textarea } from '@kit/ui/textarea';

const formSchema = z.object({
  category: z.string(),
  title: z.string(),
  description: z.string(),
});

// Infer the form data type from the schema
type QuestionFormInputs = z.infer<typeof formSchema>;

export default function HelpSubmission() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.question);
  const [files, setFiles] = React.useState<File[] | null>(null);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: '',
      title: '',
      description: '',
    }
  });

  React.useLayoutEffect(() => {
    setTitle?.('profile:question');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const handleFileChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((ev) => {
    const files: File[] = [];
    const target = ev.target;

    if (target.files) {
      for (let i = 0; i < target.files.length; i++) {
        const file = target.files[i] as File;
        files[i] = file;
      }
    }

    setFiles(files);
  }, []);

  const onSubmit: SubmitHandler<QuestionFormInputs> = (data) => {
    void dispatch(
      addQuestionAsync({
        category: data.category,
        title: data.title,
        description: data.description,
        status: 'Pending',
      }),
    ).finally(() => {
      router.push('/help');
    });
  };

  return (
    <div className="container py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="invest">Invest</SelectItem>
                    <SelectItem value="coin">Coin</SelectItem>
                    <SelectItem value="withdrawal">Withdrawal</SelectItem>
                    <SelectItem value="wallet">Wallet</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    className="resize-none"
                    placeholder="Type your message here"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <FormField
              name="files"
              render={({ field }) => (
                <FormItem>
                  <Button variant="outline" className="cursor-pointer" asChild>
                    <FormLabel>Attached Files</FormLabel>
                  </Button>

                  <FormControl>
                    <input
                      multiple
                      type="file"
                      className="invisible h-0 w-0"
                      name={field.name}
                      onChange={handleFileChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {!!files && (
              <ul className="space-y-2">
                {files.map((file, key) => (
                  <li
                    key={key}
                    className="flex items-center justify-between text-[#475569]"
                  >
                    <span className="block max-w-[35ch] truncate text-sm">
                      {file.name}
                    </span>
                    <span
                      className="cursor-pointer text-[24px]"
                      onClick={() =>
                        setFiles(
                          (f) => f?.filter((_, i) => i !== key) as typeof files,
                        )
                      }
                    >
                      <Icon name="trash" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              !form.formState.isDirty ||
              !form.formState.isValid ||
              form.formState.isSubmitting
            }
          >
            {(form.formState.isSubmitting || loading) && (
              <Loader2 className="mr-1 animate-spin" />
            )}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
