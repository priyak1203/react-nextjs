'use server';

import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createAndEditJobSchema, CreateAndEditJobType, JobType } from './types';
import db from './db';

async function authenticateAndRedirect(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    redirect('/');
  }
  return userId;
}

export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  const userId = await authenticateAndRedirect();
  console.log(userId);
  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await db.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
}
