import { PageSkeleton } from "@components/pageSkeleton";
import { Suspense } from "react";

export interface OtherClaimsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function OtherClaimsPage({
  searchParams,
}: OtherClaimsPageProps) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <main className="p-8 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-slate-700 dark:text-slate-50 text-3xl">
          Other Claims
        </h1>
      </main>
    </Suspense>
  );
}
