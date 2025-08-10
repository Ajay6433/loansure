import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pay FintechBazaar',
  description: 'Privacy Policy for Pay FintechBazaar',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">At Pay FintechBazaar, we value your privacy. This policy explains how we collect, use, and safeguard your information.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-700">

      {/* 1. Who We Are */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Who We Are</h2>
      <p className="mb-6">We are a financial services reseller providing access to third-party financial products (loans, insurance, credit cards, and digital payments). We do not issue products directly, but connect you to trusted providers.</p>

      {/* 2. Information We Collect */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li><strong>Personal Data:</strong> Name, contact, date of birth, address, gender</li>
        <li><strong>KYC Details:</strong> PAN, Aadhaar, income/business proof</li>
        <li><strong>Technical Info:</strong> IP address, browser details, cookies, device information</li>
        <li><strong>Communication:</strong> Emails, chats, calls</li>
      </ul>

      {/* 3. Use of Your Data */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Use of Your Data</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Assess loan, insurance, and card eligibility</li>
        <li>Forward requests to Direct Selling Agents (DSAs) or fintech providers</li>
        <li>Offer personalized recommendations</li>
        <li>Respond to inquiries or support requests</li>
        <li>Fulfill legal and regulatory obligations</li>
      </ul>
      <p className="mb-6">We do <span className="font-semibold">not</span> sell your personal information.</p>

      {/* 4. Data Sharing */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Data Sharing</h2>
      <p className="mb-4">Your data may be shared only with:</p>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Registered DSAs, NBFCs, banks, and insurers</li>
        <li>Payment gateway providers (partners follow their own privacy policies)</li>
      </ul>

      {/* 5. Data Security */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Data Security</h2>
      <p className="mb-6">We use encryption, secure servers, and restricted access protocols. However, no online system is 100% secure.</p>

      {/* 6. Data Retention */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Data Retention</h2>
      <p className="mb-4">Data is retained only for:</p>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Service delivery</li>
        <li>Legal & regulatory compliance</li>
        <li>Dispute resolution</li>
      </ul>
      <p className="mb-6">You can request data deletion anytime.</p>

      {/* 7. Your Rights */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Your Rights</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Access your data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent</li>
        <li>Know how your data is used</li>
      </ul>
      <p className="mb-6">📧 Write to us at: <a href="mailto:admin@payfintechbazaar.com" className="text-green-600 hover:underline">admin@payfintechbazaar.com</a></p>

      {/* 8. Third-Party Links */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Third-Party Links</h2>
      <p className="mb-6">We are not responsible for external websites linked from our platform.</p>

      {/* 9. Children’s Privacy */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">9. Children’s Privacy</h2>
      <p className="mb-6">Our services are not intended for users under 18.</p>

      {/* 10. Policy Updates */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">10. Policy Updates</h2>
      <p className="mb-6">We may update this policy periodically. The latest version will be available on the website.</p>
      </section>
    </>
  );
} 