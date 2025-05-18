export default function ColorTestPage() {
  const colors = [
    { label: "Background", className: "bg-background text-dark", hex: "#DFD0B8" },
    { label: "Surface", className: "bg-surface text-dark", hex: "#948979" },
    { label: "Primary", className: "bg-primary text-white", hex: "#3C5B6F" },
    { label: "Dark", className: "bg-dark text-white", hex: "#153448" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8 space-y-8">
      <h1 className="text-4xl font-bold">Brand Color Palette Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {colors.map((color) => (
          <div
            key={color.label}
            className={`${color.className} p-6 rounded shadow border border-black/10`}
          >
            <p className="font-semibold">{color.label}</p>
            <code className="text-sm opacity-80">{color.hex}</code>
          </div>
        ))}
      </div>
    </div>
  );
}