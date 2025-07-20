'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  category: string;
  subCategory: string;
}

export default function ApplyModal({ category, subCategory }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    organization: '',
    additional: '',
  });

  const fieldBase = "w-full bg-gray-100 rounded-md px-4 py-3 placeholder:text-[#64b35d] text-[#233827] focus:outline-none";

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    if (name === 'state') {
      setForm(prev => ({ ...prev, state: value, city: '' }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: replace with real API call
    console.log({ ...form, category, subCategory });
    alert('Application submitted!');
    setOpen(false);
  }

  const states = [
    { name: "Delhi", cities: ["New Delhi"] },
    { name: "Maharashtra", cities: ["Mumbai", "Pune"] },
    { name: "Karnataka", cities: ["Bengaluru", "Mysuru"] },
  ];

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 no-scrollbar relative animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6">Apply for a Loan or Card</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Enter  your full name" className={fieldBase} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Enter  your phone number" className={fieldBase} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Enter  your email address" className={fieldBase} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">State</label>
            <select name="state" value={form.state} onChange={handleSelect} className={fieldBase + " appearance-none"}>
              <option value="" disabled>Select  an option</option>
              {states.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">City</label>
            <select name="city" value={form.city} onChange={handleSelect} className={fieldBase + " appearance-none"} disabled={!form.state}>
              <option value="" disabled>Select  an option</option>
              {states.find(s=>s.name===form.state)?.cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Organization <span className="text-xs text-gray-400">(Optional)</span></label>
            <input name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" className={fieldBase} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <input value={category} disabled className={fieldBase + " opacity-80"} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Sub Category</label>
            <input value={subCategory} disabled className={fieldBase + " opacity-80"} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Additional Information</label>
            <textarea name="additional" value={form.additional} onChange={handleChange} rows={3} className={fieldBase} />
          </div>
          <button type="submit" className="w-full bg-[#64b35d] hover:bg-[#4f9b4d] text-white py-3 rounded-md font-medium">Submit Application</button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-[#64b35d] hover:bg-[#4f9b4d] text-white px-8 py-3 rounded-md font-medium shadow">
        Apply Now
      </button>
      {mounted && open && createPortal(modalContent, document.body)}
    </>
  );
} 