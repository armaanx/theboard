"use client";
import { useOrganization } from "@clerk/clerk-react";
import { EmptyOrg } from "./_components/emptyOrg";
import { BoardList } from "./_components/boardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className=" p-6 flex-1 h-[calc(100%-80px)]">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashboardPage;
