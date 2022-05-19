import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function Todo() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({title: ''});

  const AddItem = (e) => {
    e.preventDefault()
    const newItem = { title: item.title }
    if (item.title != '') setItems([...items, newItem])
    setItem({title: ''})
  }

  return (
    <>
      <form>
        <TodoInput
          clicked={e => setItem({...item, title: e.target.value})}
          value={item.title}
          placeholder={"Add item..."} />
        <button 
          onClick={AddItem}
          className="add-btn">
          Add
        </button>
      </form>

      <div className="wrap">
        {items.map((item) => (
          <TodoItem
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}


