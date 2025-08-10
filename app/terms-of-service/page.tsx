import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LoanSure CardsPe',
  description: 'Terms and Conditions for use of LoanSure CardsPe platform',
};

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="mt-4 text-lg text-gray-600">These Terms govern your use of our platform. By using our services, you agree to these Terms.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
        {/* 1. About Us */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">1. About Us</h2>
        <p className="mb-6">Pay FintechBazaar is a reseller platform, not a direct issuer of loans, insurance, cards, or payment solutions.</p>

        {/* 2. Our Services */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Our Services</h2>
        <p className="mb-4">We offer:</p>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>Product advisory & comparisons</li>
          <li>Application support</li>
          <li>Connection to relevant DSAs/providers</li>
          <li>Digital access to quotes, forms, and assistance</li>
        </ul>
        <p className="mb-6">All decisions, approvals, and disbursals are managed by the respective provider.</p>

        {/* 3. User Responsibilities */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">3. User Responsibilities</h2>
        <p className="mb-4">You agree to:</p>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>Provide accurate information</li>
          <li>Not impersonate others</li>
          <li>Use our services lawfully</li>
          <li>Cooperate with documentation (KYC, etc.)</li>
        </ul>

        {/* 4. Third-Party Role */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Third-Party Role</h2>
        <p className="mb-6">Pay FintechBazaar is not responsible for approval/rejection decisions, claims or service delays, or terms or policies of third-party providers.</p>

        {/* 5. No Guarantees */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">5. No Guarantees</h2>
        <p className="mb-6">We do not guarantee approval or eligibility, specific rates, features, or benefits.</p>

        {/* 6. Advisory Limitations */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Advisory Limitations</h2>
        <p className="mb-6">Recommendations offered are non-binding. You must make decisions based on personal judgment.</p>

        {/* 7. Liability Limitations */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Liability Limitations</h2>
        <p className="mb-6">We are not liable for losses due to third-party decisions, data misuse beyond our control, or errors caused by false user information.</p>

        {/* 8. Service Changes */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Service Changes</h2>
        <p className="mb-6">We may update, modify, or suspend our services at any time.</p>

        {/* 9. Termination */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">9. Termination</h2>
        <p className="mb-4">We may suspend access for:</p>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>Breach of terms</li>
          <li>Fraudulent use</li>
          <li>Legal obligations</li>
        </ul>

        {/* 10. Jurisdiction */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">10. Jurisdiction</h2>
        <p className="mb-6">All disputes are governed under Indian laws. Jurisdiction: Gurgaon, Haryana.</p>
      </section>
    </>
  );
} 