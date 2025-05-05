"use client";
import { useActionState } from "react";

import { deleteRole } from "@/actions/roles";

interface RemoveRoleButtonProps {
  hasRole: boolean;
  userId: string;
  disabled?: boolean;
}

const RemoveRoleButton: React.FC<RemoveRoleButtonProps> = ({
  hasRole,
  disabled,
  userId,
}) => {
  const [, action] = useActionState(deleteRole, {
    errors: {},
  });
  return (
    <form action={action}>
      <input type="hidden" name="id" value={userId} />
      <button
        className={`cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={disabled || !hasRole}
      >
        Remove Role
      </button>
    </form>
  );
};

export default RemoveRoleButton;
