"use client";

import { ChangeEventHandler, MouseEventHandler } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { InputWithButton } from "@components/inputWithButton";
import { selectReport, setReportNumber } from "@redux/slices/report.slice";
import { getReportFetchByNumber } from "@services/report.service";
import { getRoutes } from "@services/routes.service";

export interface ReportNumberFormProps {}

export const ReportNumberForm = ({}: ReportNumberFormProps) => {
  const { number: reportNumber, isLoading } = useSelector(selectReport);
  const router = useRouter();
  const dispatch = useDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = async ({ target }) => {
    dispatch(setReportNumber(target.value));
  };

  const onClickButton: MouseEventHandler<HTMLButtonElement> = async ({
    target,
  }) => {
    // @ts-ignore
    dispatch(getReportFetchByNumber(reportNumber));
    // @ts-ignore
    dispatch(getRoutes({ withCredentials: true }));
    router.replace("/");
  };

  return (
    <form className="bg-slate-100 dark:bg-slate-900 shadow-lg p-4 rounded-2xl w-full px-8 md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] flex flex-col justify-center items-stretch gap-4">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Bienvenidos a nuestro portal de Clientes
      </h3>

      <div className="flex flex-row flex-nowrap justify-center items-center gap-2">
        <span className="text-md font-semibold text-slate-900 dark:text-white">
          Numero de reporte:
        </span>

        <div className="flex-1">
          <InputWithButton
            defaultValue={reportNumber}
            type="number"
            name="report-number"
            buttonText="Buscar"
            isLoading={isLoading}
            label="Numero de reporte"
            onChange={onChange}
            controlId={1}
            onClickButton={onClickButton}
          />
        </div>
      </div>

      <div className="w-full">
        <strong className="font-semibold mr-2 text-sm text-slate-700 dark:text-slate-50">
          *
        </strong>
        <span className="text-right font-normal mr-2 text-sm text-slate-700 dark:text-slate-50">
          Este numero le llego a su correo. Si no lo tiene haga click
        </span>
        <Link
          href="/"
          className="font-semibold text-blue-500 dark:text-blue-400 text-sm"
        >
          aqui
        </Link>
      </div>
    </form>
  );
};
