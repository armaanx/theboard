import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image height={200} width={200} src={"/element.svg"} alt="empty" />
      <h2 className="text-2xl mt-6 font-semibold">
        Welcome to <span className="font-extrabold text-3xl">theBoard</span>
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[350px] p-0 bg-black bg-opacity-0 border-none bg-transparent">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
