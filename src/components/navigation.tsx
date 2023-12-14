import { Logo } from "@components/logo";
import { NavigationList } from "@components/navigationList";
import { CommonChat } from "@components/commonChat";

export interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-950 shadow-lg md:px-8 md:py-4">
      <div className="max-w-screen-xl flex flex-col lg:flex-row flex-nowrap items-center justify-between md:gap-2 lg:gap-4 mx-auto p-4 md:p-0">
        <Logo />

        <NavigationList />

        <div className="w-[256px] flex flex-row flex-nowrap justify-center items-center">
          <CommonChat />
        </div>
      </div>
    </nav>
  );
};
