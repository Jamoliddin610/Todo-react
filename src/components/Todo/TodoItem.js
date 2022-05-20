import 'boxicons'
function TodoItem({id, title,items,setItems,todo}) {
  const deleteHandler = ()=>{
    setItems(items.filter(el =>  el.id !== todo.id))
  }
  const complateHandler =()=>{
    setItems(
      items.map(item =>{
        if (item.id === todo.id) {
          return{
            ...item,
            complate: !item.complate
          }
        }
        return item
      })
    )
  }
  return (
    <div className={`item ${todo.complate ? 'complated' : ''}`}>
      <span className="item-title">{title}</span>
      <div>
      <button className="check-button" onClick={complateHandler}><i className="bx bx-check"></i></button>
      <button className="delete-button" onClick={deleteHandler}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;