'use client';

import { MdOutlineCall, MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyRqXpbnYVHZs_DNI8CyszQl8czgowol6UZUHaKIU--VysabmRETQQyVHU8MICpx6b_8Q/exec";
    try {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('subject', form.subject);
        formData.append('message', form.message);
        console.log(formData);
      const res = await fetch(GOOGLE_APP_SCRIPT_URL, {
        method: 'POST',
          body: formData,
      });
      console.log(res);
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-500" />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-500" />
      </div>
      <input type="tel" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-green-500" />
      <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-green-500" />
      <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-green-500"></textarea>
      <button type="submit" disabled={status==='submitting'} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition disabled:opacity-60">
        {status==='submitting' ? 'Sending...' : 'Send Message'}
      </button>
      {status==='success' && <p className="text-green-600">Message sent successfully!</p>}
      {status==='error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}

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
          <ContactForm />
        </div>
      </section>
    </>
  );
} 