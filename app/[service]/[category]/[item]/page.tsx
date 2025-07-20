import data from "../../../../data.json";
import Link from "next/link";

interface Params {
  service: string;
  category: string;
  item: string;
}

const services: any = (data as any).services;

export async function generateStaticParams() {
  const params: Params[] = [];
  Object.keys(services).forEach(service => {
    const categories = services[service]?.categories || [];
    categories.forEach((cat: any) => {
      const items = cat.loans || cat.items || [];
      items.forEach((it: any) => {
        params.push({ service, category: cat.slug, item: it.slug });
      });
    });
  });
  return params;
}

export default function ItemDetailPage({ params }: { params: Params }) {
  const { service, category, item } = params;
  const serviceData = services[service];
  const categoryData = serviceData?.categories?.find((c: any) => c.slug === category);
  const itemData = (categoryData?.loans || categoryData?.items || []).find((i: any) => i.slug === item);

  if (!itemData) {
    return <div className="max-w-4xl mx-auto py-20 text-center">Item not found.</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Back link */}
      <Link href={`/${service}/${category}`} className="text-sm text-[#64b35d] hover:underline mb-6 inline-block">
        ← Back to {categoryData?.name}
      </Link>

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-4">
        {itemData.title}
        <span className="block w-24 h-1 bg-[#64b35d] mx-auto mt-2"></span>
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        {itemData.description}
      </p>

      {/* Detail sections */}
      {itemData.sections?.length ? (
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 mb-12">
          {itemData.sections.map((sec: any, idx: number) => (
            <div key={idx} className="bg-white border border-gray-300 rounded-xl p-6 transition hover:shadow-[3px_3px_0_0_#9fd9ac,6px_6px_0_0_#64b35d] hover:border-[#64b35d] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                {sec.icon && <img src={sec.icon} alt={sec.title} className="w-8 h-8" />}
                <h3 className="text-lg font-semibold">{sec.title}</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                {sec.points.map((pt: string, i: number) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        itemData.features?.length && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {itemData.features.map((feat: string, idx: number) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 transition hover:shadow-[3px_3px_0_0_#9fd9ac,6px_6px_0_0_#64b35d] hover:border-[#64b35d] hover:-translate-y-1">
                <p className="text-gray-700 text-sm leading-relaxed">• {feat}</p>
              </div>
            ))}
          </div>
        )
      )}

      {/* Metadata section */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        {itemData.minAmount && (
          <div className="flex-1 text-center">
            <p className="text-sm text-gray-500">MIN AMOUNT</p>
            <p className="text-xl font-semibold text-gray-800">₹ {itemData.minAmount.toLocaleString()}</p>
          </div>
        )}
        {itemData.maxAmount && (
          <div className="flex-1 text-center">
            <p className="text-sm text-gray-500">MAX AMOUNT</p>
            <p className="text-xl font-semibold text-gray-800">₹ {itemData.maxAmount.toLocaleString()}</p>
          </div>
        )}
        {itemData.interestRate && (
          <div className="flex-1 text-center">
            <p className="text-sm text-gray-500">INTEREST RATE</p>
            <p className="text-xl font-semibold text-gray-800">{itemData.interestRate}</p>
          </div>
        )}
        {itemData.tenure && (
          <div className="flex-1 text-center">
            <p className="text-sm text-gray-500">TENURE</p>
            <p className="text-xl font-semibold text-gray-800">{itemData.tenure}</p>
          </div>
        )}
      </div>

      {/* Apply button */}
      <div className="text-center">
        <button className="bg-[#64b35d] hover:bg-[#4f9b4d] text-white px-8 py-3 rounded-md font-medium shadow">
          Apply Now
        </button>
      </div>
    </main>
  );
} 