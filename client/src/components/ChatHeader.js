import React from "react";

const ChatHeader = ({user}) => {
  return (
    <div className="align-items-start py-2 px-4 w-100 border-solid border-bottom border-info d-lg-block sticky-top bg-white">
      <div className="d-flex align-items-center py-1">
        <div className="position-relative">
          <img src="" alt="" />
        </div>
        <div className="flex-grow-1">
          <strong>Logged in as {user.username}</strong><br/>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
