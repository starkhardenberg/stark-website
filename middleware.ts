import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isIndexableRequest } from '@/lib/site-seo'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')

  if (!isIndexableRequest(host)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|fonts/).*)'],
}
