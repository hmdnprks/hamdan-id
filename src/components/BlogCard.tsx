import Image from "next/image";

type BlogCardProps = {
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

export default function BlogCard({ title, slug, category, coverImage, date, excerpt }: BlogCardProps) {
  return (
    <a
      href={`/blog/${category}/${slug}`}
      className="block rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all bg-white dark:bg-surface"
    >
      <div className="relative w-full h-48">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted mb-1">{date}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted line-clamp-3">{excerpt}</p>
      </div>
    </a>
  );
}