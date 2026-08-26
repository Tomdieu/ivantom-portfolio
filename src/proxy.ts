import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en'
})

export function proxy(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|sitemap-.*|sw.js|workbox-.*|.*\\..*).*)']
}
