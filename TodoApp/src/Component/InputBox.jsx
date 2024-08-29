import Button from "./Button/Button";

function InputBox() {
  let heading = 0;
  function addButtonHandler(event) {
    let Task = event.target.parentNode.firstChild.firstChild.value;
    const listItem = document.createElement("li");
    listItem.textContent = Task;
    if (heading == 0) {
      const taskListBg = event.target.parentNode.parentNode.lastChild;
      taskListBg.style.backgroundColor='yellow'
      const taskListHeading =
        event.target.parentNode.parentNode.lastChild.firstChild;
      taskListHeading.style = "visibility:visible";
    }
    const taskList = event.target.parentNode.parentNode.lastChild.lastChild;

    console.log(taskList);

    taskList.appendChild(listItem);
    event.target.parentNode.firstChild.firstChild.value = "";
  }

  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="flex gap-2">
          <div className="rounded-md w-96 h-10 border-0">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter task"
              className="text-black h-full w-full rounded-md text-center"
              
            />
          </div>
          <Button onclick={addButtonHandler} children="Add" />
        </div>
        <div className="text-black rounded-md px-2 py-2">
          <h2 className="text-center invisible font-semibold">Task List</h2>
          <ul className="taskList"></ul>
        </div>
      </div>
    </>
  );
}
export default InputBox;
