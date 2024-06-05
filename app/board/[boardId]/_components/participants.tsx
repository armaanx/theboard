import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      Participants
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="w-[100px] absolute h-12 top-2 right-2 rounded-md p-3 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-neutral-200" />
    </div>
  );
};
