import { Loader2 } from "lucide-react";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center ">
      <Image
        src={"/logo.svg"}
        height={60}
        width={60}
        alt="logo"
        className="animate-ping"
      />
    </div>
  );
};
