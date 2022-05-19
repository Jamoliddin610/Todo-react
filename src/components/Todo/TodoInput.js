export default function TodoInput({placeholder, clicked, value}) {
  return (
    <>
      <input
        type="text"
        className="add-input"
        placeholder={placeholder}
        onChange={clicked}
        value={value}
      />
    </>
  );
}
