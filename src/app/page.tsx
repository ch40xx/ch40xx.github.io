import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">...</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="group block border border-gray-300 rounded-lg p-4 hover:shadow-md transition bg-white dark:bg-zinc-900"
            >
              <h2 className="text-2xl font-semibold">{post.meta.title}</h2>
              <p className="text-sm text-gray-500">{post.meta.date}</p>
              <p className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out text-lg text-gray-800 dark:text-zinc-100 mt-2">
                {post.meta.desc}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
