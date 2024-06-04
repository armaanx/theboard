import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useRenameModal } from "@/store/use-rename-modal";
import { FormEventHandler, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { toast } from "sonner";

export const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.update);
  const { intitialValues, isOpen, onClose, onOpen } = useRenameModal();
  const [title, setTitle] = useState(intitialValues.title);
  useEffect(() => {
    setTitle(intitialValues.title);
  }, [intitialValues.title]);
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      id: intitialValues.id,
      title,
    })
      .then(() => {
        toast.success("Updated");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to update");
      });
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this boards</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Enter New Title"
            disabled={pending}
            maxLength={60}
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={"outline"}>
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
