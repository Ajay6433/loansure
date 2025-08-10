'use client';

import { MdOutlineCall, MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">We would love to hear from you. Reach out with any questions or inquiries.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 text-gray-700">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <MdOutlineCall size={24} />
            </div>
            <div>
              <h3 className="font-medium">Call Us</h3>
              <a href="tel:+919810309612" className="hover:underline block mt-1">+91-9810309612</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <MdOutlineMail size={24} />
            </div>
            <div>
              <h3 className="font-medium">Email Us</h3>
              <a href="mailto:admin@payfintechbazaar.com" className="hover:underline block mt-1">admin@payfintechbazaar.com</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <MdOutlineLocationOn size={24} />
            </div>
            <div>
              <h3 className="font-medium">Office</h3>
              <p className="mt-1">Gurgaon, Haryana, India</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4" action="mailto:admin@payfintechbazaar.com" method="POST" encType="text/plain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-500" />
              <input type="email" name="email" placeholder="Your Email" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-500" />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-green-500" />
            <textarea name="message" placeholder="Your Message" rows={5} required className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-green-500"></textarea>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
} 