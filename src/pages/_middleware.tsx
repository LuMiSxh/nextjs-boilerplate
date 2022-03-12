// Ref: https://nextjs.org/docs/api-reference/next/server
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return NextResponse.next();
}
