export function getMapboxPublicToken() {
  return process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_PUBLIC_TOKEN ?? "";
}
