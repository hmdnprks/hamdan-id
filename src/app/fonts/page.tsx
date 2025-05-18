"use client";

import { useState } from "react";
import clsx from "clsx";

const fonts = {
  justsans: "font-justsans",
  poppins: "font-poppins",
  jetbrains: "font-mono",
  jakarta: "font-jakarta-sans",
  melangit: "font-melangit-sans",
  pogonia: "font-pogonia-sans",
};

export default function FontPreviewPage() {
  const [leftFont, setLeftFont] = useState<keyof typeof fonts>("justsans");
  const [rightFont, setRightFont] = useState<keyof typeof fonts>("poppins");

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Font Comparison Playground</h1>

      <div className="grid gap-8 lg:grid-cols-2 mb-10">
        <div>
          <label className="block text-sm font-medium mb-1">Left Column Font</label>
          <select
            value={leftFont}
            onChange={(e) => setLeftFont(e.target.value as keyof typeof fonts)}
            className="w-full border px-3 py-2 rounded"
          >
            {Object.entries(fonts).map(([key]) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Right Column Font</label>
          <select
            value={rightFont}
            onChange={(e) => setRightFont(e.target.value as keyof typeof fonts)}
            className="w-full border px-3 py-2 rounded"
          >
            {Object.entries(fonts).map(([key]) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <FontColumn title="Left Preview" fontClass={fonts[leftFont]} />
        <FontColumn title="Right Preview" fontClass={fonts[rightFont]} />
      </div>
    </div>
  );
}

function FontColumn({ title, fontClass }: { title: string; fontClass: string }) {
  return (
    <section className={clsx("space-y-6", fontClass)}>
      <h2 className="text-xl text-gray-500">{title}</h2>

      <h1 className="text-5xl font-bold">Heading 1 - 5xl</h1>
      <h2 className="text-4xl font-semibold">Heading 2 - 4xl</h2>
      <h3 className="text-3xl font-semibold">Heading 3 - 3xl</h3>
      <p className="text-base leading-relaxed">
        This is a sample paragraph demonstrating the selected font.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
        amet facilisis urna.
      </p>

      <p className="text-xl font-semibold">Whereas disregard and contempt for human rights have resulted
      </p>

      <ul className="list-disc pl-6 text-base">
        <li>Typography matters</li>
        <li>Font weight & rhythm</li>
        <li>Visual hierarchy</li>
      </ul>

      <ol className="list-decimal pl-6 text-base">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ol>

      <blockquote className="border-l-4 pl-4 italic text-gray-600">
        “Design is the silent ambassador of your brand.”
      </blockquote>
    </section>
  );
}