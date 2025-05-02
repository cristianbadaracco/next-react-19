import { Post } from "@/types";

export const fetchPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return posts.filter((post: Post) => post.id % 20 === 0);
};

export const fetchPost = async (id: number) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await data.json();
};
