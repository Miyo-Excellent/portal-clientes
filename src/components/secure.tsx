export interface SecuresProps {}

export default function Secures({}: SecuresProps) {
  return (
    <div className="w-full bg-indigo-900 p-20 flex flex-col flex-nowrap justify-center items-start gap-2">
      <strong className="text-amber-500 font-bold text-5xl">01</strong>
      <h4 className="text-slate-50 font-normal text-3xl">SEGUROS</h4>
      <p className="text-slate-50 font-light text-md max-w-md">
        En esta sección podrás encontrar nuestras líneas de seguros disponibles
        y los diferentes productos asociados.
      </p>
    </div>
  );
}
