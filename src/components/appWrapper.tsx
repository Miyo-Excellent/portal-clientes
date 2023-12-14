"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import { getChatMessagesService } from "@services/chat.service";
import showNotification from "@helpers/showNotification";
import Avatar from "@components/avatar";
import USERS from "@data/userDummyData";

export interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getChatMessagesService());

    const timeout = setTimeout(() => {
      showNotification(
        <span className="d-flex align-items-center">
          <Avatar
            src={USERS.CHLOE.src.src}
            size={36}
            color={USERS.CHLOE.color}
            className="me-3"
          />
          <span>{USERS.CHLOE.name} sent a message.</span>
        </span>,
        <div role="presentation">
          <p>❤️❤️ Hola mi amorcito ❤️❤️</p>
        </div>,
      );
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <ReactNotifications />

      {children}
    </>
  );
};
