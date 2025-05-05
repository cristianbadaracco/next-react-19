import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import NavbarLinks from "./navbar-links";

const Navbar = async () => {
  return (
    <nav className="flex justify-between items-center w-full px-4 py-2">
      <NavbarLinks />
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
