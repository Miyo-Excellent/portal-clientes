export interface FormSkeletonProps {}

export const FormSkeleton = ({}: FormSkeletonProps) => {
  return (
    <div
      role="status"
      className="m-auto bg-slate-100 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-950 rounded-2xl p-8 shadow-md shadow-slate-800 w-full max-w-xl flex flex-col animate-pulse"
    >
      <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px]"></div>
      <span className="sr-only">Cargando...</span>
    </div>
  );
};
