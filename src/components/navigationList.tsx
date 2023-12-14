"use client";
import { useDispatch, useSelector } from "react-redux";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { cleanReport, selectReport } from "@redux/slices/report.slice";
import { Route } from "@/routes";
import { NavigationItem } from "@components/navigationItem";
import { changeCurrentRoute, selectRoutes } from "@redux/slices/routes.slice";
import { getRoutes } from "@services/routes.service";

export interface NavigationListProps {}

export const NavigationList = ({}: NavigationListProps) => {
  const { isFetched } = useSelector(selectReport);
  const routes = useSelector(selectRoutes);
  const dispatch = useDispatch();
  const router = useRouter();

  const onExit: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(cleanReport());
    // @ts-ignore
    dispatch(getRoutes({ withCredentials: false }));
    router.replace("/");
  };

  const onActiveItem: (route: Route) => void = (route) => {
    dispatch(changeCurrentRoute(route));
    router.replace(route.href);
  };

  return (
    <ul className="w-full font-medium flex flex-col md:flex-row md:px-4 md:gap-4">
      {routes.data.map((route) => (
        <NavigationItem
          key={route.name}
          onActiveItem={onActiveItem}
          isActive={routes.current.href === route.href}
          {...route}
        />
      ))}

      {!!isFetched && (
        <li>
          <button
            onClick={onExit}
            type="button"
            className={`block py-2 px-3 text-slate-900 dark:text-white rounded md:p-0 no-underline text-lg`}
            aria-current="page"
          >
            Salir
          </button>
        </li>
      )}
    </ul>
  );
};
