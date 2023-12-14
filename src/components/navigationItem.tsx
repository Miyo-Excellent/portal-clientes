import Link from "next/link";
import { Route } from "@/routes";

export interface NavigationItemProps extends Route {
  onActiveItem: (route: Route) => void;
  isActive?: boolean;
}

export const NavigationItem = ({
  name,
  href,
  isActive = false,
  onActiveItem,
}: NavigationItemProps) => {
  return (
    <li>
      <Link
        onClick={() => onActiveItem({ name, href })}
        href={href}
        className={`block py-2 px-3 no-underline text-lg ${
          isActive ? "text-blue-500" : "text-slate-900 dark:text-white"
        } rounded md:p-0`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
};
