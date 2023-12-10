import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.png";

export interface LogoProps {
  href?: string;
}

export const Logo = ({ href = "/" }: LogoProps) => {
  return (
    <Link
      href={href}
      className="flex flex-row flex-nowrap items-center space-x-3 rtl:space-x-reverse"
    >
      <Image src={logo} className="h-8 w-auto" alt="Purdy seguros" />
    </Link>
  );
};
