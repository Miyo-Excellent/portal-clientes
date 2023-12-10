import { GrSecure } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { PageSkeleton } from "@components/pageSkeleton";
import { Suspense } from "react";

export interface ClaimStatusesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ClaimStatusesPage({
  searchParams,
}: ClaimStatusesPageProps) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <main className="p-8 lg:p-20 flex-1 flex flex-col items-start justify-start">
        <ol className="relative border-s-4 border-indigo-200 dark:border-indigo-200">
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-400 rounded-full -start-8 ring-4 ring-indigo-200 dark:ring-indigo-200 dark:bg-indigo-400">
              <GiCheckMark className="text-3xl text-indigo-50 dark:text-indigo-400" />
            </span>
            <h3 className="font-medium leading-tight">Pendiente de avalúo</h3>
            <p className="text-sm">
              Estamos esperando que el taller nos envíe el documento de avalúo.
              Esto está completado.
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-400 rounded-full -start-8 ring-4 ring-indigo-200 dark:ring-indigo-200 dark:bg-indigo-400">
              <GiCheckMark className="text-3xl text-indigo-50 dark:text-indigo-400" />
            </span>
            <h3 className="font-medium leading-tight">Entrega de requisitos</h3>
            <p className="text-sm">Entrega de requisitos</p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <div className="absolute w-[120%] h-1/6 bg-indigo-50 shadow-inner shadow-indigo-100 -left-12 -z-10 rounded-3xl" />
            <span className="absolute flex items-center justify-center w-16 h-16 rounded-full -start-8 bg-indigo-400 ring-4 ring-indigo-200 dark:ring-gray-200 dark:bg-indigo-200">
              <FaArrowRight className="text-3xl text-indigo-50 dark:text-indigo-50" />
            </span>
            <h3 className="font-medium leading-tight text-slate-700 dark:text-slate-700">
              Entrega de requisitos
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-700">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full -start-8 ring-4 ring-indigo-200 dark:ring-gray-200 dark:bg-indigo-50">
              <GrSecure className="text-3xl font-extrabold text-indigo-800 dark:text-slate-600" />
            </span>
            <h3 className="font-medium leading-tigh t">
              Entrega de requisitos
            </h3>
            <p className="text-sm ">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full -start-8 ring-4 ring-indigo-200 dark:ring-gray-200 dark:bg-indigo-50">
              <GrSecure className="text-3xl font-extrabold text-indigo-800 dark:text-slate-600" />
            </span>
            <h3 className="font-medium leading-tight">Entrega de requisitos</h3>
            <p className="text-sm">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full -start-8 ring-4 ring-indigo-200 dark:ring-gray-200 dark:bg-indigo-50">
              <GrSecure className="text-3xl font-extrabold text-indigo-800 dark:text-slate-600" />
            </span>
            <h3 className="font-medium leading-tight">Entrega de requisitos</h3>
            <p className="text-sm">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
        </ol>
      </main>
    </Suspense>
  );
}
