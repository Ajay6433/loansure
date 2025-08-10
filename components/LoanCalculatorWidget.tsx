'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdCalculate, MdClose, MdHome, MdPerson, MdBusiness, MdEdit } from 'react-icons/md';

const tabs = [
  { key: 'home', label: 'Home', icon: MdHome },
  { key: 'personal', label: 'Personal', icon: MdPerson },
  { key: 'business', label: 'Business', icon: MdBusiness },
];

function formatCurrency(v: number) {
  return v.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
}

export default function LoanCalculatorWidget() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<'home' | 'personal' | 'business'>('home');
  const [editMode, setEditMode] = useState({ amount: false, rate: false, tenure: false });
  const [params, setParams] = useState({
    home: { amount: 1000000, rate: 7, tenure: 20 },
    personal: { amount: 500000, rate: 12, tenure: 5 },
    business: { amount: 2000000, rate: 10, tenure: 10 },
  });
  const [results, setResults] = useState({ emi: 0, interest: 0, total: 0 });
  const [tempInputs, setTempInputs] = useState({ amount: '', rate: '', tenure: '' });

  const p = params[active];

  useEffect(() => {
    const principal = p.amount;
    const monthlyRate = p.rate / 12 / 100;
    const n = p.tenure * 12;
    const emiVal = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalPay = emiVal * n;
    const interest = totalPay - principal;
    setResults({ emi: emiVal, interest, total: totalPay });
  }, [p]);

  function updateField(field: string, value: number) {
    setParams(prev => ({ ...prev, [active]: { ...prev[active], [field]: value } }));
  }

  function handleManualInput(field: 'amount' | 'rate' | 'tenure', value: string) {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      updateField(field, numValue);
      setEditMode(prev => ({ ...prev, [field]: false }));
    }
  }

  function toggleEditMode(field: 'amount' | 'rate' | 'tenure') {
    setEditMode(prev => ({ ...prev, [field]: !prev[field] }));
    setTempInputs(prev => ({ ...prev, [field]: p[field].toString() }));
  }

  function handleExploreMore() {
    setOpen(false);
    router.push('/loans');
  }

  function handleApplyNow() {
    setOpen(false);
    const loanRoutes = {
      home: '/loans/housing-loan',
      personal: '/loans/unsecured-personal-loan', 
      business: '/loans/unsecured-business-loan'
    };
    router.push(loanRoutes[active]);
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
          
          <button
            onClick={() => setOpen(true)}
            className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce-slow"
          >
            <MdCalculate size={28} className="transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse font-bold">
              ₹
            </div>
            {/* Sparkle Effects */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </button>
        </div>
      </div>

      {/* Overlay & Popup */}
      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div 
            className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl overflow-hidden relative transform transition-all duration-500"
            style={{ animation: 'slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-20 h-20 border border-white rounded-full animate-pulse"></div>
                <div className="absolute top-5 right-5 w-12 h-12 border border-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border border-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90 z-20"
              >
                <MdClose size={20} />
              </button>
              <h2 className="text-xl font-bold mb-1 relative z-10">EMI Calculator</h2>
              <p className="text-green-100 text-xs relative z-10">Calculate your loan EMI instantly</p>
            </div>

            <div className="p-4">
              {/* Tabs */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
                {tabs.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setActive(t.key as any)}
                      className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-300 transform ${
                        active === t.key 
                          ? 'bg-white text-green-600 shadow-md scale-105' 
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                      }`}
                      style={{ 
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        ...(active === t.key ? { animation: `tabSelect 0.3s ease-out` } : {})
                      }}
                    >
                      <Icon size={14} />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium text-sm">Loan Amount</label>
                    <div className="flex items-center gap-2">
                      {editMode.amount ? (
                        <input
                          type="number"
                          value={tempInputs.amount}
                          onChange={e => setTempInputs(prev => ({ ...prev, amount: e.target.value }))}
                          onBlur={e => handleManualInput('amount', e.target.value)}
                          onKeyPress={e => e.key === 'Enter' && handleManualInput('amount', tempInputs.amount)}
                          className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded border-2 border-green-300 w-24 text-right focus:outline-none focus:border-green-500"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                          {formatCurrency(p.amount)}
                        </span>
                      )}
                      <button onClick={() => toggleEditMode('amount')} className="text-gray-400 hover:text-green-600 transition-colors">
                        <MdEdit size={14} />
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={10000000}
                    step={50000}
                    value={p.amount}
                    onChange={e => updateField('amount', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium text-sm">Interest Rate</label>
                    <div className="flex items-center gap-2">
                      {editMode.rate ? (
                        <input
                          type="number"
                          step="0.1"
                          value={tempInputs.rate}
                          onChange={e => setTempInputs(prev => ({ ...prev, rate: e.target.value }))}
                          onBlur={e => handleManualInput('rate', e.target.value)}
                          onKeyPress={e => e.key === 'Enter' && handleManualInput('rate', tempInputs.rate)}
                          className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded border-2 border-green-300 w-16 text-right focus:outline-none focus:border-green-500"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                          {p.rate}% p.a.
                        </span>
                      )}
                      <button onClick={() => toggleEditMode('rate')} className="text-gray-400 hover:text-green-600 transition-colors">
                        <MdEdit size={14} />
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    step={0.1}
                    value={p.rate}
                    onChange={e => updateField('rate', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium text-sm">Loan Tenure</label>
                    <div className="flex items-center gap-2">
                      {editMode.tenure ? (
                        <input
                          type="number"
                          value={tempInputs.tenure}
                          onChange={e => setTempInputs(prev => ({ ...prev, tenure: e.target.value }))}
                          onBlur={e => handleManualInput('tenure', e.target.value)}
                          onKeyPress={e => e.key === 'Enter' && handleManualInput('tenure', tempInputs.tenure)}
                          className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded border-2 border-green-300 w-12 text-right focus:outline-none focus:border-green-500"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                          {p.tenure} {p.tenure === 1 ? 'yr' : 'yrs'}
                        </span>
                      )}
                      <button onClick={() => toggleEditMode('tenure')} className="text-gray-400 hover:text-green-600 transition-colors">
                        <MdEdit size={14} />
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={p.tenure}
                    onChange={e => updateField('tenure', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="mt-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-3 space-y-2 relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="p-3 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
                    <div>
                      <span className="text-gray-600 text-xs">Monthly EMI</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xl font-bold text-gray-800">{formatCurrency(results.emi)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-white rounded-lg p-2.5 shadow-sm border-l-4 border-red-400">
                      <span className="text-gray-600 text-xs block">Principal</span>
                      <span className="text-sm font-bold text-gray-800 leading-tight">{formatCurrency(p.amount)}</span>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-sm border-l-4 border-yellow-400">
                      <span className="text-gray-600 text-xs block">Interest</span>
                      <span className="text-sm font-bold text-gray-800 leading-tight">{formatCurrency(results.interest)}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 text-white rounded-lg p-2.5 text-center relative overflow-hidden mt-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-gradient-x"></div>
                    <div className="relative z-10">
                      <span className="text-gray-300 text-xs block">Total Payable</span>
                      <span className="text-lg font-bold leading-tight">{formatCurrency(results.total)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button onClick={handleExploreMore} className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg hover:shadow-xl">
                  Explore More
                </button>
                <button onClick={handleApplyNow} className="flex-1 bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg hover:shadow-xl">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            transform: translateY(100px) scale(0.9);
            opacity: 0;
          }
          to { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes tabSelect {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .slider-green::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .slider-green::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.6);
        }
        
        .slider-green::-webkit-slider-track {
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(90deg, #10b981, #ddd);
        }
      `}</style>
    </>
  );
} 