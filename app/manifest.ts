import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pay FintechBazaar',
    short_name: 'FintechBazaar',
    description: 'Simplify financial access for individuals, professionals, and businesses across India',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#64b35d',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
} 