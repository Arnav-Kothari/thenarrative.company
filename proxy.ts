import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const jwt =
    request.headers.get('cf-access-jwt-assertion') ||
    request.cookies.get('CF_Authorization')?.value;

  if (!jwt) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/clients/:path*',
    '/api/x-posts/:path*',
    '/api/score/:path*',
    '/api/angles/:path*',
    '/api/slack-send/:path*',
  ],
};
