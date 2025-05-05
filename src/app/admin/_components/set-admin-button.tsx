"use client";
import { useActionState } from "react";

import { setRole } from "@/actions/roles";

interface SetAdminButtonProps {
  isAdmin: boolean;
  userId: string;
  disabled?: boolean;
}

const SetAdminButton: React.FC<SetAdminButtonProps> = ({
  userId,
  isAdmin,
  disabled,
}) => {
  const [, action] = useActionState(setRole, {
    errors: {},
  });

  return (
    <form action={action}>
      <input type="hidden" name="id" value={userId} />
      <input type="hidden" name="role" value="ADMIN" />
      <button
        className={`cursor-pointer bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={disabled || isAdmin}
      >
        Make Admin
      </button>
    </form>
  );
};

export default SetAdminButton;
