import { Skeleton } from "@/components/ui/skeleton";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -transalte-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Ellipse</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className=" w-[50px] absolute top-[50%] -transalte-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="h-[120px] rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <Skeleton className="h-full w-full bg-neutral-200" />
      </div>
      <div className="h-[90px] rounded-md p-1.5 flex flex-col items-center shadow-md"></div>
    </div>
  );
};
