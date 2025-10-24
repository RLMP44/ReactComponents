import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import contacts from "../../contacts";

function App() {
  return (
    <div>
      <Heading />
      {contacts.map((contact) => (
        <Card
          name={contact.name}
          imgURL={contact.imgURL}
          tel={contact.tel}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
