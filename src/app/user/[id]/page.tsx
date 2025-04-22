import { Suspense } from "react";
import { notFound } from "next/navigation";

import CommentsList from "./_components/comment-list";
import AlbumsList from "./_components/albums-list";

interface UserPageProps {
  params: {
    id: string;
  };
}

const getUser = async (id: number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return user.json();
};

const UserPage = async ({ params }: UserPageProps) => {
  const { id } = params;
  const user = await getUser(Number(id));

  if (!user.id) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{user.name}&apos;s Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Comments Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <Suspense fallback={<div>Loading comments...</div>}>
              <CommentsList id={Number(id)} />
            </Suspense>
          </div>
          {/* Albums Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Albums</h2>
            <Suspense fallback={<div>Loading albums...</div>}>
              <AlbumsList id={Number(id)} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
