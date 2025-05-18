"use client";

type Props = {
  type?: "info" | "warning" | "success" | "danger";
  title?: string;
  children: React.ReactNode;
};

const COLORS = {
  info: "border-blue-400 bg-blue-50 text-blue-800",
  warning: "border-yellow-400 bg-yellow-50 text-yellow-800",
  success: "border-green-400 bg-green-50 text-green-800",
  danger: "border-red-400 bg-red-50 text-red-800",
};

export default function Callout({ type = "info", title, children }: Props) {
  const color = COLORS[type];

  return (
    <div className={`border-l-4 p-4 rounded ${color}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  );
}