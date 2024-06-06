"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./userAvatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
        {currUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currUser.connectionId)}
            src={currUser.info?.picture}
            name={currUser.info?.name}
            fallback={currUser.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="w-[100px] absolute h-12 top-2 right-2 rounded-md p-3 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-neutral-200" />
    </div>
  );
};
