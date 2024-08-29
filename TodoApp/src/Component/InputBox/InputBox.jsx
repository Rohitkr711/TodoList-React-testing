import Button from "../Button/Button";
import List from "../List/List";
import { useState } from "react";

function InputBox() {
  const [task, setTask] = useState([]);

  function addButtonHandler(event) {
    let TaskName = event.target.parentNode.firstChild.firstChild.value;
    if (TaskName.trim() !== "") {
      setTask([...task, TaskName]);
    }
    event.target.parentNode.firstChild.firstChild.value = "";
  }

  function deleteButtonHandler(event) {
    console.log("Deletion Event");
    const taskValue = event.target.parentNode.firstChild.textContent;
    const updatedTaskList = task.filter((val) => val !== taskValue);
    setTask([...updatedTaskList]);
  }

  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="flex gap-2">
          <div className="rounded-md w-96 h-10 border-0">
            <input
              type="text"
              placeholder="Enter task"
              className="text-black h-full w-full rounded-md text-center"
            />
          </div>
          <Button
            onclick={addButtonHandler}
            children="Add"
            styleType={"primary"}
          />
        </div>

        {task.length > 0 && (
          <div className="text-white flex flex-col gap-8 rounded-md px-2 py-2 border-2">
            <h2 className="text-center font-semibold">Task List</h2>
            <ul className="taskList flex flex-col gap-2">
              {task.map((taskItem, idx) => {
                console.log("length", task.length, ", Item =", task);
                return (
                  <List
                    key={idx}
                    text={taskItem}
                    deleteButtonEvent={deleteButtonHandler}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default InputBox;
