import ServicesWeOffer from "../components/ServicesWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
      className="w-full min-h-screen bg-[#000116] flex flex-col items-center justify-center text-center"
    >
      <div>
        <h1 className="font-roboto-slab text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow">
          Your One-Stop Financial Solutions Partner
        </h1>
        <p className="font-roboto-slab text-gray-200 text-lg sm:text-xl md:text-2xl mb-4">
          Trusted Advice. Total Clarity.
        </p>
        <img
          src="/assets/heroHands.png"
          alt="Handshake"
          className="mx-auto w-44 sm:w-56 md:w-84 mb-2 drop-shadow-2xl"
          draggable={false}
        />
        <Link href='#footer'>
          <button
          className="font-roboto bg-[#233827] text-white px-8 py-3 rounded border border-gray-200 hover:bg-[#274e32] transition-all text-lg font-medium shadow"
        >
          Ask Experts
        </button>
        </Link>
      </div>
    </section>
    <ServicesWeOffer/>
    <WhyChooseUs/>
    </>
    
  );
}
