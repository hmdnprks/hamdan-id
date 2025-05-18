import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import type { MDXComponents } from "mdx/types";

const options: Options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  defaultLang: "ts",
};

export async function compileMdx(source: string) {
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, options]],
      },
    },
    components: {} as MDXComponents,
  });

  return { content, frontmatter };
}