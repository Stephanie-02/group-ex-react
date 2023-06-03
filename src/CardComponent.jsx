export default function CardComponent({content, updateItem, deleteItem, index}) {
  return (
    <div>
      <input type="text" value={content} onChange={(ev) => {
        updateItem(index, ev.target.value);
      }}></input>
      <button onClick = {() => {
        deleteItem(index);
      }}>Delete Me</button>
      <br />
    </div>
  );
}
