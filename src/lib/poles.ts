export type PoleId = "juridique" | "environnement";

export const poles = {
  juridique: {
    id: "juridique" as const,
    href: "/services",
    color: "#0d4595",
    softColor: "#e8effa",
  },
  environnement: {
    id: "environnement" as const,
    href: "/environment",
    color: "#299122",
    softColor: "#e3f3dc",
  },
};

const environmentKeywords =
  /environnement|eies|impact|géotechni|geotechni|technique|audit environ|hydro|sol\b|écolog|ecolog/i;

export function getPoleId(title: string, label = ""): PoleId {
  return environmentKeywords.test(`${title} ${label}`)
    ? "environnement"
    : "juridique";
}
