import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isProductionDeploy } from '@/lib/site-seo'

/** Alleen een header. Deze functie mag nooit redirecten of rewriten. */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next()

  if (!isProductionDeploy()) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico|images/|fonts/|.*\\..*).*)'],
}
