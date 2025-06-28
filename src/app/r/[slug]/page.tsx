import { redirect } from "next/navigation";
import { shortLinks } from "@/types/shortlinks";

export default function ShortLinkPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const url = shortLinks[slug];

  if (url) {
    redirect(url);
  }

  redirect("/");
}
