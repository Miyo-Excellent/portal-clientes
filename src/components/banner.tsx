import Image from "next/image";
import bannerJpg from "@images/desktop-banner-scaled.jpg";

export interface BannerProps {}

export const Banner = ({}: BannerProps) => {
  return (
    <Image
      width={2560}
      height={757}
      src={bannerJpg}
      alt="banner"
      className="flex w-full h-auto bg-gray-800"
    />
  );
};
