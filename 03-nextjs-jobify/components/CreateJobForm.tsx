'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { CustomFormField, CustomFormSelect } from './FormComponents';
import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
} from '@/utils/types';
import { createJobAction } from '@/utils/actions';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

function CreateJobForm() {
  // 1. Define your form
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  const { toast } = useToast();
  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: 'There was an error',
        });
        return;
      }
      toast({ description: 'Job created' });
      // Invalidate queries here
      router.push('/jobs');
    },
  });

  // 2. Define a submit handler
  async function onSubmit(values: CreateAndEditJobType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // const response = await createJobAction(values);
    // console.log(response);

    // if (!response) {
    //   toast({
    //     description: 'There was an error',
    //   });
    //   return;
    // }

    // toast({ description: 'Job created' });
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* position */}
          <CustomFormField name="position" control={form.control} />
          {/* company */}
          <CustomFormField name="company" control={form.control} />
          {/* location */}
          <CustomFormField name="location" control={form.control} />

          {/* job status */}
          <CustomFormSelect
            name="status"
            labelText="job status"
            control={form.control}
            items={Object.values(JobStatus)}
          />

          {/* job mode */}
          <CustomFormSelect
            name="mode"
            labelText="job mode"
            control={form.control}
            items={Object.values(JobMode)}
          />

          <Button
            type="submit"
            className="capitalize self-end"
            disabled={isPending}
          >
            {isPending ? 'loading' : 'create job'}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateJobForm;
