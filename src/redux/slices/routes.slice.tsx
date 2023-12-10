import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import { Route, routes } from "@/routes";
import { getRoutes } from "@services/routes.service";

export interface RoutesState {
  withCredentials: boolean;
  isLoading: boolean;
  current: Route;
  data: Route[];
}

export const routesBase: RoutesState = {
  withCredentials: false,
  isLoading: false,
  current: routes[0],
  data: routes,
};

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

export const { changeCurrentRoute } = routesSlice.actions;

export const selectRoutes = (state: RootState): RoutesState => state.routes;

export default routesSlice.reducer;
