import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import { IMessages } from "@data/chatDummyData";
import { getChatMessagesService } from "@services/chat.service";

export interface ChatState {
  messages: IMessages[];
  isFetched: boolean;
  isLoading: boolean;
  isOpen: boolean;
}

export const chatInitialState: ChatState = {
  messages: [],
  isFetched: false,
  isLoading: false,
  isOpen: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: chatInitialState,
  reducers: {
    toggleChat(state, action: PayloadAction<boolean | undefined | null>) {
      state.isOpen = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatMessagesService.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(
        getChatMessagesService.fulfilled,
        (state, { payload }: PayloadAction<IMessages[]>) => {
          state.isFetched = true;
          state.isLoading = false;
          state.messages = payload;
        },
      );
  },
});

export const { toggleChat } = chatSlice.actions;

export const selectChat = (state: RootState): ChatState => state.chat;

export default chatSlice.reducer;
