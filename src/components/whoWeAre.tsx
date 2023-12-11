export interface WhoWeAreProps {}

export const WhoWeAre = ({}: WhoWeAreProps) => {
  return (
    <div className="max-w-md flex flex-col flex-nowrap justify-start items-stretch gap-2">
      <h3 className="text-3xl text-slate-800 dark:text-slate-50 font-weight-400; text-left mb-2">
        QUIÉNES SOMOS
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-50">
        Purdy Corredora de Seguros S.A. es una empresa de Grupo Purdy, que
        inició operaciones en diciembre del año 2011 inicialmente como agencia
        de seguros, y al día de hoy está registrada ante la Superintendencia de
        Seguros como entidad corredora de seguros bajo el código SC-21-134.
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-50">
        En nuestra condición de Corredora de Seguros, brindamos asesoría a
        nuestros clientes facilitando múltiples soluciones de cobertura a través
        de las entidades aseguradoras autorizadas en Costa Rica.
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-50">
        Nos especializamos en asesorar en la línea de seguros para vehículos,
        pero además atendemos otras líneas de seguros de interés para nuestros
        clientes.
      </p>
    </div>
  );
};
