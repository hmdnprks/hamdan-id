import { compileMdx } from "@/lib/mdx";
import fs from "fs";
import path from "path";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src", "content", `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content } = await compileMdx(source);

  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-10">
      {content}
    </main>
  );
}