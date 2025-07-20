import Link from "next/link";
import data from "../../../data.json";

interface Params {
  service: string;
  category: string;
}

const services: any = (data as any).services;

export async function generateStaticParams() {
  // Generate for all services and their categories
  const params: { service: string; category: string }[] = [];
  Object.keys(services).forEach(key => {
    const categories = services[key]?.categories || [];
    categories.forEach((c: any) => params.push({ service: key, category: c.slug }));
  });
  return params;
}

export default function ServiceCategoryPage({ params }: { params: Params }) {
  const { service, category } = params;
  const serviceData = services[service];
  if (!serviceData) {
    return <div className="max-w-4xl mx-auto py-20 text-center">Service not found.</div>;
  }
  const categories = serviceData.categories || [];
  const activeCategory = categories.find((c: any) => c.slug === category) || categories[0];

  if (!activeCategory) {
    return <div className="max-w-4xl mx-auto py-20 text-center">Category not found.</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Category pills removed – handled by global CategoryBar */}

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        {activeCategory.name}
        <span className="block w-24 h-1 bg-[#64b35d] mx-auto mt-2"></span>
      </h1>

      {/* Items grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(activeCategory.loans || activeCategory.items || []).map((item: any) => (
          <div
            key={item.slug}
            className="relative flex flex-col bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-[3px_3px_0_0_#9fd9ac,6px_6px_0_0_#64b35d] hover:border-[#64b35d] hover:-translate-y-1"
          >
            <div className="flex items-start gap-3 mb-4">
              <h3 className="text-lg font-semibold flex-1">{item.title}</h3>
              {item.icon && (
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
              )}
            </div>
            <p className="text-sm text-gray-600 flex-1 mb-8">{item.description}</p>
            <Link
              href={`/${service}/${category}/${item.slug}`}
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