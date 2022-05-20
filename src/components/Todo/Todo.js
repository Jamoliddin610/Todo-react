import React, { useState , useEffect} from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function Todo() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  const[status,setStatus] = useState('all')
  const[filtertodos,setFiltertodos] = useState([])

  const AddItem = (e) => {
    e.preventDefault()
    if (item !== '') {
      setItems([
        ...items,{text: item, complate:false,id: Math.random()*1000}
      ])
      setItem('')
    }else{
      alert('Biror nima kiriting oka yoki opa')
    }
  }
  const filterHandler = () =>{
    switch (status) {
      case 'complated':
          setFiltertodos(items.filter(item => item.complate === true))
        break;
      case 'uncomplated':
        setFiltertodos(items.filter(item => item.complate === false))
        break;
      default:
        setFiltertodos(items)
        break;
    }
  }

  useEffect(() => { 
   filterHandler()
  }, [status,items]);

    const statusHandler = (e) =>{
    setStatus(e.target.value);
  }
  return (
    <>
      <form>
        <TodoInput
          clicked={e => setItem(e.target.value)}
          value={item}
          placeholder={"Add item..."} />
        <button 
          onClick={AddItem}
          className="add-btn">
          Add
        </button>
      </form>

      <div className="wrap">
        {filtertodos.map((item) => (
          <TodoItem
            setItems={setItems}
            items={items}
            todo={item}
            title={item.text}
            key={item.id}
          />
        ))}
      </div>
      <div>
        <select className="selection" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="complated" >Complated</option>
          <option value="uncomplated" >unComplated</option>
        </select>
      </div>
    </>
  );
}


