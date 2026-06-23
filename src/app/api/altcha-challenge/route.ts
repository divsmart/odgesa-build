import { createChallenge } from 'altcha-lib';
import { NextResponse } from 'next/server';

export async function GET() {
  const hmacKey = process.env.ALTCHA_HMAC_KEY || 'dev-hmac-key-change-in-production';
  const challenge = await createChallenge({ hmacKey, maxNumber: 100000 });
  return NextResponse.json(challenge);
}
