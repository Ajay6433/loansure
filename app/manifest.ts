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
    orientation: 'any',
    icons: [
        {
            "purpose": "maskable",
            "sizes": "512x512",
            "src": "/icon512_maskable.png",
            "type": "image/png"
        },
        {
            "purpose": "any",
            "sizes": "512x512",
            "src": "/icon512_rounded.png",
            "type": "image/png"
        }
    ],
  }
} 