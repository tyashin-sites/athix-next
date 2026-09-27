import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * PREVIEW NOINDEX GUARD — host-conditional. Only the known preview hosts get
 * `X-Robots-Tag: noindex, nofollow`; the production domain is never stamped.
 * The build-time ROBOTS_NOINDEX var is the second, independent canary.
 */
const PREVIEW_HOST_SUFFIXES = ['.workers.dev', '.sites.tyashin.com'];
const PRODUCTION_HOSTS = new Set(['athixrehab.ca', 'www.athixrehab.ca']);

function effectiveHost(request: NextRequest): string {
  return (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '').toLowerCase();
}

export function middleware(request: NextRequest) {
  const host = effectiveHost(request);
  const response = NextResponse.next();
  if (!PRODUCTION_HOSTS.has(host) && PREVIEW_HOST_SUFFIXES.some((s) => host.endsWith(s))) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|brand/|images/|og/).*)'],
};
