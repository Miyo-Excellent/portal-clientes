import { GrSecure } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
//import {GiCheckMark} from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { PageSkeleton } from "@components/pageSkeleton";
import { Suspense } from "react";
import { BsRobot } from "react-icons/bs";

export interface ClaimStatusesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ClaimStatusesPage({
  searchParams,
}: ClaimStatusesPageProps) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <main className="relative p-8 lg:p-20 flex-1 flex flex-col items-center justify-center">
        <span className="w-16 h-16 absolute flex flex-col justify-center items-center right-12 top-12 text-indigo-400 hover:text-indigo-600 transition-all ease-in-out duration-150 cursor-pointer text-5xl hover:text-6xl">
          <BsRobot className="" />
        </span>

        <ol className="relative border-s-4 border-indigo-200 dark:border-indigo-200">
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-400 rounded-full -start-8 ring-4 ring-[#303369] dark:ring-indigo-200 dark:bg-indigo-400">
              <AiOutlineCheck className="text-4xl text-indigo-50 dark:text-indigo-400" />
            </span>
            <h3 className="font-medium leading-tight">Pendiente de avalúo</h3>
            <p className="text-sm">
              Estamos esperando que el taller nos envíe el documento de avalúo.
              Esto está completado.
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-400 rounded-full  -start-8 ring-4 ring-[#303369] dark:ring-indigo-200 dark:bg-indigo-400">
              <AiOutlineCheck className="text-4xl text-indigo-50 dark:text-indigo-400" />
            </span>
            <h3 className="font-medium leading-tight">Entrega de requisitos</h3>
            <p className="text-sm">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <div className="absolute w-[120%] h-1/6 bg-[#f3f6f4] shadow-inner shadow-[#f3f6f4] -left-12 -z-10 rounded-3xl" />
            <span className="absolute flex items-center justify-center w-16 h-16 rounded-full -start-8 bg-indigo-50 ring-4 ring-[#303369] dark:ring-gray-200 dark:bg-indigo-200">
              <FaArrowRight className="text-3xl text-indigo-400 dark:text-indigo-70" />
            </span>
            <h3 className="font-medium leading-tight text-slate-700 dark:text-slate-700">
              Entrega de requisitos
            </h3>
            <p className="text-sm ">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full -start-8 ring-4 ring-[#303369] dark:ring-gray-200 dark:bg-indigo-50">
              <GrSecure className="text-4xl font-extrabold text-indigo-800 dark:text-slate-600" />
            </span>
            <h3 className="font-medium leading-tigh text-slate-400 dark:text-slate-700">
              Entrega de requisitos
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-700 ">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="mb-20 ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full -start-8 ring-4 ring-[#303369] dark:ring-gray-200 dark:bg-indigo-50">
              <GrSecure className="text-4xl font-extrabold text-indigo-800 dark:text-slate-600" />
            </span>
            <h3 className="font-medium leading-tight text-slate-400 dark:text-slate-700">
              Entrega de requisitos
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-700">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
          <li className="ms-12 flex flex-col justify-center items-start">
            <span className="absolute flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full -start-8 ring-4 ring-[#303369] dark:ring-gray-200 dark:bg-indigo-50">
              <GrSecure className="text-4xl font-extrabold text-indigo-800 dark:text-slate-600" />
            </span>
            <h3 className="font-medium leading-tight text-slate-400 dark:text-slate-700">
              Entrega de requisitos
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-700">
              En esta etapa recaudamos todos los requisitos que sean necesarios
              para poder realizar el análisis del caso
            </p>
          </li>
        </ol>
      </main>
    </Suspense>
  );
}
