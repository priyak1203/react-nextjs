import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <div className="grid gap-4 p-8 rounded-lg border sm:grid-cols-2 md:grid-cols-3">
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
    </div>
  );
}

export default Loading;
