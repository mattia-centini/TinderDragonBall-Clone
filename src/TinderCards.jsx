import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    // {
    //   name: "Steve Jobs",
    //   url:
    //     "https://i.pinimg.com/originals/f4/e2/07/f4e207bf6a3bf0161ebca1c7f0897ac5.jpg",
    // },
    // {
    //   name: "Mark Zuckenberg",
    //   url:
    //     "https://i.pinimg.com/originals/ed/aa/87/edaa87a9a72538da4508b5ae0457067b.jpg",
    // },
  ]);

  //UseEffect runs based on a conditions - it replaces the lifecycles methods in CLASS comp
  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      //this is the cleanup call.
      unsubscribe();
    };
    //by leaving the dependicy [] blank it means is only gonna run once. if you put a factor inside it will run everytime the factor changes
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              //   inline style => change the style by using JS
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
