import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const clientId = process.env.DECAP_CLIENT_ID;
  const clientSecret = process.env.DECAP_CLIENT_SECRET;

  console.log('[Decap Auth]', {
    hasClientId: !!clientId,
    hasClientSecret: !!clientSecret,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    code: !!code,
    url: req.url,
  });

  // Step 1: No code yet — redirect to GitHub OAuth authorization
  if (!code) {
    if (!clientId) {
      return new Response('DECAP_CLIENT_ID is not configured.', { status: 500 });
    }

    const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamdan.id'}/api/auth`;
    const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
    githubAuthUrl.searchParams.set('client_id', clientId);
    githubAuthUrl.searchParams.set('redirect_uri', redirectUri);
    githubAuthUrl.searchParams.set('scope', 'repo,user');

    return NextResponse.redirect(githubAuthUrl.toString());
  }

  // Step 2: GitHub redirected back with a code — exchange it for an access token
  if (!clientId || !clientSecret) {
    return new Response('OAuth credentials are not configured.', { status: 500 });
  }

  const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamdan.id'}/api/auth`;

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await tokenResponse.json();

  if (!data.access_token) {
    return new Response(
      `Failed to get access token: ${data.error_description || data.error || 'unknown error'}`,
      { status: 400 },
    );
  }

  // Step 3: Return HTML that sends the token back to the Decap CMS popup
  const html = `
    <!doctype html>
    <html>
      <head><meta charset="utf-8" /><title>Authorized</title></head>
      <body>
        <p>Authentication successful. This window will close automatically.</p>
        <script>
          if (window.opener) {
            window.opener.postMessage(
              { token: "${data.access_token}", provider: "github" },
              "${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamdan.id'}"
            );
            window.close();
          } else {
            document.body.innerHTML = '<p>Authentication successful! You can close this tab.</p>';
          }
        <\/script>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
