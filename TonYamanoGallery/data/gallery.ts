import type { PhotoProject, PhotographerProfile } from "~/types/gallery";

export const featureProjects: PhotoProject[] = [
  {
    slug: "aurora-odyssey",
    title: "Aurora Odyssey",
    year: "2024",
    location: "Reykjavík, Iceland",
    summary:
      "A celestial exploration of Iceland's northern lights captured over ten frozen nights, blending astrophotography with intimate portraits of the explorers who chase the auroras.",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    previews: [
      {
        src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=400&q=80",
        alt: "Northern lights above a snow covered mountain",
        label: "V1"
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
        alt: "Traveler under the night sky",
        label: "V2"
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80",
        alt: "Waterfall with aurora glow",
        label: "V3"
      }
    ]
  },
  {
    slug: "neon-metropolis",
    title: "Neon Metropolis",
    year: "2023",
    location: "Tokyo, Japan",
    summary:
      "Vibrant street photography celebrating the energy of Shibuya's nights, blending cyberpunk hues with candid moments of city life.",
    cover: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=80",
    previews: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
        alt: "Neon reflections on rainy streets",
        label: "V1"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
        alt: "City skyline with neon lights",
        label: "V2"
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
        alt: "Person holding umbrella in neon district",
        label: "V3"
      }
    ]
  }
];

export const intimateProjects: PhotoProject[] = [
  {
    slug: "portraits-of-solace",
    title: "Portraits of Solace",
    year: "2022",
    location: "Kyoto, Japan",
    summary:
      "Quiet portraits from a month-long artist residency in Kyoto where Ton focused on capturing serene morning rituals and contemplative expressions.",
    cover: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80",
    previews: [
      {
        src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
        alt: "Portrait of a woman in soft light",
        label: "V1"
      },
      {
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
        alt: "Hands holding tea",
        label: "V2"
      },
      {
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
        alt: "Calligraphy tools on desk",
        label: "V3"
      }
    ]
  },
  {
    slug: "families-in-motion",
    title: "Families in Motion",
    year: "2021",
    location: "San Francisco, USA",
    summary:
      "Lifestyle session series documenting multi-generational families in movement — biking, dancing, and celebrating milestones together.",
    cover: "https://images.unsplash.com/photo-1526481280695-3c4693f34c82?auto=format&fit=crop&w=1400&q=80",
    previews: [
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
        alt: "Family riding bicycles by the beach",
        label: "V1"
      },
      {
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        alt: "Mother holding child in celebration",
        label: "V2"
      },
      {
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        alt: "Family dancing in living room",
        label: "V3"
      }
    ]
  }
];

export const photographerProfile: PhotographerProfile = {
  name: "Ton Yamano",
  bio:
    "Ton is a Japanese-Peruvian photographer crafting cinematic imagery that celebrates human connection and natural wonder. With a background in sound design, Ton approaches every shoot as if composing a symphony of color and light.",
  accolades: [
    "Leica Emerging Storyteller Award 2023",
    "Sony World Photography Awards - Shortlist 2022",
    "National Geographic Travel Photographer Finalist"
  ],
  services: [
    {
      title: "Destination Elopements",
      description: "Multi-day storytelling for couples celebrating in the world's most dramatic landscapes."
    },
    {
      title: "Editorial Portraits",
      description: "Studio and on-location portrait experiences tailored for magazines and personal brands."
    },
    {
      title: "Fine-Art Prints",
      description: "Limited edition archival prints, hand-signed and shipped worldwide."
    }
  ]
};
