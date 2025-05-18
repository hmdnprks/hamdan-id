"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
      <div className="relative w-full h-56">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          onError={() => setImgSrc("/image-fallback.png")}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Visit Project →
          </a>
        )}
      </div>
    </div>
  );
}