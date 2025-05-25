import fs from "fs/promises";
import path from "path";
import { compileMdx } from "./mdx";

export async function getPostBySlug(category: string, slug: string) {
  const isGeneral = category === "general" || category === "uncategorized";

  const filePath = isGeneral
    ? path.join(process.cwd(), "src/content", `${slug}.mdx`)
    : path.join(process.cwd(), "src/content", category, `${slug}.mdx`);

  const source = await fs.readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMdx(source);

  return { content, frontmatter };
}