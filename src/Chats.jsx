import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="Hey?what's up"
        timestamp="35 minutes ago"
        profilePic="https://pbs.twimg.com/media/CEga7m2WoAARc4H.jpg:large"
      />
      <Chat
        name="Emma"
        message="Hello, how are you"
        timestamp="1 minutes ago"
        profilePic="https://lh3.googleusercontent.com/proxy/64YN7wMTpxhMYzDUcgvCktwnfDKyZCxb_-U97qdhcur3HvnwnLP4NQpUkplJKm0vM-Iqq0yIVLbyRt6R8NlJff4yQ78xVpJx56goas-TIRctPcI1vv5dI3xD0N_MVLvQGcOqFUtKzrfClvhPsbpyok5Dop6QTIY"
      />
    </div>
  );
}

export default Chats;
