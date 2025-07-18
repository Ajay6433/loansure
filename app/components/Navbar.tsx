'use client';
import Link from 'next/link';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState<number | null>(null);
  const [selectedSubLink, setSelectedSubLink] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Menus: first 2 = 11 sublinks, rest = 5
  const menus = [
    {
      label: 'Loans',
      links: [
        "Secured Personal Loan",
        "Unsecured Personal Loan",
        "Educational Loan",
        "Car Loan",
        "Home Renovation Loan",
        "Wedding Loan",
        "Medical Loan",
        "Travel Loan",
        "Loan Against Property",
        "Gold Loan",
        "Top-Up Loan"
      ].map((label, i) => ({
        href: `/loans/type${i+1}`,
        label,
      })),
    },
    {
      label: 'Insurance',
      links: Array.from({ length: 11 }, (_, i) => ({
        href: `/insurance/type${i+1}`,
        label: `Insurance Type ${i+1}`,
      })),
    },
    {
      label: 'Cards',
      links: Array.from({ length: 5 }, (_, i) => ({
        href: `/cards/type${i+1}`,
        label: `Card Type ${i+1}`,
      })),
    },
    {
      label: 'Payments',
      links: Array.from({ length: 5 }, (_, i) => ({
        href: `/payments/type${i+1}`,
        label: `Payment Type ${i+1}`,
      })),
    },
  ];

  function handleNavClick(idx: number) {
    setActiveSubNav(activeSubNav === idx ? null : idx);
    setSelectedSubLink(null);
  }

  function handleSubNavClick(label: string) {
    setSelectedSubLink(label);
  }

  // Main navbar height (update to match your navbar if necessary)
  const mainNavHeight = 120;

  return (
    <div className="relative">
      {/* Fixed Main Navbar */}
      <nav className="bg-white h-23 flex items-center justify-between px-6 py-4 shadow fixed top-0 left-0 w-full z-50 overflow-visible">
        {/* Logo */}
        <div className="flex items-center space-x-4 relative z-20">
          <img
            src="/assets/logo.png"
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
          {menus.map((menu, idx) => (
            <button
              key={menu.label}
              className={`text-gray-800 font-medium flex items-center focus:outline-none relative transition-colors px-4 py-2 rounded 
                ${activeSubNav === idx ? 'bg-gray-100' : ''}
              `}
              onClick={() => handleNavClick(idx)}
            >
              {menu.label}
              <RiArrowDropDownLine
                className={`ml-1 transition-transform ${activeSubNav === idx ? 'rotate-180' : ''}`}
                size={28}
              />
            </button>
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
          fixed inset-0 bg-white transition-all duration-300 z-20 flex flex-col
          ${open ? 'top-0 opacity-100 pointer-events-auto' : 'top-0 opacity-0 pointer-events-none'}
          md:hidden
        `}>
          <div className="flex flex-col items-center mt-36 space-y-3">
            {menus.map((menu, idx) => (
              <div key={menu.label} className="w-full max-w-xs">
                <button
                  className="w-full text-left text-gray-800 font-semibold flex items-center justify-between py-3 px-2"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {menu.label}
                  <RiArrowDropDownLine
                    className={`ml-2 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`}
                    size={28}
                  />
                </button>
                <div className={`flex flex-col transition-all duration-200 bg-gray-50 overflow-hidden ${openDropdown === idx ? 'max-h-96 py-1' : 'max-h-0 py-0'}`}>
                  {menu.links.map((link, i) => (
                    <Link key={i} href={link.href} className="block px-5 py-2 hover:bg-gray-100">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {/* Mobile CTA */}
            <Link href="/contact" className="w-full max-w-xs mt-3">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* SUB-NAVBAR (overlapping, no spacer, normal scroll) */}
      {activeSubNav !== null && (
        <div
          className={`
            hidden md:block fixed left-0 w-full bg-gray-50 shadow-inner z-40
            transition-all duration-200 top-23 no-scrollbar
          `}
        >
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex px-6 py-3 gap-4 min-w-[480px]">
              {menus[activeSubNav].links.map((link, i) => (
                <button
                  key={link.label}
                  className={
                    (selectedSubLink === link.label
                      ? "bg-[#64b35d] text-white border-[#64b35d]"
                      : "bg-white text-black border-gray-300 hover:border-[#64b35d]"
                    ) +
                    " font-bold px-7 py-3 rounded-full border shadow-sm transition whitespace-nowrap"
                  }
                  onClick={() => handleSubNavClick(link.label)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No spacer div here – sub-navbar overlaps the hero/content below */}
    </div>
  );
}
