"use client";

interface CursorProps {
  connectionId: number;
}

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user?.presence.cursor);
  const name = info?.name || "Team Member";
  if (!cursor) {
    return null;
  }
  const { x, y } = cursor;
  return (
    <foreignObject
      height={50}
      width={50}
      className="relative drop-shadow-md"
      style={{
        transform: `translateX(${x}px) transalteY(${y}px)`,
      }}
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";
