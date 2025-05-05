import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const FreeUserBanner = () => {
  return (
    <SignedOut>
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              You are currently viewing as a free user.
              <Link
                href="/sign-up"
                className="font-medium underline text-blue-700 hover:text-blue-600 ml-1"
              >
                Sign up
              </Link>
              <SignInButton mode="modal" />
              <SignUpButton mode="modal" /> to access all content and features.
            </p>
          </div>
        </div>
      </div>
    </SignedOut>
  );
};

export default FreeUserBanner;
