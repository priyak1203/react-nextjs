'use client';

import { getAllJobs } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import JobCard from './JobCard';
import ButtonContainer from './ButtonContainer';

function JobsList() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const jobStatus = searchParams.get('jobStatus') || 'all';
  const pageNumber = Number(searchParams.get('page')) || 1;

  const { data, isPending } = useQuery({
    queryKey: ['jobs', search ?? '', jobStatus, pageNumber],
    queryFn: () => getAllJobs({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];

  const count = data?.count || 0;
  const page = data?.page || 0;
  const totalPages = data?.totalPages || 0;

  if (isPending) return <h2 className="text-xl">Please Wait...</h2>;

  if (jobs.length < 1) return <h2 className="text-xl">No Jobs Found...</h2>;

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="capitalize text-xl font-semibold">
          {count} job{count > 1 && 's'} found
        </h2>
        {totalPages < 2 ? null : <ButtonContainer />}
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
}

export default JobsList;
