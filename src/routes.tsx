export interface Route {
  name: string;
  href: string;
}
export const routes: Route[] = [
  { name: "Inicio", href: "/" },
  { name: "Seguros", href: "/#secures" },
  { name: "Estados Financieros", href: "/#financial-statements" },
  { name: "Gobierno Corporativo", href: "/#corporate-governance" },
  { name: "Ubicaciones", href: "/#locations" },
  { name: "Contactanos", href: "/#contact-us" },
];

export const withCredentialRoutes: Route[] = [
  { name: "Datos", href: "/data" },
  { name: "Informacion de su poliza", href: "/your-policy-information" },
  { name: "Status reclamo", href: "/claim-statuses" },
  { name: "Otros reclamos", href: "/other-claims" },
  { name: "Asistencia", href: "/assistance" },
];
