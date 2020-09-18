import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://images.unsplash.com/photo-1544450804-9e5f64cb18de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      message: "Whats up ♥️",
    },
    {
      name: "Ellen",
      image:
        "https://images.unsplash.com/photo-1544450804-9e5f64cb18de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      message: "how is it going!",
    },
    {
      message: "Im well!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <h2>Chat Screen</h2>
      <p className="chatScreen__timestamp">
        You matched with Helen on 10/09/2030
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="write a message"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
