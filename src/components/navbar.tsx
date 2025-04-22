import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-4">
      <Link href="/" className="px-3 py-2 border-r">
        Home
      </Link>
      <Link href="/folder1" className="px-3 py-2 border-r">
        Folder 1
      </Link>
      <Link href="/folder1/folder2" className="px-3 py-2 border-r">
        Folder 2
      </Link>
      <Link href="/blog" className="px-3 py-2 border-r">
        Blog
      </Link>
    </nav>
  );
};

export default Navbar;
