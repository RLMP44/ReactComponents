import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import contacts from "../../contacts";

// contact received from .map passing over single element
// key must exist and MUST be unique for each created element
// `key` is not a prop. Trying to access it will result in `undefined` being returned.
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

// .map calls the function and passes over each element in the array
// (without needing the element to be passed manually using createCard(contact))
function App() {
  return (
    <div>
      <Heading />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
