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
      className="w-[150px] xl:w-[100px] flex items-center justify-center self-start"
    >
      <Image src={logo} className="h-auto w-full" alt="Purdy seguros" />
    </Link>
  );
};
