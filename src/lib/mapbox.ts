export function getMapboxPublicToken() {
  return (
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN ??
    process.env.NEXT_public_mapbox_token ??
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ??
    process.env.MAPBOX_PUBLIC_TOKEN ??
    process.env.MAPBOX_TOKEN ??
    ""
  );
}
