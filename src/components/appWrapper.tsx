"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import { getChatMessagesService } from "@services/chat.service";
import showNotification from "@helpers/showNotification";
import Avatar from "@components/avatar";
import USERS from "@data/userDummyData";
import { selectChat } from "@redux/slices/chat.slice";
import { IMessages } from "@data/chatDummyData";

export interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const { messages } = useSelector(selectChat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!messages.length) {
      const timeout = setTimeout(() => {
        const message: IMessages | undefined = messages.findLast(
          ({ user }) => user.id === USERS.JOHN.id,
        );

        if (message) {
          showNotification(
            <span className="d-flex align-items-center">
              <Avatar
                src={USERS.JOHN.src.src}
                size={36}
                color={USERS.JOHN.color}
                className="me-3"
              />
              <span>{USERS.JOHN.name} sent a message.</span>
            </span>,
            <div role="presentation">
              {message.messages.map(({ id, message }) => (
                <span key={id}>{message}</span>
              ))}
            </div>,
          );
        }
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getChatMessagesService());
  }, []);

  return (
    <>
      <ReactNotifications />

      {children}
    </>
  );
};
