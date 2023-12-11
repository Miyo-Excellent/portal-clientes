import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@redux/store";
import {Route, routes} from "@/routes";
import {getRoutes} from "@services/routes.service";


/**
 * @interface RoutesState
 * @property {boolean} withCredentials - Indica si se requieren credenciales para acceder a las rutas.
 * @property {boolean} isLoading - Indica si se están cargando las rutas.
 * @property {Route} current - La ruta actual seleccionada.
 * @property {Route[]} data - El conjunto de rutas disponibles.
 */
export interface RoutesState {
    withCredentials: boolean;
    isLoading: boolean;
    current: Route;
    data: Route[];
}


/**
 * Estado inicial para el slice de rutas.
 *
 * @constant
 * @type {RoutesState}
 */
export const routesBase: RoutesState = {
    withCredentials: false,
    isLoading: false,
    current: routes[0],
    data: routes,
};


/**
 * Slice de Redux para gestionar el estado de las rutas.
 *
 * @constant
 * @type {Slice<RoutesState>}
 */
const routesSlice = createSlice({
    name: "routes",
    initialState: routesBase,
    reducers: {
        changeCurrentRoute(state, action: PayloadAction<Route>) {
            state.current = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            /**
             * Reducer que se ejecuta cuando la solicitud para obtener las rutas está pendiente.
             *
             * @param {RoutesState} state - Estado actual de las rutas.
             */

            .addCase(getRoutes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getRoutes.fulfilled,
                (
                    state,
                    {
                        payload,
                    }: PayloadAction<{ data: Route[]; withCredentials: boolean }>,
                ) => {
                    state.withCredentials = payload.withCredentials;
                    state.isLoading = false;
                    state.data = payload.data;
                },
            );
    },
});

/**
 * Acción creadora para cambiar la ruta actual.
 */
export const {changeCurrentRoute} = routesSlice.actions;

/**
 * Selector para obtener el estado de las rutas desde el estado global de Redux.
 *
 * @param {RootState} state - Estado global de Redux.
 * @returns {RoutesState} El estado de las rutas.
 */
export const selectRoutes = (state: RootState): RoutesState => state.routes;

/**
 * Reducer exportado para ser utilizado en el store de Redux.
 */
export default routesSlice.reducer;
