export function middleware() {
  return Response.json({ msg: 'Hello There' });
}

export const config = {
  matcher: '/about',
};
