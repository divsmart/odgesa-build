import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'odgesa-preview';
const LOGIN_PATH  = '/login';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === LOGIN_PATH || pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // TEMP: preview gate disabled for public launch 3 Aug 2026 — REVERT by uncommenting below
  // const cookie = request.cookies.get(COOKIE_NAME);
  // if (!cookie || cookie.value !== 'granted') {
  //   const loginUrl = request.nextUrl.clone();
  //   loginUrl.pathname = LOGIN_PATH;
  //   return NextResponse.redirect(loginUrl);
  // }

  const response = NextResponse.next();

  // Only dev.ecolesperseverance-gp.fr should stay out of search engines.
  // Production (www + bare domain) currently shares this same build (see
  // memory note on the www stopgap deploy, 4 Aug 2026), so we cannot rely
  // on a build-time env var to tell them apart -- check the actual request
  // Host header instead. If/when dev and production run as fully separate
  // deployments again, this can be simplified back to a static robots meta
  // tag in layout.tsx.
  const host = request.headers.get('host') || '';
  if (host.startsWith('dev.')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|documents/|fonts/).*)'],
};
