interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getComments = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return comments.json();
};

const CommentsList = async ({ id }: { id: number }) => {
  const comments = await getComments(id);

  return (
    <div className="space-y-4">
      {comments.map((comment: Comment) => (
        <div key={comment.id} className="border-b pb-4 last:border-b-0">
          <h3 className="font-medium text-lg mb-2">{comment.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{comment.body}</p>
          <p className="text-sm text-gray-500 mt-2">{comment.email}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
