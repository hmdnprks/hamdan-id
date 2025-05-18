import fs from "fs/promises";
import path from "path";
import { compileMdx } from "./mdx";

export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src", "content", `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf-8");
  return compileMdx(source);
}