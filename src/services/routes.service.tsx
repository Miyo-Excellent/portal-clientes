import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoutesAction } from "@actions/getRoutes.action";
import { Route } from "@/routes";

export interface GetRoutesOptions {
  withCredentials?: boolean;
}

export const getRoutes = createAsyncThunk(
  "routes/fetchAll",
  async ({ withCredentials = false }: GetRoutesOptions = {}): Promise<{
    data: Route[];
    withCredentials: boolean;
  }> => {
    return getRoutesAction({ withCredentials });
  },
);
