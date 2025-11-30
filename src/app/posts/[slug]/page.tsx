import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ""),
  }));
  return slugs;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-2 px-2">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {/* Left column: 20% */}
        <div className="hidden lg:block lg:col-span-1">
          <aside className="text-sm text-zinc-500">
            {/* Left content placeholder */}
            <p className="text-gray-500"></p>
          </aside>
        </div>

        {/* Center column: 60% */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 border min-h-screen border-gray-300 rounded-lg p-6 bg-white dark:bg-zinc-900 shadow-sm prose dark:prose-invert max-w-none">
          <article>
            <h1 className="text-3xl font-bold mb-4">{post.meta.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{post.meta.date}</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-6">
              {post.meta.quote}
            </blockquote>
            <MDXRemote 
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkMath],
                  rehypePlugins: [rehypeKatex],
                }
              }}
            />
          </article>
        </div>
        {/* Right column: 20% className="col-span-1 bg-gray-50 dark:bg-zinc-900 p-4 rounded-bl-2xl rounded-tl-2xl "*/}
        <div className="hidden md:block col-span-1">
          <aside className="bg-gray-50 dark:bg-zinc-900 p-4 min-h-screen rounded-bl-2xl rounded-tl-2xl ">
            {/* ToC placeholder             <SidebarProvider>
              <Sidebar variant="floating" className="md:w-[225px] lg:w-[335px]" side="right">

              </Sidebar>
            </SidebarProvider>
*/}
          </aside>
        </div>
      </div>
    </main>
  );
}
