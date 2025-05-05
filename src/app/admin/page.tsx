import { clerkClient, auth } from "@clerk/nextjs/server";

import { ROLES } from "@/constants";

import SetAdminButton from "./_components/set-admin-button";
import SetUserButton from "./_components/set-user-button";
import RemoveRoleButton from "./_components/remove-role-button";

const Admin = async () => {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data ?? [];
  const { userId: currentUserId } = await auth();

  return (
    <div className="m-4">
      <h1>ADMIN PAGE</h1>
      <p>Page available only for admin in users</p>
      <div className="py-8">
        {users.map((user) => {
          const userRole = user.publicMetadata.role as string;
          const isAdmin = userRole === ROLES.ADMIN;
          const isUser = userRole === ROLES.USER;
          const isCurrent = user.id === currentUserId;

          return (
            <div key={user.id} className="flex justify-between gap-4 mb-2 ">
              <div>
                <span className="min-w-[150px]">{user.username}</span>
                {userRole && (
                  <span className="min-w-[150px]">{` - ${userRole?.toUpperCase()}`}</span>
                )}
                {isCurrent && (
                  <span className="min-w-[150px]"> (current user)</span>
                )}
              </div>
              <div className="flex gap-2">
                <SetAdminButton
                  isAdmin={isAdmin}
                  userId={user.id}
                  disabled={isCurrent}
                />
                <SetUserButton
                  isUser={isUser}
                  userId={user.id}
                  disabled={isCurrent}
                />
                <RemoveRoleButton
                  hasRole={!!userRole}
                  disabled={isCurrent}
                  userId={user.id}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
