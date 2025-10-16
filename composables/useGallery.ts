export interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'landscape' | 'portrait';
}

export interface GalleryCollection {
  slug: string;
  title: string;
  description: string;
  cover: string;
  colors: string;
  summary: string;
  location: string;
  year: string;
  images: GalleryImage[];
}

const collections: GalleryCollection[] = [
  {
    slug: 'urban-echoes',
    title: 'Urban Echoes',
    description: 'Vibrant cityscapes exploring light, shadow, and the rhythm of metropolitan life.',
    cover: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    colors: 'from-indigo-500/70 via-purple-500/50 to-slate-900/80',
    summary:
      'A cinematic stroll through neon reflections, late-night commuters, and the quiet poetry of concrete geometry.',
    location: 'Tokyo, Japan',
    year: '2024',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80',
        alt: 'Neon reflections glowing across a rainy crosswalk at night',
        orientation: 'landscape',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=750&q=80',
        alt: 'High-rise apartment tower with repeating balconies',
        orientation: 'portrait',
      },
      {
        src: 'https://images.unsplash.com/photo-1526481280695-3c469928b67b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Commuters descending an escalator into a glowing subway station',
        orientation: 'landscape',
      },
      {
        src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80',
        alt: 'Blurred cyclist racing through a tunnel of colorful lights',
        orientation: 'landscape',
      },
    ],
  },
  {
    slug: 'quiet-portraits',
    title: 'Quiet Portraits',
    description: 'Intimate portraits that celebrate personality through subtle gestures and soft tones.',
    cover: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    colors: 'from-rose-500/70 via-orange-400/60 to-slate-900/80',
    summary:
      'An intimate exploration of character studies captured in natural light and quiet spaces.',
    location: 'Los Angeles, USA',
    year: '2023',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        alt: 'Portrait of a person looking over their shoulder with soft lighting',
        orientation: 'portrait',
      },
      {
        src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1000&q=80',
        alt: 'Candid friends laughing at an outdoor cafe',
        orientation: 'landscape',
      },
      {
        src: 'https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=750&q=80',
        alt: 'Profile portrait with dramatic split lighting',
        orientation: 'portrait',
      },
      {
        src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1000&q=80',
        alt: 'Person seated in a studio surrounded by warm-toned fabrics',
        orientation: 'landscape',
      },
    ],
  },
  {
    slug: 'wandering-sol',
    title: 'Wandering Sol',
    description: 'Travel diaries spanning misty mountains, serene coasts, and hidden streetscapes.',
    cover: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
    colors: 'from-emerald-500/70 via-teal-400/60 to-slate-900/80',
    summary: 'A meditative journey following sunrise hikes, coastal breezes, and the hum of distant markets.',
    location: 'Lisbon, Portugal',
    year: '2022',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
        alt: 'Sunrise view above layered mountain ridges',
        orientation: 'landscape',
      },
      {
        src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=750&q=80',
        alt: 'Traveler walking through a narrow European alleyway',
        orientation: 'portrait',
      },
      {
        src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Aerial view of waves crashing against a rocky coastline',
        orientation: 'landscape',
      },
      {
        src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80',
        alt: 'Street market with warm evening lights and motion blur',
        orientation: 'landscape',
      },
    ],
  },
];

export const useGallery = () => {
  const findCollection = (slug: string) => collections.find((collection) => collection.slug === slug);

  return {
    collections,
    findCollection,
  };
};

export type UseGalleryReturn = ReturnType<typeof useGallery>;
