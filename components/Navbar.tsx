'use client';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const router = useRouter();

  // Menus: first 2 = 11 sublinks, rest = 5
  const menus = [
    { label: 'Loans', href: '/loans' },
    { label: 'Insurance', href: '/insurance' },
    { label: 'Cards', href: '/cards' },
    { label: 'Payments', href: '/payments' },
  ];

  function handleNavClick(idx: number) {
    // setActiveSubNav(activeSubNav === idx ? null : idx); // Removed
    // setSelectedSubLink(null); // Removed
  }

  function handleSubNavClick(label: string) {
    // setSelectedSubLink(label); // Removed
  }

  // Main navbar height (update to match your navbar if necessary)
  const mainNavHeight = 120;

  return (
    <div className="relative">
      {/* Fixed Main Navbar */}
      <nav className="bg-white h-23 flex items-center justify-between px-6 py-4 shadow fixed top-0 left-0 w-full z-50 overflow-visible">
        {/* Logo */}
        <div className="flex items-center space-x-4 relative z-20" onClick={() => router.push('/')}>
          <img
            src="/assets/Logo.png"
            alt="Logo"
            className="w-[154px] h-[133px] -mb-7 p-4"
          />
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden flex items-center z-30"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <RiCloseLine size={32} /> : <RiMenu3Line size={32} />}
        </button>

        {/* Desktop Navlinks */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          {menus.map(menu => (
            <Link key={menu.label} href={menu.href} className="text-gray-800 font-medium px-4 py-2 rounded hover:text-[#64b35d] transition-colors">
              {menu.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA (Desktop) */}
        <Link href="/contact" className="hidden md:block z-20">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition">
            Contact Us
          </button>
        </Link>

        {/* Mobile Navlinks Overlay */}
        <div className={`
          fixed inset-0 bg-white transition-all duration-300 z-20 flex flex-col items-center
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          md:hidden
        `}>
          <div className="mt-36 space-y-4">
            {menus.map(menu => (
              <Link key={menu.label} href={menu.href} className="block text-gray-800 font-semibold text-lg px-4 py-2" onClick={() => setOpen(false)}>
                {menu.label}
              </Link>
            ))}
            <Link href="/contact" className="block mt-4" onClick={() => setOpen(false)}>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Subnavbar removed as category pills are now handled inside each page */}

      {/* No spacer div here – sub-navbar overlaps the hero/content below */}
    </div>
  );
}
