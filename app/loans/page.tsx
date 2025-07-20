import { redirect } from "next/navigation";
import data from "../../data.json";

export default function LoansRootPage() {
  const categories = (data as any).services?.loans?.categories || [];
  const firstSlug = categories.length > 0 ? categories[0].slug : "";

  if (!firstSlug) {
    // If no categories found, redirect to home as a fallback
    redirect("/");
  }

  redirect(`/loans/${firstSlug}`);
} 