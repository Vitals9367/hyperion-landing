import { allPosts } from "@/../.contentlayer/generated";
import type { Post } from "@/../.contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Blog Posts",
  description: "Read our latest blog posts about technology and development.",
};

export default function PostsPage() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-black">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden py-16 lg:py-24">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
          </div>

          <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-sm">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-green-500"></span>
                Latest Articles
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Discover Our{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                    Insights
                  </span>
                  <span className="absolute right-0 -bottom-2 left-0 h-2 bg-gradient-to-r from-yellow-500/20 to-green-500/20 blur-xl"></span>
                </span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Explore our latest articles, guides, and insights about AI,
                automation, and business growth. Stay ahead with expert
                knowledge and practical solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="relative w-full overflow-hidden py-24 lg:py-32">
          <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: Post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900/80"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div className="text-sm text-zinc-300">
                      {post.formattedDate}
                    </div>
                    <h2 className="mt-2 line-clamp-2 text-xl font-semibold text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-300">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
