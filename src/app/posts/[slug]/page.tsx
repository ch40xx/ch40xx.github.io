import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getPostSlugs().map((slug) => ({
    slug: slug.replace(".md", ""),
  }));
  return slugs;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-4">
      <div className="grid grid-cols-5 gap-6">
        {/* Left column: 20% */}
        <aside className="hidden md:block col-span-1 text-sm text-zinc-500">
          {/* Left content placeholder */}
          <p className="text-gray-500"></p>
        </aside>

        {/* Center column: 60% */}
        <article className="col-span-3 border min-h-screen border-gray-300 rounded-lg p-6 bg-white dark:bg-zinc-900 shadow-sm prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4">{post.meta.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{post.meta.date}</p>
          <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Right column: 20% */}
        <aside className="col-span-1 bg-gray-50 dark:bg-zinc-900 p-4 rounded-bl-2xl rounded-tl-2xl">
          {/* ToC placeholder */}
          <p className="text-gray-500"></p>
        </aside>
      </div>
    </main>
  );
}
