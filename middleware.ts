import { NextRequest, NextResponse } from 'next/server';

let locales = ['ar', 'en'];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/en/${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and favicon
    '/((?!api|_next/static|_next/image|images|favicon.ico|opengraph-image.png|twitter-image.png|sitemap.xml|robots.txt).*)',
  ],
};
