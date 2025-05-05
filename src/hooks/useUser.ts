import { useUser as useClerkUser } from "@clerk/nextjs";

const useUser = () => {
  const { user, isSignedIn } = useClerkUser();

  return {
    isLoggedIn: isSignedIn,
    user,
  };
};

export default useUser;
