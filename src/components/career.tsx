export interface CareerProps {}

export const Career = ({}: CareerProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-3xl text-slate-800 dark:text-slate-50 font-weight-400; text-left mb-2">
        TRAYECTORIA
      </h3>

      <ol className="max-w-md relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -start-3 ring-4 ring-white dark:ring-gray-900 dark:bg-amber-900">
            <span className="flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-full w-full bg-amber-500"></span>
            </span>
          </span>
          <h3 className="font-semibold leading-tight text-xl text-slate-800 dark:text-slate-50">
            2011
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-100">
            Inicio de Operaciones como comercializadora de seguros exclusiva del
            INS.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -start-3 ring-4 ring-white dark:ring-gray-900 dark:bg-amber-900">
            <span className="flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-full w-full bg-amber-500"></span>
            </span>
          </span>
          <h3 className="font-semibold leading-tight text-xl text-slate-800 dark:text-slate-50">
            2016
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-100">
            Traslado a oficinas actuales.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -start-3 ring-4 ring-white dark:ring-gray-900 dark:bg-amber-900">
            <span className="flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-full w-full bg-amber-500"></span>
            </span>
          </span>
          <h3 className="font-semibold leading-tight text-xl text-slate-800 dark:text-slate-50">
            2020
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-100">
            Se posiciona como la principal comercializadora en el Seguro de
            Automóviles del INS.
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -start-3 ring-4 ring-white dark:ring-gray-900 dark:bg-amber-900">
            <span className="flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-full w-full bg-amber-500"></span>
            </span>
          </span>
          <h3 className="font-semibold leading-tight text-xl text-slate-800 dark:text-slate-50">
            2021
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-100">
            Conversión a Corredora de Seguros.
          </p>
        </li>
      </ol>
    </div>
  );
};
