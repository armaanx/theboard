import { title } from "process";
import { create } from "zustand";

const defaultValues = { id: "", title: "" };

interface IRenameModal {
  isOpen: boolean;
  intitialValues: typeof defaultValues;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (id, title) =>
    set({
      isOpen: true,
      intitialValues: { id, title },
    }),
  onClose: () =>
    set({
      isOpen: false,
      intitialValues: defaultValues,
    }),
  intitialValues: defaultValues,
}));
