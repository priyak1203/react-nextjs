import { fetchUsers } from '@/utils/actions';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  console.log('===============');
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  return Response.json({ users });
};
