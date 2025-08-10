import { FaShieldAlt, FaUserTie, FaFingerprint } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-2 md:px-6">
      <h2 className="text-[28px] md:text-3xl font-roboto-slab text-center font-bold mb-2">
        Why Choose Us
      </h2>
      <h3 className="text-xl md:text-2xl font-roboto-slab text-center font-bold mb-2">
        Your Financial Journey, Simplified
      </h3>
      <p className="text-center text-base md:text-lg text-gray-700 font-roboto mb-10">
        At Pay FintechBazaar, we simplify financial access for individuals, professionals, and businesses across India.
      </p>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
        {/* Card 1 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-none p-6 flex flex-col items-start min-w-[260px] max-w-md mx-auto md:mx-0">
          <div className="text-green-500 text-2xl mb-4">
            <FaShieldAlt />
          </div>
          <h4 className="font-bold text-base md:text-lg text-gray-800 font-roboto mb-2">
            Full financial suite under one platform
          </h4>
          <p className="text-gray-600 text-sm md:text-base font-roboto">
            We proudly operate on a reseller model with leading Loan DSAs, Credit Card DSAs, Insurance DSAs, and Payment Gateway providers, offering you a wide range of trusted financial products tailored to your unique needs.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-none p-6 flex flex-col items-start min-w-[260px] max-w-md mx-auto md:mx-0">
          <div className="text-green-500 text-2xl mb-4">
            <FaUserTie />
          </div>
          <h4 className="font-bold text-base md:text-lg text-gray-800 font-roboto mb-2">
            Trusted partnerships with top banks, NBFCs, insurers &amp; payment providers
          </h4>
          <p className="text-gray-600 text-sm md:text-base font-roboto">
            Personalized advisory for salaried, self-employed &amp; businesses
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-none p-6 flex flex-col items-start min-w-[260px] max-w-md mx-auto md:mx-0">
          <div className="text-green-500 text-2xl mb-4">
            <FaFingerprint />
          </div>
          <h4 className="font-bold text-base md:text-lg text-gray-800 font-roboto mb-2">
            100% digital onboarding with transparent processes
          </h4>
          <p className="text-gray-600 text-sm md:text-base font-roboto">
            Whether you&apos;re planning your next big move, securing your family&apos;s future, or growing your business &mdash; LoanSure CardsPe OPC Pvt Ltd is here to help you move forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
