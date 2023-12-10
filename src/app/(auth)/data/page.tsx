import { Suspense } from "react";
import { UserData } from "@components/userData";
import { FormSkeleton } from "@components/formSkeleton";

export interface DataPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function DataPage({ searchParams }: DataPageProps) {
  return (
    <Suspense fallback={<FormSkeleton />}>
      <UserData />
    </Suspense>
  );
}
