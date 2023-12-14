"use server";
import CHATS, { IMessages } from "@data/chatDummyData";

export default async function getChatAction(): Promise<IMessages[]> {
  try {
    return CHATS.CHLOE_VS_JOHN;
  } catch (error) {
    console.error(error);
    return [];
  }
}
