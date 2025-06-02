import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navsidebar from "@/components/Navsidebar";

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <>
      <div className="md:grid md:grid-cols-[225px_1fr] gap-0">
        <div className="hidden md:block">
          <Navsidebar />
        </div>
        <div className="w-full pb-21 md:pb-0">
          <h4 className="px-4 text-2xl">...</h4>
          <main className="p-2">
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="group block border border-gray-700 rounded-lg p-4 hover:shadow-md transition bg-white dark:bg-zinc-900"
                  >
                    <h2 className="text-2xl font-semibold">
                      {post.meta.title}
                    </h2>
                    <p className="text-sm text-gray-500">{post.meta.date}</p>
                    <p className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out text-lg text-gray-800 dark:text-zinc-100 mt-2">
                      {post.meta.desc}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </main>
        </div>
        <div>
          <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl shadow-lg backdrop-blur-sm z-50">
            <div className="flex justify-around items-center py-0 px-2">
              <Link
                href="/"
                className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="text-xs font-medium">Blog</span>
              </Link>

              <Link
                href="/projects"
                className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span className="text-xs font-medium">Projects</span>
              </Link>

              <Link
                href="/about"
                className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs font-medium">About</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
