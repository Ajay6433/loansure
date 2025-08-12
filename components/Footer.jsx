import Image from 'next/image';
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlineCall } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c22] text-white pt-10 pb-4 px-4 md:px-12" id='footer'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <Image
            src="/logo-light.png"
            alt="Pay FintechBazaar Logo"
            width={170}
            height={100}
            className="object-contain w-[170px] h-[100px]"
          />
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center w-full md:w-1/3">
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
        <div className="flex flex-col items-center w-full md:w-1/3">
          <p className="flex items-center gap-2 mb-1">
            <MdOutlineCall size={20} className="text-[#64b35d]" />
            <a href="tel:+919810309612" className="hover:underline">+91-9810309612</a>
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineMail size={20} className="text-[#64b35d]" />
            <a href="mailto:admin@payfintechbazaar.com" className="hover:underline">admin@payfintechbazaar.com</a>
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-xs text-center text-gray-400 border-t border-[#242446] mt-6 pt-3 pb-1 space-x-2">
        <span>© 2025 Pay FintechBazaar All rights reserved.</span>
        <span>|</span>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <span>|</span>
        <a href="/terms-of-service" className="hover:underline">Terms Of Service</a>
      </div>

      {/* Design Credit */}
      <div className="text-xs text-center text-gray-500 mt-1">
        Designed and developed by <span className="text-white">Infohive</span>
      </div>
    </footer>
  );
}
