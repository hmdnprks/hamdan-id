/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function isFullPage(page: unknown): page is PageObjectResponse {
  return (
    typeof page === 'object' &&
    page !== null &&
    (page as any).object === 'page' &&
    'properties' in (page as any)
  );
}
