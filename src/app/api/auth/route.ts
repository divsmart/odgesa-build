import { NextRequest, NextResponse } from 'next/server';

const CODES: Record<string, string> = {
  PERSEV917:  'Sablier',
  GUADEL415:  'Régis',
  ODGESA681:  'Nanette',
  ECOLES719:  'Placide',
  BAILLIF218: 'Blocail',
  ADVENT469:  'Gravillon',
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const code = (formData.get('code') as string || '').trim().toUpperCase();

  if (CODES[code]) {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('odgesa-preview', 'granted', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    return response;
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('error', '1');
  return NextResponse.redirect(loginUrl);
}
