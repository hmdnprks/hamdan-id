'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useRouteLoading() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading;
}