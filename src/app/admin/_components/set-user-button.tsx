"use client";
import { useActionState } from "react";

import { setRole } from "@/actions/roles";

interface SetUserButtonProps {
  isUser: boolean;
  userId: string;
  disabled?: boolean;
}

const SetUserButton: React.FC<SetUserButtonProps> = ({
  isUser,
  userId,
  disabled,
}) => {
  const [, action] = useActionState(setRole, {
    errors: {},
  });

  return (
    <form action={action}>
      <input type="hidden" name="id" value={userId} />
      <input type="hidden" name="role" value="USER" />
      <button
        className={`cursor-pointer bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={disabled || isUser}
      >
        Make User
      </button>
    </form>
  );
};

export default SetUserButton;
