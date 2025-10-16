export interface PreviewImage {
  src: string;
  alt: string;
  label: string;
}

export interface PhotoProject {
  slug: string;
  title: string;
  year: string;
  location: string;
  summary: string;
  cover: string;
  previews: PreviewImage[];
}

export interface PhotographerProfile {
  name: string;
  bio: string;
  accolades: string[];
  services: { title: string; description: string }[];
}
