import { redirect } from "next/navigation";
import { shortLinks } from "@/types/shortlinks";

export default async function ShortLinkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const url = shortLinks[slug];

  if (url) {
    redirect(url);
  }

  redirect("/");
}
