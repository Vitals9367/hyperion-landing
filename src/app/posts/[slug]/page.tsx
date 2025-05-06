import { notFound } from "next/navigation";
import { allPosts } from "@/../.contentlayer/generated";
import type { Post } from "@/../.contentlayer/generated";
import { MDXContent } from "@/components/mdx-content";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post: Post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-black">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="relative aspect-[21/12] w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/posts"
                className="group mb-6 inline-flex items-center text-sm text-zinc-300 transition-colors hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Posts
              </Link>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative w-full overflow-hidden py-16 pb-48">
          <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <article className="prose prose-invert prose-lg max-w-none [&_a]:text-yellow-500 [&_a]:no-underline [&_a:hover]:text-yellow-400 [&_blockquote]:mb-6 [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-800 [&_blockquote]:pl-4 [&_blockquote]:text-zinc-300 [&_blockquote]:italic [&_code]:rounded-md [&_code]:bg-zinc-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-yellow-500 [&_em]:text-zinc-300 [&_h1]:mb-8 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-white [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-white [&_h4]:mt-6 [&_h4]:mb-4 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-white [&_hr]:my-8 [&_hr]:border-zinc-800 [&_img]:mb-8 [&_img]:rounded-xl [&_img]:shadow-2xl [&_li]:mb-2 [&_li]:text-zinc-300 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-zinc-300 [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-zinc-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:whitespace-pre [&_pre]:text-zinc-300 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit [&_strong]:text-white [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6">
                <MDXContent code={post.body.code} />
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
