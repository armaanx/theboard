"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const NewBoardButton = ({
  orgId,
  disabled,
}: {
  orgId: string;
  disabled?: boolean;
}) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
      })
      .catch(() => {
        toast.error("Failed to create a board.");
      });
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-amber-100 rounded-lg hover:bg-amber-400 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-amber-400 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-zinc-950" />
      <p className="mt-1 text-sm text-zinc-950 font-semibold">New Board</p>
    </button>
  );
};
