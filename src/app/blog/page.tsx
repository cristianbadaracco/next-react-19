import Link from "next/link";
import { Suspense } from "react";

import Author from "./_components/author";
import UsersSection from "./_components/users-section";

import { fetchPosts } from "@/actions/posts";

import { Post } from "@/types";

const Blog = async ({
  params,
}: {
  params: Promise<{ slug: Array<string> }>;
}) => {
  const { slug = [] } = await params;
  const filteredPosts = await fetchPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Loading Users...</div>}>
          <UsersSection />
        </Suspense>
        <h1>BLOG PAGE - /blog/{slug.join("/")}</h1>
        {filteredPosts.map((post: Post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-2xl w-full"
          >
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              {post.body}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Post #{post.id}</span>
                <Suspense fallback={<div>Loading Author...</div>}>
                  <Author userId={post.userId} />
                </Suspense>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                <Link href={`/blog/${post.id}`}>Read more</Link>
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
