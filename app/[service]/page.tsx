import { redirect } from "next/navigation";
import data from "../../data.json";

interface Params {
  service: string;
}

export default async function ServiceRootPage({ params }: { params: Params }) {
  const { service } = await params;
  const categories = (data as any).services?.[service]?.categories || [];
  const firstSlug = categories.length > 0 ? categories[0].slug : "";

  if (!firstSlug) {
    // No categories or invalid service
    redirect("/");
  }

  redirect(`/${service}/${firstSlug}`);
} 