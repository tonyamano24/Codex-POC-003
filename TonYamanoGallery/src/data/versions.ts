export interface GalleryVersion {
  id: string
  title: string
  released: string
  description: string
  highlights: string[]
  previewImage: string
}

export const galleryVersions: GalleryVersion[] = [
  {
    id: 'v1',
    title: 'Version 1 · Origins',
    released: '2018',
    description: 'The first collection exploring analog-inspired tones and intimate landscapes.',
    highlights: [
      'Soft grain overlays and muted palettes',
      'Focus on coastal Japan and rural memories',
      'Featured in the Yokohama Emerging Artists fair'
    ],
    previewImage: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'v2',
    title: 'Version 2 · Neon Diaries',
    released: '2020',
    description: 'A pivot to kinetic cityscapes and late-night chroma experiments.',
    highlights: [
      'Dynamic colour grading using split toning',
      'In-camera long-exposure layering',
      'Collaboration with Tokyo Street Collective'
    ],
    previewImage: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'v3',
    title: 'Version 3 · Elemental Lines',
    released: '2022',
    description: 'Aerial abstraction project tracing volcanic rivers and forests.',
    highlights: [
      'Drone-assisted medium format workflow',
      'Custom LUTs built for twilight flights',
      'Awarded the Sendai Visual Poetry prize'
    ],
    previewImage: 'https://images.unsplash.com/photo-1526481280695-3c4697ab95f9?auto=format&fit=crop&w=1200&q=80'
  }
]
