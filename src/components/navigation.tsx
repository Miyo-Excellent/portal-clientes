import { Logo } from "@components/logo";
import { NavigationList } from "@components/navigationList";

export interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-950 shadow-lg">
      <div className="max-w-screen-xl flex flex-row flex-wrap lg:flex-nowrap items-center justify-between sm:gap-4 mx-auto p-4 md:p-0">
        <Logo />

        <NavigationList />
      </div>
    </nav>
  );
};
