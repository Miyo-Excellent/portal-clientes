import { createAsyncThunk } from "@reduxjs/toolkit";
import getChatAction from "@actions/getChat.action";
import { IMessages } from "@data/chatDummyData";

export const getChatMessagesService = createAsyncThunk(
  "chat/fetchMessages",

  async (): Promise<IMessages[]> => {
    try {
      return getChatAction();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
);
