import Link from "next/link";
// Using native img to avoid domain config for remote icons
import data from "../../../data.json";

interface Params {
  category: string;
}

const loanService = (data as any).services.loans;
const categories = loanService.categories as any[];

export async function generateStaticParams() {
  return categories.map(c => ({ category: c.slug }));
}

export default function LoanCategoryPage({ params }: { params: Params }) {
  const slug = params.category;
  const activeCategory = categories.find(c => c.slug === slug) || categories[0];

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Category pills removed – now globally rendered via CategoryBar */}

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        {activeCategory.name}
        <span className="block w-24 h-1 bg-[#64b35d] mx-auto mt-2"></span>
      </h1>

      {/* Loan cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activeCategory.loans.map((loan: any) => (
          <div
            key={loan.slug}
            className="relative flex flex-col bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-[3px_3px_0_0_#9fd9ac,6px_6px_0_0_#64b35d] hover:border-[#64b35d] hover:-translate-y-1"
          >
            <div className="flex items-start gap-3 mb-4">
              <h3 className="text-lg font-semibold flex-1">{loan.title}</h3>
              <img src={loan.icon} alt={loan.title} className="w-10 h-10 object-contain" />
            </div>
            <p className="text-sm text-gray-600 flex-1 mb-8">{loan.description}</p>
            <Link
              href={`#/loans/${slug}/${loan.slug}`}
              className="absolute right-6 bottom-6 text-[#64b35d] font-medium hover:underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
} 