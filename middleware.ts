import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const locales = i18nConfig.locales;

  // Check if the pathname starts with any of the locale prefixes
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      // If a locale prefix is found, redirect to the same path without the prefix
      const newPath = pathname.replace(`/${locale}`, '');
      return NextResponse.redirect(new URL(newPath || '/', request.url));
    }
  }

  // If no locale prefix is found, proceed with i18nRouter to set the locale internally
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\..*|_next).*)',
};