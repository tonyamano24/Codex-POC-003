export type GalleryVersion = {
  version: string
  title: string
  summary: string
  releasedOn: string
  previewImage: string
  highlights: string[]
  photos: Array<{
    title: string
    location: string
    image: string
  }>
}

export const galleryVersions: GalleryVersion[] = [
  {
    version: 'v1.0',
    title: 'Foundations of Light',
    summary: 'An intimate look at the early street photography experiments in Tokyo and Kyoto.',
    releasedOn: '2023-09-14',
    previewImage: '/previews/version-1.svg',
    highlights: [
      'Moody night walks through Shinjuku',
      'First experiments with long exposure and neon reflections',
      'A monochrome celebration of quiet corners'
    ],
    photos: [
      { title: 'Shinjuku Rain', location: 'Tokyo, Japan', image: '/photos/shinjuku-rain.svg' },
      { title: 'Gion Stillness', location: 'Kyoto, Japan', image: '/photos/gion-stillness.svg' },
      { title: 'Midnight Tram', location: 'Osaka, Japan', image: '/photos/midnight-tram.svg' }
    ]
  },
  {
    version: 'v1.5',
    title: 'Mountains & Mist',
    summary: 'A dreamy series from alpine expeditions across Nagano and the Japanese Alps.',
    releasedOn: '2024-04-02',
    previewImage: '/previews/version-2.svg',
    highlights: [
      'Sunrise panoramas above the cloud line',
      'Soft gradients inspired by analog film',
      'Wildlife encounters captured on medium format'
    ],
    photos: [
      { title: 'Kamikochi Dawn', location: 'Nagano, Japan', image: '/photos/kamikochi-dawn.svg' },
      { title: 'Snow Monkey', location: 'Jigokudani, Japan', image: '/photos/snow-monkey.svg' },
      { title: 'Torchlight Hike', location: 'Hakuba, Japan', image: '/photos/torchlight-hike.svg' }
    ]
  },
  {
    version: 'v2.0',
    title: 'Coastal Reveries',
    summary: 'New cinematic edits inspired by the shifting tides and luminescent sunsets of Okinawa.',
    releasedOn: '2025-02-21',
    previewImage: '/previews/version-3.svg',
    highlights: [
      'Underwater portraits at blue hour',
      'Experimental drone footage frames',
      'Warmth and grain pulled from vintage lenses'
    ],
    photos: [
      { title: 'Emerald Bay', location: 'Ishigaki, Japan', image: '/photos/emerald-bay.svg' },
      { title: 'Ghost Nets', location: 'Miyakojima, Japan', image: '/photos/ghost-nets.svg' },
      { title: 'Luminous Tide', location: 'Okinawa, Japan', image: '/photos/luminous-tide.svg' }
    ]
  }
]
