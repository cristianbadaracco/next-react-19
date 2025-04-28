interface PostProps {
  slug: string;
}

const Post = async ({ params }: { params: PostProps }) => {
  const { slug } = params;
  const postId = slug;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await data.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <article className="prose prose-lg dark:prose-invert">
          <div className="prose dark:prose-invert">
            {post && (
              <>
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="mb-6">{post.body}</p>
                <div className="border-t pt-4 mt-8">
                  <p className="text-sm text-gray-500">Post ID: {post.id}</p>
                  {post.userId && (
                    <p className="text-sm text-gray-500">
                      Author ID: {post.userId}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;
