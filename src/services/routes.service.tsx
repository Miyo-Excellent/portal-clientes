import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoutesAction } from "@actions/getRoutes.action";
import { Route } from "@/routes";

/**
 * Opciones para la obtención de rutas.
 *
 * @interface GetRoutesOptions
 * @property {boolean} [withCredentials=false] - Indica si se deben incluir credenciales en la solicitud.
 */
export interface GetRoutesOptions {
  withCredentials?: boolean;
}

/**
 * Acción asíncrona para obtener todas las rutas.
 *
 * @function
 * @name getRoutes
 * @memberof module:Rutas
 * @param {GetRoutesOptions} [options] - Opciones para la obtención de rutas.
 * @returns {Promise<{ data: Route[]; withCredentials: boolean }>} - Promesa que resuelve a un objeto con datos de rutas y la indicación de credenciales.
 * @throws {Error} - Error si la solicitud de rutas no se realiza correctamente.
 */
export const getRoutes = createAsyncThunk(
  "routes/fetchAll",
  async ({ withCredentials = false }: GetRoutesOptions = {}): Promise<{
    data: Route[];
    withCredentials: boolean;
  }> => {
    return getRoutesAction({ withCredentials });
  },
);
