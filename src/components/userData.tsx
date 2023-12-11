"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectReport } from "@redux/slices/report.slice";
import { FormSkeleton } from "@components/formSkeleton";

export interface UserDataProps {}

export const UserData = ({}: UserDataProps) => {
  const { user, isFetched, isLoading } = useSelector(selectReport);

  if (!isFetched && isLoading) return <FormSkeleton />;

  return (
    <form className="m-auto bg-slate-100 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-950 rounded-2xl p-8 shadow-md shadow-slate-800 w-full max-w-3xl flex flex-col">
      <div className="flex flex-row justify-center items-center w-full mb-6">
        <div className="w-2/4 flex flex-row flex-nowrap justify-end items-center">
          <label
            className="block text-slate-500 dark:text-slate-50 font-bold text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Nombre:
          </label>
        </div>
        <div className="w-full">
          <input
            disabled
            className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
            type="text"
            control-id={`ControlID-1`}
            value={`${user.name} ${user.lastname}`}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full mb-6">
        <div className="w-2/4 flex flex-row flex-nowrap justify-end items-center">
          <label
            className="block text-slate-500 dark:text-slate-50 font-bold text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Cédula:
          </label>
        </div>
        <div className="w-full">
          <input
            disabled
            className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
            type="text"
            control-id={`ControlID-2`}
            value={user.dni}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-start w-full mb-6">
        <div className="w-2/4 flex flex-row flex-nowrap justify-end items-center">
          <label
            className="block text-slate-500 dark:text-slate-50 font-bold text-right mb-1 md:mb-0 pr-4 mt-1"
            htmlFor="inline-full-name"
          >
            Teléfono:
          </label>
        </div>
        <div className="w-full flex flex-col">
          <input
            disabled
            className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
            type="tel"
            control-id={`ControlID-3`}
            value={user.phone}
          />
          <Link href="/" className="text-blue-500 text-xs pl-4">
            Solicitar cambios
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center items-start w-full mb-6">
        <div className="w-2/4 flex flex-row flex-nowrap justify-end items-center">
          <label
            className="block text-slate-500 dark:text-slate-50 font-bold text-right mb-1 md:mb-0 pr-4 mt-1"
            htmlFor="inline-full-name"
          >
            Email:
          </label>
        </div>
        <div className="w-full flex flex-col">
          <input
            disabled
            className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
            type="email"
            control-id={`ControlID-3`}
            value={user.email}
          />
          <Link href="/" className="text-blue-500 text-xs pl-4">
            Solicitar cambios
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full mb-6">
        <div className="w-2/4 flex flex-row flex-nowrap justify-end items-center">
          <label
            className="block text-slate-500 dark:text-slate-50 font-bold text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Placa:
          </label>
        </div>
        <div className="w-full">
          <input
            disabled
            className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
            type="text"
            control-id={`ControlID-5`}
            value={user.board}
          />
        </div>
      </div>
    </form>
  );
};
