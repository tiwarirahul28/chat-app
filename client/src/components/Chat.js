import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatContainer from "./Chatcontainer"; // corrected component name to ChatContainer
import ScrollableFeed from 'react-scrollable-feed';

const Chat = ({ user, message, messages, setMessage, sendMessage }) => {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <div className="position-relative chat-height overflow-auto">
        <ScrollableFeed>
          <div className="d-flex flex-column p-4">
            {messages.map((message, index) => {
              return message.type === "userStatus" ? (
                <div key={index} className="text-center">
                  <span className="badge bg-info">
                    {message.userId === user.userId
                      ? "You have Joined"
                      : `${message.username} has joined`}
                  </span>
                </div>
              ) : (
                <div
                  className={
                    message.userId === user.userId
                      ? "chat-message-right pb-4"
                      : "chat-message-left pb-4"
                  }
                  key={index}
                >
                  <div>
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg" // Add src attribute here
                      alt={message.username}
                      className="rounded-circle mr-1"
                      title={message.username}
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">
                      12:00 AM
                    </div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1"> {/* Corrected font-weight-blod to font-weight-bold */}
                      {message.userId === user.userId
                        ? "You"
                        : message.message}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollableFeed>
      </div>
      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </ChatContainer>
  );
};

export default Chat;
