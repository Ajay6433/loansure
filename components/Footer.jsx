import Image from 'next/image';
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlineCall } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c22] text-white pt-10 pb-4 px-4 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Logo and Name */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/assets/Logo.png"
            alt="LoanSure CardsPe Logo"
            width={84}
            height={84}/>
        </div>
        {/* Social & Contact */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">Keep In Touch</p>
          <div className="flex gap-4 mb-2">
            <a href="#" className="p-2 rounded-full bg-[#18183a] hover:bg-white hover:text-[#233827] transition" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#18183a] hover:bg-white hover:text-[#233827] transition" aria-label="X (Twitter)">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#18183a] hover:bg-white hover:text-[#233827] transition" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-center md:items-start" id='Footer'>
          <p className="flex items-center gap-2 mb-1">
            <MdOutlineCall size={20} className="text-[#64b35d]" />
            <span>8899003355</span>
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineMail size={20} className="text-[#64b35d]" />
            <span>CardsPe@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="text-xs text-center text-gray-400 border-t border-[#242446] mt-6 pt-3 pb-1 space-x-2">
        <span>© 2025 Loansure CardSpe All rights reserved.</span>
        <span>|</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:underline">Terms Of Service</a>
      </div>
    </footer>
  );
}
