import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [list, setList] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setList(e.target.value);
  };
  const addList = (e) => {
    e.preventDefault();
    if (list.trim() !== "") {
      setTodos([...todos, list]);
      setList("");
    } else {
      alert("Enter the To Do List");
    }
  };
  const deleteTask = (index) => {
    const updateList = [...todos];
    updateList.splice(index, 1);
    setTodos(updateList);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-10">To Do List</h1>
      <div className="border-solid border-2 border-green-400 m-auto w-96 h-full  p-5 rounded">
        <div className="flex">
          <input
            type="text"
            className=" w-full h-10 bg-gray-200 p-4 outline-none placeholder:text-black rounded "
            placeholder="Enter To Do List"
            value={list}
            onChange={handleInput}
          />
          <button
            className="bg-black  text-base text-white p-1.5 px-2 rounded"
            onClick={addList}
          >
            Add
          </button>
        </div>

        <div>
          {todos.map((data, index) => (
            <div className=" grid grid-cols-2 my-3">
              <div
                key={index}
                className="text-xl px-4 py-2  overflow-clip mx-3"
              >
                {data}
              </div>
              <button
                className=" bg-black text-white px-1 rounded shadow"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
