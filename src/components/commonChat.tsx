"use client";
import React from "react";
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
} from "@components/offCanvas";
import Chat, { ChatGroup, ChatHeader } from "@components/chat";
import InputGroup from "@components/inputGroup";
import Textarea from "@components/textarea";
import Button from "@components/button";
import USERS from "@data/userDummyData";
import Avatar from "@components/avatar";
import { useDispatch, useSelector } from "react-redux";
import { selectChat, toggleChat } from "@redux/slices/chat.slice";
import { selectReport } from "@redux/slices/report.slice";

export interface CommonChatProps {}

export const CommonChat = ({}: CommonChatProps) => {
  const { isFetched: isReportFetched } = useSelector(selectReport);
  const { messages, isOpen } = useSelector(selectChat);
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleChat(!isOpen));

  if (!isReportFetched) return null;

  return (
    <>
      <div
        className="flex-1 flex-row flex-nowrap flex justify-end items-center gap-2 px-4 py-2 cursor-pointer"
        onClick={() => toggle()}
        role="presentation"
      >
        <div className="me-3">
          <div className="text-end">
            <div className="fw-bold fs-6 mb-0">
              {`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
            </div>
            <div className="text-muted">
              <small>{USERS.CHLOE.position}</small>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <Avatar
            src={USERS.CHLOE.src.src}
            size={48}
            color={USERS.CHLOE.color}
          />
          {!!messages.length && (
            <span className="position-absolute top-15 start-85 translate-middle badge rounded-pill bg-danger">
              {messages.length}{" "}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
          <span className="position-absolute top-85 start-85 translate-middle badge border-2 border-light rounded-circle bg-success p-2">
            <span className="visually-hidden">Online user</span>
          </span>
        </div>
      </div>
      <OffCanvas
        id="chat"
        isOpen={isOpen}
        setOpen={toggle}
        placement="end"
        isModalStyle
        isBackdrop={false}
        isBodyScroll
      >
        <OffCanvasHeader setOpen={toggle} className="fs-5">
          <ChatHeader to={USERS.CHLOE.name} />
        </OffCanvasHeader>
        <OffCanvasBody>
          <Chat>
            {messages.map((message) => (
              <ChatGroup
                key={message.id}
                messages={message.messages}
                user={message.user.src}
                isReply={message.isReply}
              />
            ))}
          </Chat>
        </OffCanvasBody>
        <div className="chat-send-message p-3">
          <InputGroup>
            <Textarea />
            <Button color="info" icon="Send">
              SEND
            </Button>
          </InputGroup>
        </div>
      </OffCanvas>
    </>
  );
};
