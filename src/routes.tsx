/**
 * Representa una ruta en la aplicación.
 *
 * @interface Ruta
 * @property {string} name - El nombre de la ruta.
 * @property {string} href - La URL de la ruta.
 */

export interface Route {
  name: string;
  href: string;
}

/**
 * Array de rutas para la navegación principal.
 *
 * @constant
 * @type {Ruta[]}
 */
export const routes: Route[] = [
  { name: "Inicio", href: "/" },
  { name: "Seguros", href: "/#secures" },
  { name: "Estados Financieros", href: "/#financial-statements" },
  { name: "Gobierno Corporativo", href: "/#corporate-governance" },
  { name: "Ubicaciones", href: "/#locations" },
  { name: "Contáctanos", href: "/#contact-us" },
];

/**
 * Array de rutas que requieren credenciales de usuario.
 *
 * @constant
 * @type {Ruta[]}
 */

export const withCredentialRoutes: Route[] = [
  { name: "Datos", href: "/data" },
  { name: "Información de su poliza", href: "/your-policy-information" },
  { name: "Status reclamo", href: "/claim-statuses" },
  { name: "Otros reclamos", href: "/other-claims" },
  { name: "Asistencia", href: "/assistance" },
];
