import { routes, withCredentialRoutes } from "@/routes";


/**
 * Obtiene las rutas de la aplicación.
 * @async
 * @function
 * @param {GetRoutesActionOptions} options - Opciones para la acción.
 * @returns {Promise<{ withCredentials: boolean, data: Route[] }>} - Un objeto que contiene información sobre las rutas obtenidas.
 * @throws {Error} - Se lanza un error si la obtención de rutas falla.
 */

export interface GetRoutesActionOptions {
  withCredentials?: boolean;
}

export const getRoutesAction = async ({
  withCredentials = false,
}: GetRoutesActionOptions = {}) => ({
  withCredentials,
  data: withCredentials ? withCredentialRoutes : routes,
});
