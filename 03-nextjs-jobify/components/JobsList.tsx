'use client';

import { getAllJobs } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import JobCard from './JobCard';

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

  console.log(jobs);

  if (isPending) return <h2 className="text-xl">Please Wait...</h2>;

  if (jobs.length < 1) return <h2 className="text-xl">No Jobs Found...</h2>;

  return (
    <>
      <div>
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
}

export default JobsList;
