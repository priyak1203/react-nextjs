import { fetchUsers } from '@/utils/actions';

export const GET = async (req: Request) => {
  console.log(req.url);
  console.log(new URL(req.url));

  const { searchParams } = new URL(req.url);
  console.log(searchParams);

  const id = searchParams.get('id');
  console.log(id);

  const users = await fetchUsers();
  return Response.json({ users });
};
