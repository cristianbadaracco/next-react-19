import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>NAV - /folder1/folder2</h1>
      <nav className="flex flex-row gap-[32px]">
        <Link href="/">Home</Link>
        <Link href="/folder1">Folder 1</Link>
        <Link href="/folder1/folder2">Folder 2</Link>
      </nav>
    </div>
  );
};

export default Nav;
