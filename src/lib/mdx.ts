import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import Callout from "@/components/Callout/Callout"
export async function compileMdx(source: string) {
  return await compileMDX<{
    title: string;
    description?: string;
    date?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [
          [rehypePrettyCode, { theme: "github-dark", keepBackground: true }],
        ],
      },
    },
    components: {
      Callout
    }
  });
}