import Button from "../Button/Button";

function List({ text, deleteButtonEvent }) {
  return (
    <>
      <div className="flex justify-between border-2 px-2 py-2 rounded-md">
        <li>{text}</li>
        <Button
          onclick={deleteButtonEvent}
          children={"Delete"}
          styleType={"secondary"}
        />
      </div>
    </>
  );
}
export default List;
