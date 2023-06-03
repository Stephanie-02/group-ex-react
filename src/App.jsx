import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateItem = (index, text) => {
    let newItems = [...items];
    newItems[index] = text;
    setItems(newItems);
  }

  const deleteItem = (index) => {
    let arr = [...items];
    arr.splice(index, 1);
    setItems(arr);
  };

  return (
    <div>
      <input
        onChange={(ev) => {
          let text = ev.target.value;
          setInputText(text);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let itemsNew = [...items, inputText];
          setItems(itemsNew);
        }}
      >
        Add Item
      </button>
      {items.map((item, i) => (
        <CardComponent key={"cardcomp" + i}
        index={i}
        updateItem={updateItem}
        deleteItem={deleteItem} content={item}></CardComponent>
      ))}
    </div>
  );
}

export default App;
