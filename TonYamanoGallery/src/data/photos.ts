export interface Photo {
  id: string
  title: string
  description: string
  imageUrl: string
  location: string
  year: number
  palette: string[]
  camera: string
  version: string
}

export const photos: Photo[] = [
  {
    id: 'aurora-reflections',
    title: 'Aurora Reflections',
    description: 'A mirror-like lake amplifies the northern lights across the Hokkaido sky.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    location: 'Hokkaido, Japan',
    year: 2019,
    palette: ['#0f172a', '#1e293b', '#38bdf8'],
    camera: 'Fujifilm X-T5',
    version: 'Vivid North'
  },
  {
    id: 'serene-dawn',
    title: 'Serene Dawn',
    description: 'Golden morning haze bathing terraced tea fields.',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    location: 'Shizuoka, Japan',
    year: 2020,
    palette: ['#fff7ed', '#f59e0b', '#433311'],
    camera: 'Leica M11',
    version: 'Golden Harvest'
  },
  {
    id: 'urban-poetry',
    title: 'Urban Poetry',
    description: 'A solitary commuter in an illuminated Shinjuku crossing.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    location: 'Tokyo, Japan',
    year: 2022,
    palette: ['#0f172a', '#f97316', '#facc15'],
    camera: 'Ricoh GR III',
    version: 'Neon Diaries'
  },
  {
    id: 'mountain-veins',
    title: 'Mountain Veins',
    description: 'Aerial view of volcanic rivers carving into the valley floor.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    location: 'Kumamoto, Japan',
    year: 2018,
    palette: ['#1f2937', '#f97316', '#fbbf24'],
    camera: 'DJI Mavic 3',
    version: 'Elemental Lines'
  },
  {
    id: 'whispering-pines',
    title: 'Whispering Pines',
    description: 'Long exposure capturing coastal fog weaving through pine trees.',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
    location: 'Iwate, Japan',
    year: 2021,
    palette: ['#0b1120', '#38bdf8', '#f1f5f9'],
    camera: 'Hasselblad X2D',
    version: 'Azure Silence'
  },
  {
    id: 'crimson-lanterns',
    title: 'Crimson Lanterns',
    description: 'Lantern-lined alleyway glowing during a summer matsuri.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    location: 'Kyoto, Japan',
    year: 2017,
    palette: ['#450a0a', '#f97316', '#facc15'],
    camera: 'Canon EOS R6',
    version: 'Festival Echoes'
  }
]
