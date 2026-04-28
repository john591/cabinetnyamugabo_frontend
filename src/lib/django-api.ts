import { servicesData } from "@/lib/services-data";
import { newsPosts } from "@/lib/news-data";

export type DjangoService = {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  icon: string;
  is_featured: boolean;
  order: number;
};

export type DjangoTeamMember = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  slug: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  linkedin_url: string;
  photo_url: string;
  is_active: boolean;
  order: number;
};

export type DjangoBlogPost = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  body?: string;
  category?: {
    id: number;
    name: string;
    slug: string;
    description?: string;
  } | null;
  author?: {
    id: number;
    full_name: string;
    slug: string;
    role: string;
  } | null;
  featured_image_url: string;
  published_at: string;
};

type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

function isBrowser() {
  return typeof window !== "undefined";
}

function getApiBaseUrl() {
  const configuredBaseUrl =
    process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL ??
    process.env.DJANGO_API_BASE_URL;

  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://127.0.0.1:8000/api";
  }

  return "";
}

function isPaginated<T>(data: unknown): data is PaginatedResponse<T> {
  return typeof data === "object" && data !== null && "results" in data;
}

async function fetchFromFrontendApi<T>(
  path: string,
  init?: RequestInit,
): Promise<T | null> {
  try {
    const response = await fetch(path, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      cache: init?.cache ?? "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

async function fetchFromDjango<T>(
  path: string,
  init?: RequestInit,
): Promise<T | null> {
  try {
    if (!getApiBaseUrl()) {
      return null;
    }

    const response = await fetch(`${getApiBaseUrl()}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      cache: init?.cache ?? "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

async function postToDjango<T>(path: string, body: unknown): Promise<T | null> {
  try {
    if (!getApiBaseUrl()) {
      return null;
    }

    const response = await fetch(`${getApiBaseUrl()}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function formatPublishedDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function getServices() {
  if (isBrowser()) {
    const frontendData = await fetchFromFrontendApi<
      PaginatedResponse<DjangoService> | DjangoService[]
    >("/api/services");

    if (frontendData) {
      return isPaginated<DjangoService>(frontendData)
        ? frontendData.results
        : frontendData;
    }
  }

  const data = await fetchFromDjango<PaginatedResponse<DjangoService> | DjangoService[]>(
    "/services/",
  );

  if (!data) {
    return servicesData.map((service, index) => ({
      id: index + 1,
      title: service.title,
      slug: service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      short_description: service.description,
      description: service.description,
      icon: "",
      is_featured: true,
      order: index,
    }));
  }

  return isPaginated<DjangoService>(data) ? data.results : data;
}

export async function getFeaturedServices() {
  const services = await getServices();
  return services.filter((service) => service.is_featured).slice(0, 6);
}

export async function getTeamMembers() {
  const data = await fetchFromDjango<
    PaginatedResponse<DjangoTeamMember> | DjangoTeamMember[]
  >("/team/");

  if (!data) {
    return [
      {
        id: 1,
        first_name: "Aline",
        last_name: "Nyamugabo",
        full_name: "Aline Nyamugabo",
        slug: "aline-nyamugabo",
        role: "Managing Partner",
        bio: "",
        email: "aline.nyamugabo@cabinetnyamugabo.com",
        phone: "+243 000 000 101",
        linkedin_url: "",
        photo_url:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
        is_active: true,
        order: 1,
      },
      {
        id: 2,
        first_name: "David",
        last_name: "Ilunga",
        full_name: "David Ilunga",
        slug: "david-ilunga",
        role: "Head of Disputes",
        bio: "",
        email: "david.ilunga@cabinetnyamugabo.com",
        phone: "+243 000 000 102",
        linkedin_url: "",
        photo_url:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
        is_active: true,
        order: 2,
      },
      {
        id: 3,
        first_name: "Clarisse",
        last_name: "Mbayo",
        full_name: "Clarisse Mbayo",
        slug: "clarisse-mbayo",
        role: "Counsel, Private Clients",
        bio: "",
        email: "clarisse.mbayo@cabinetnyamugabo.com",
        phone: "+243 000 000 103",
        linkedin_url: "",
        photo_url:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
        is_active: true,
        order: 3,
      },
    ];
  }

  return isPaginated<DjangoTeamMember>(data) ? data.results : data;
}

export async function getPosts() {
  const data = await fetchFromDjango<
    PaginatedResponse<DjangoBlogPost> | DjangoBlogPost[]
  >("/blog/posts/");

  if (!data) {
    return newsPosts.map((post, index) => ({
      id: index + 1,
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      body: post.content.join("\n\n"),
      category: post.type
        ? { id: index + 1, name: post.type, slug: post.type.toLowerCase() }
        : null,
      author: null,
      featured_image_url: post.image,
      published_at: post.date,
    }));
  }

  return isPaginated<DjangoBlogPost>(data) ? data.results : data;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchFromDjango<DjangoBlogPost>(`/blog/posts/${slug}/`);

  if (data) {
    return data;
  }

  const fallback = newsPosts.find((post) => post.slug === slug);
  if (!fallback) {
    return null;
  }

  return {
    id: 0,
    title: fallback.title,
    slug: fallback.slug,
    summary: fallback.summary,
    body: fallback.content.join("\n\n"),
    category: fallback.type
      ? { id: 0, name: fallback.type, slug: fallback.type.toLowerCase() }
      : null,
    author: null,
    featured_image_url: fallback.image,
    published_at: fallback.date,
  };
}

export function mapServiceToSlide(
  service: DjangoService,
  index: number,
  images: string[],
) {
  return {
    id: service.id,
    title: service.title,
    label: service.icon || "Practice Area",
    description: service.short_description || service.description,
    image: images[index % images.length],
    slug: service.slug,
  };
}

export function mapTeamMemberToCard(member: DjangoTeamMember) {
  return {
    name: member.full_name,
    role: member.role,
    city: "Kinshasa",
    email: member.email,
    phone: member.phone,
    image:
      member.photo_url ||
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  };
}

export function mapPostToCard(post: DjangoBlogPost) {
  return {
    slug: post.slug,
    date: formatPublishedDate(post.published_at),
    type: post.category?.name ?? "Article",
    title: post.title,
    summary: post.summary,
    image:
      post.featured_image_url ||
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  };
}

export async function submitAppointmentRequest(payload: {
  name: string;
  address: string;
  phone: string;
  email: string;
  country: string;
  office: string;
  serviceId?: number;
  preferredDate: string;
  preferredTime: string;
  message: string;
}) {
  if (isBrowser()) {
    return fetchFromFrontendApi<{ detail: string }>("/api/appointments", {
      method: "POST",
      body: JSON.stringify({
        name: payload.name,
        address: payload.address,
        phone: payload.phone,
        email: payload.email,
        country: payload.country,
        office: payload.office,
        service_id: payload.serviceId || null,
        preferred_date: payload.preferredDate,
        preferred_time: payload.preferredTime || null,
        message: payload.message,
      }),
    });
  }

  return postToDjango<{ detail: string }>("/appointments/", {
      name: payload.name,
      address: payload.address,
      phone: payload.phone,
      email: payload.email,
      country: payload.country,
      office: payload.office,
      service_id: payload.serviceId || null,
      preferred_date: payload.preferredDate,
      preferred_time: payload.preferredTime || null,
      message: payload.message,
  });
}
