const DEFAULT_DJANGO_API_BASE_URL = "https://cabinetnyamugabo.onrender.com/api";

function normalizeBaseUrl(value: string | undefined) {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    return null;
  }

  return trimmedValue.replace(/\/$/, "");
}

export function getDjangoApiBaseUrl() {
  return (
    normalizeBaseUrl(process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL) ??
    normalizeBaseUrl(process.env.DJANGO_API_BASE_URL) ??
    DEFAULT_DJANGO_API_BASE_URL
  );
}
