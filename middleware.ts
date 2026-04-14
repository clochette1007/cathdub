import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const authCookie = req.cookies.get('admin_auth');
    const isLoginPage = req.nextUrl.searchParams.get('login') === '1';

    if (authCookie?.value !== '1' && !isLoginPage) {
      const url = req.nextUrl.clone();
      url.pathname = '/admin';
      url.searchParams.set('login', '1');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
