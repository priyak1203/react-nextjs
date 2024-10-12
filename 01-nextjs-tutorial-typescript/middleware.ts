import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log('inside middleware');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
