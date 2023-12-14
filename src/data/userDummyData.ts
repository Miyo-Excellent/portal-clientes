import UserImage from "@assets/images/wanna1.webp";
import UserImage2 from "@assets/images/wanna2.webp";
import UserImage3 from "@assets/images/wanna3.webp";
import UserImage4 from "@assets/images/wanna4.webp";
import UserImage5 from "@assets/images/wanna5.webp";
import UserImage6 from "@assets/images/wanna6.webp";
import UserImage7 from "@assets/images/wanna7.webp";
import SERVICES, { IServiceProps } from "@data/serviceDummyData";
import User7Landing from "@assets/images/landing1.png";
/*	@ts-ignore	*/
import { TColor } from "@types/color.type";
import { StaticImageData } from "next/image";

export interface IUserProps {
  id: string;
  username: string;
  name: string;
  surname: string;
  position: string;
  email?: string;
  src: StaticImageData;
  isOnline: boolean;
  isReply?: boolean;
  color: TColor;
  fullImage?: StaticImageData;
  services?: IServiceProps[];
  password: string;
}

const john: IUserProps = {
  id: "1",
  username: "john",
  name: "John",
  surname: "Doe",
  position: "CEO, Founder",
  email: "john@omtanke.studio",
  src: UserImage,
  isOnline: true,
  isReply: true,
  color: "primary",
  services: [SERVICES.SURFING, SERVICES.KITE_SURFING, SERVICES.TENNIS],
  password: "@ABC123",
};

const grace: IUserProps = {
  id: "2",
  username: "grace",
  name: "Grace",
  surname: "Buckland",
  position: "Staff",
  email: "grace@omtanke.studio",
  src: UserImage2,
  isOnline: true,
  color: "warning",
  services: [
    SERVICES.SNOWBOARDING,
    SERVICES.ICE_SKATING,
    SERVICES.KITE_SURFING,
  ],
  password: "@ABC123",
};

const jane: IUserProps = {
  id: "3",
  username: "jane",
  name: "Jane",
  surname: "Lee",
  position: "Staff",
  email: "jane@omtanke.studio",
  src: UserImage3,
  isOnline: true,
  color: "secondary",
  services: [SERVICES.YOGA, SERVICES.HANDBALL, SERVICES.CRICKET],
  password: "@ABC123",
};

const ryan: IUserProps = {
  id: "4",
  username: "ryan",
  name: "Ryan",
  surname: "McGrath",
  position: "Worker",
  email: "ryan@omtanke.studio",
  src: UserImage4,
  isOnline: false,
  color: "info",
  services: [SERVICES.HIKING, SERVICES.FOOTBALL, SERVICES.HANDBALL],
  password: "@ABC123",
};

const ella: IUserProps = {
  id: "5",
  username: "ella",
  name: "Ella",
  surname: "Oliver",
  position: "Worker",
  email: "ella@omtanke.studio",
  src: UserImage5,
  isOnline: false,
  color: "success",
  services: [
    SERVICES.ICE_SKATING,
    SERVICES.TENNIS,
    SERVICES.SNOWBOARDING,
    SERVICES.YOGA,
  ],
  password: "@ABC123",
};

const chloe: IUserProps = {
  id: "6",
  username: "chloe",
  name: "Chloe",
  surname: "Walker",
  position: "Staff",
  email: "chloe@omtanke.studio",
  src: UserImage6,
  isOnline: true,
  color: "warning",
  services: [SERVICES.VOLLEYBALL, SERVICES.CRICKET],
  password: "@ABC123",
};

const sam: IUserProps = {
  id: "7",
  username: "sam",
  name: "Sam",
  surname: "Roberts",
  position: "Worker",
  email: "sam@omtanke.studio",
  src: UserImage7,
  isOnline: false,
  color: "danger",
  fullImage: User7Landing,
  password: "@ABC123",
};

const USERS: { [key: string]: IUserProps } = {
  JOHN: john,
  GRACE: grace,
  JANE: jane,
  RYAN: ryan,
  ELLA: ella,
  CHLOE: chloe,
  SAM: sam,
};

export function getUserDataWithUsername(username: string): IUserProps {
  return USERS[
    // @ts-ignore
    Object.keys(USERS).filter((f) => USERS[f].username.toString() === username)
  ];
}

export function getUserDataWithId(id?: string): IUserProps {
  return USERS[
    // @ts-ignore
    Object.keys(USERS).filter((f) => USERS[f].id.toString() === id.toString())
  ];
}

export default USERS;
