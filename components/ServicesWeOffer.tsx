// components/ServicesWeOffer.tsx
import { FaHandHoldingUsd, FaCreditCard, FaFileInvoice, FaPaypal } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Loans",
    desc: "Know your options — not all loans are created equal.",
    icon: "/assets/loan.png",
  },
  {
    title: "Cards",
    desc: "Swipe smarter — compare, choose, and control your finances.",
    icon: "/assets/cards.png",
  },
  {
    title: "Insurance",
    desc: "So many insurances, only one that fits you — we help you find it.",
    icon: "/assets/insurance.png",
  },
  {
    title: "Payments",
    desc: "Your payments deserve more than just a route — they deserve the right one.",
    icon: "/assets/payment.png",
  },
];

export default function ServicesWeOffer() {
  return (
    <section className="py-12 max-w-11/12 m-auto">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">Services we offer</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {services.map(service => (
          <div
            key={service.title}
            className="
              relative flex flex-col h-full bg-white rounded-xl border border-gray-200
              min-h-60 max-h-60 justify-between
              p-6 shadow-sm min-w-[250px] max-w-xs mx-auto transition
              hover:shadow-[3px_3px_0_0_#9fd9ac,6px_6px_0_0_#64b35d]
              hover:border-[#64b35d] hover:-translate-y-1
              group
            "
            style={{ boxShadow: "0 2px 8px 0 rgb(0 0 0 / 0.03)" }}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xl font-bold text-gray-900">{service.title}</span>
              {typeof service.icon === 'string' ? (
                <Image src={service.icon} alt={service.title} width={56} height={56} />
              ) : (
                service.icon
              )}
            </div>
            <p className="text-gray-600 text-sm mb-22">{service.desc}</p>
            <Link
              href="#"
              className="
                absolute right-6 bottom-6
                text-[#64b35d] border border-[#64b35d] bg-white rounded-md px-5 py-2 font-medium
                shadow-[2px_2px_0_0_#9fd9ac]
                hover:bg-[#64b35d] hover:text-white hover:shadow-[4px_4px_0_0_#9fd9ac]
                transition-all
              "
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
