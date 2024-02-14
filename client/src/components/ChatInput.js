import React from "react";

const ChatInput = ({ message, setMessage, sendMessage }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Enter pressed, message:", message);
      sendMessage(message); // Pass the current message to sendMessage
      setMessage(""); // Clear the message input field
    }
  };

  const handleClick = () => {
    console.log("Send button clicked, message:", message);
    sendMessage(message); // Pass the current message to sendMessage
    setMessage(""); // Clear the message input field
  };

  return (
    <div className="mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block chat-input">
      <div className="input-group flex-fill">
        <input
          type="text"
          className="form-control"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        />
        <button className="btn btn-info" onClick={handleClick}>Send</button>
      </div>
    </div>
  );
};

export default ChatInput;
