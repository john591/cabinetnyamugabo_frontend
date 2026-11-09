import type { PoleId } from "@/lib/poles";

export function PoleIcon({
  pole,
  className = "h-7 w-7",
}: {
  pole: PoleId;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (pole === "juridique") {
    // Balance de la justice
    return (
      <svg {...common}>
        <path d="M12 3v18M7 21h10M5 7h14" />
        <path d="M5 7l-3 7a3.5 3.5 0 0 0 6 0L5 7zM19 7l-3 7a3.5 3.5 0 0 0 6 0l-3-7z" />
      </svg>
    );
  }

  // Feuille
  return (
    <svg {...common}>
      <path d="M20 4C9 4 4 9 4 15a5 5 0 0 0 5 5c6 0 11-5 11-16z" />
      <path d="M4 20c3-6 7-9 11-11" />
    </svg>
  );
}
