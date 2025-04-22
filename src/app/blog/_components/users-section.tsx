import { notFound } from "next/navigation";

import { User } from "./author";
import Link from "next/link";

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersData.json();

  return users.filter((user: User) => user.id % 2 === 0);
};

const UsersSection = async () => {
  const users = await getUsers();

  if (!users) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <h2>USERS</h2>
      {users &&
        users.map((user: User) => (
          <div
            key={user.id}
            className="border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-2xl w-full"
          >
            <Link
              href={`/user/${user.id}`}
              className="text-xl font-bold mb-3 text-gray-800"
            >
              {user.name}
            </Link>
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              {user.username}
            </p>
          </div>
        ))}
    </div>
  );
};

export default UsersSection;
