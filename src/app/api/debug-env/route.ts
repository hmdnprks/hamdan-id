import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const host = req.headers.get('host') || 'unknown';
  const protocol = req.headers.get('x-forwarded-proto') || 'https';
  const origin = `${protocol}://${host}`;

  return NextResponse.json({
    origin,
    hasClientId: !!process.env.DECAP_CLIENT_ID,
    hasClientSecret: !!process.env.DECAP_CLIENT_SECRET,
    clientIdLength: (process.env.DECAP_CLIENT_ID || '').length,
    clientSecretLength: (process.env.DECAP_CLIENT_SECRET || '').length,
    deployEnv: process.env.VERCEL_ENV,
    projectId: process.env.VERCEL_PROJECT_ID?.slice(0, 8),
  });
}
