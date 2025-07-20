'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import data from '../data.json';

const services: any = (data as any).services;

export default function CategoryBar() {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split('/').filter(Boolean);
  const service = segments[0];
  const categories = services?.[service]?.categories;

  if (!categories?.length) return null;

  const activeSlug = segments[1] || categories[0].slug;

  return (
    <div className="sticky top-[92px] bg-white shadow z-40">
      <div className="max-w-7xl mx-auto px-4 flex flex-nowrap gap-2 overflow-x-auto py-3 no-scrollbar">
        {categories.map((c: any) => (
          <Link
            key={c.slug}
            href={`/${service}/${c.slug}`}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm border transition-colors
              ${c.slug === activeSlug ? 'bg-[#64b35d] text-white border-[#64b35d]' : 'bg-white text-gray-700 border-gray-300 hover:bg-[#64b35d]/10'}
            `}
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
} 