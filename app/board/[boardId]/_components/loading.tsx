import { Loader } from "lucide-react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-200 flex items-center justify-center">
      <Loader className="h-6 w-6 animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};
