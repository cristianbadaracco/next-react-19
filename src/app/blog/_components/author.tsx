export interface User {
  id: number;
  name: string;
  username: string;
}

const Author = async ({ userId }: { userId: number }) => {
  // Add a delay to simulate a slow API response
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: User = await data.json();

  return (
    <div className="flex flex-col">
      <span>Author ID: {userId}</span>
      <span>Name: {author.name}</span>
      <span>Username: {author.username}</span>
    </div>
  );
};

export default Author;
