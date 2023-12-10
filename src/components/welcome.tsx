"use client";
import { useSelector } from "react-redux";
import { selectReport } from "@redux/slices/report.slice";

export interface WelcomeProps {}

export const Welcome = ({}: WelcomeProps) => {
  const { user } = useSelector(selectReport);

  return (
    <div className="w-full flex flex-1 flex-col justify-center items-center gap-4">
      <h1 className="text-slate-700 dark:text-slate-50 text-3xl">{`Hola ${user.name} ${user.lastname}`}</h1>
      <p className="text-slate-700 dark:text-slate-50 text-xl">
        Bienvenida al Portal de Clientes de Purdy Seguros.
      </p>
    </div>
  );
};
