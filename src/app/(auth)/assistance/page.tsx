import { Suspense } from "react";
import { PageSkeleton } from "@components/pageSkeleton";

export interface AssistancePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function AssistancePage({ searchParams }: AssistancePageProps) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <main className="p-8 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-slate-700 dark:text-slate-50 text-3xl">
          Asistencia
        </h1>
      </main>
    </Suspense>
  );
}
