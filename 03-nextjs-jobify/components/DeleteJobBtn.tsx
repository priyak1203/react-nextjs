import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from './ui/button';
import { deleteJobAction } from '@/utils/actions';
import { useToast } from '@/hooks/use-toast';

function DeleteJobBtn({ id }: { id: string }) {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: 'there was an error' });
        return;
      }

      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['charts'] });

      toast({ description: 'job removed' });
    },
  });

  return (
    <Button
      className="capitalize"
      size="sm"
      disabled={isPending}
      onClick={() => mutate(id)}
    >
      {isPending ? 'deleting...' : 'delete'}
    </Button>
  );
}

export default DeleteJobBtn;
