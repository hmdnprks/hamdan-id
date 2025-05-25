"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GiscusComments() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted ? (
    <Giscus
      id="comments"
      repo="hmdnprks/hamdan-id"
      repoId="R_kgDOOr_mDg"
      category="Announcements"
      categoryId="DIC_kwDOOr_mDs4CqkcB"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme === "light" ? "light" : "dark"}
      lang="en"
      loading="lazy"
    />
  ) : null;
}