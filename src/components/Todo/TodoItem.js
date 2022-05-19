function TodoItem({id, title}) {
  return (
    <div className="item">
      <span className="item-title">{title}</span>
      <button className="delete-button">X</button>
    </div>
  );
}

export default TodoItem;