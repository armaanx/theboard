import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loader2 } from "lucide-react";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const { boardId } = params;
  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
