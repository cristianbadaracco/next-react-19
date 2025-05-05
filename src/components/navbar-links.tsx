"use client";

import useUser from "@/hooks/useUser";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const NavbarLinks = () => {
  const { isLoggedIn } = useUser();
  const { sessionClaims } = useAuth();

  const isAdmin = sessionClaims?.metadata?.role === "admin";

  return (
    <div className="flex gap-4">
      <Link
        href="/"
        className="px-3 py-2 hover:text-blue-600 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/folder1"
        className="px-3 py-2 hover:text-blue-600 transition-colors"
      >
        Folder 1
      </Link>
      <Link
        href="/folder1/folder2"
        className="px-3 py-2 hover:text-blue-600 transition-colors"
      >
        Folder 2
      </Link>
      <Link
        href="/blog"
        className="px-3 py-2 hover:text-blue-600 transition-colors"
      >
        Blog
      </Link>
      {isLoggedIn && (
        <Link
          href="/products-db"
          className="px-3 py-2 hover:text-blue-600 transition-colors"
        >
          Products
        </Link>
      )}
      {isAdmin && (
        <Link
          href="/admin"
          className="px-3 py-2 hover:text-blue-600 transition-colors"
        >
          Admin
        </Link>
      )}
    </div>
  );
};

export default NavbarLinks;
