import { routes, withCredentialRoutes } from "@/routes";

export interface GetRoutesActionOptions {
  withCredentials?: boolean;
}

export const getRoutesAction = async ({
  withCredentials = false,
}: GetRoutesActionOptions = {}) => ({
  withCredentials,
  data: withCredentials ? withCredentialRoutes : routes,
});
