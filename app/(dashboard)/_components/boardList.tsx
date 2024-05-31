"use client";

import { EmptyBoard } from "./emptyBoards";
import { EmptyFav } from "./emptyFav";
import { EmptySearch } from "./emptySearch";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFav />;
  }
  if (!data?.length) {
    return <EmptyBoard />;
  }
  return <div>{JSON.stringify(query)}</div>;
};
