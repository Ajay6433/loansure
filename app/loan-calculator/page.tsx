'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';


function formatCurrency(value: number) {
  return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
}

export default function LoanCalculatorPage() {
  const [amount, setAmount] = useState(500000); // ₹5,00,000
  const [rate, setRate] = useState(10); // annual %
  const [years, setYears] = useState(5);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const principal = amount;
    const monthlyRate = rate / 12 / 100;
    const n = years * 12;
    const emiVal = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalPay = emiVal * n;
    const interest = totalPay - principal;
    setEmi(emiVal);
    setTotalPayment(totalPay);
    setTotalInterest(interest);
  }, [amount, rate, years]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Loan EMI Calculator</h1>
          <p className="mt-4 text-lg text-gray-600">Adjust the sliders to estimate your monthly installment.</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Inputs */}
        <div className="space-y-8">
          {/* Amount */}
          <div>
            <label className="block font-medium mb-2">Loan Amount: {formatCurrency(amount)}</label>
            <input
              type="range"
              min={50000}
              max={5000000}
              step={50000}
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>

          {/* Rate */}
          <div>
            <label className="block font-medium mb-2">Interest Rate: {rate}% p.a.</label>
            <input
              type="range"
              min={5}
              max={25}
              step={0.1}
              value={rate}
              onChange={e => setRate(Number(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>

          {/* Tenure */}
          <div>
            <label className="block font-medium mb-2">Tenure: {years} {years === 1 ? 'year' : 'years'}</label>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <ResultCard label="Monthly EMI" value={formatCurrency(emi)} />
          <ResultCard label="Total Interest" value={formatCurrency(totalInterest)} />
          <ResultCard label="Total Payment" value={formatCurrency(totalPayment)} />
        </div>
      </section>
    </>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <p className="text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-gray-800 animate-pulse">{value}</p>
    </div>
  );
} 