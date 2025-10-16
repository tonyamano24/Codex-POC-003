export interface GalleryImage {
  title: string;
  location: string;
  year: number;
  description: string;
  url: string;
}

export const galleryImages: GalleryImage[] = [
  {
    title: "Golden Hour in Kyoto",
    location: "Kyoto, Japan",
    year: 2023,
    description: "A quiet alleyway glowing with the last light of day.",
    url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Mountain Whisper",
    location: "Nagano, Japan",
    year: 2022,
    description: "Snow-capped peaks emerging from the morning mist.",
    url: "https://images.unsplash.com/photo-1526481280695-3c469928dcca?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "City Reflections",
    location: "Tokyo, Japan",
    year: 2021,
    description: "Neon reflections dancing on a rainy crosswalk.",
    url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Ocean Breath",
    location: "Okinawa, Japan",
    year: 2020,
    description: "A serene shoreline painted in turquoise hues.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface VersionPreview {
  label: string;
  highlight: string;
  description: string;
  image: string;
}

export const versionPreviews: VersionPreview[] = [
  {
    label: "Version 3.0",
    highlight: "Story-driven gallery",
    description: "Immersive, full-screen storytelling layout featuring Ton's latest adventures.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Version 2.0",
    highlight: "Curated collections",
    description: "A modular mosaic of themed collections designed for easy browsing.",
    image: "https://images.unsplash.com/photo-1522199992059-3c7abb882bc2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Version 1.0",
    highlight: "Minimal launch",
    description: "The very first iteration that introduced Ton's aesthetic to the world.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  }
];
