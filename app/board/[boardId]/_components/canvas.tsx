"use client";

import { useCallback, useState } from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
  useSelf,
} from "@/liveblocks.config";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { CursorsPresence } from "./CursorsPresence";
import { PointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  const info = useSelf((me) => me.info);
  const onWheel = useCallback((e: React.WheelEvent) => {
    console.log({ x: e.deltaX, y: e.deltaY });
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);
  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const current = PointerEventToCanvasPoint(e, camera);
      console.log("current", current);
      setMyPresence({ cursor: current });
    },
    []
  );

  return (
    <main className="h-full w-full relative bg-neutral-200">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        className="h-[100vh] w-[100vw]"
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};
