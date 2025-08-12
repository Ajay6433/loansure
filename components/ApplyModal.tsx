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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    // TODO: replace with real API call
    console.log({ ...form, category, subCategory });
    const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7UkMkWRvjatfHwQj27KszFWEmTSuSxlSuLDesldQYns_Zu_9sAr4rw9S4Fya2DNbg/exec";
    try {
        const formData = new FormData();
        formData.append('fullName', form.fullName);
        formData.append('phone', form.phone);
        formData.append('email', form.email);
        formData.append('state', form.state);
        formData.append('city', form.city);
        formData.append('organization', form.organization);
        formData.append('additional', form.additional);
        formData.append('category', category);
        formData.append('subCategory', subCategory);
        formData.append('status', 'pending');

        console.log(formData);
      const res = await fetch(GOOGLE_APP_SCRIPT_URL, {
        method: 'POST',
          body: formData,
      });
      console.log(res);
      if (res.ok) {
        setStatus('success');
        console.log('Status set to success');
        // Reset form
        setForm({
          fullName: '',
          phone: '',
          email: '',
          state: '',
          city: '',
          organization: '',
          additional: '',
        });
      } else {
        throw new Error('Failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      console.log('Status set to error');
    }
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
        
        {/* Debug Status */}
        <div className="text-xs text-gray-500 mb-2 text-center">
          Current Status: {status}
        </div>
        
        {/* Success Message */}
        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Application Submitted Successfully!</h3>
                <p className="text-sm text-green-700 mt-1">Thank you for your application. We'll get back to you soon.</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Error Message */}
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Submission Failed</h3>
                <p className="text-sm text-green-700 mt-1">Please try again. If the problem persists, contact support.</p>
              </div>
            </div>
          </div>
        )}
        
        {status !== 'success' && (
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
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className={`w-full py-3 rounded-md font-medium transition-colors ${
                status === 'submitting'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#64b35d] hover:bg-[#4f9b4d]'
              } text-white`}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
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