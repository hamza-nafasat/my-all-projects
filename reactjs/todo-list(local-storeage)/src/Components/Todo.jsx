import React, { useState } from "react";
import { useTodo } from "../Context/todoContext";

const Todo = ({ todo }) => {
  const [newinp, setNewInp] = useState(todo.text);
  const [checked, setChecked] = useState(false);
  const [btnInpVal, setbtnInpVal] = useState(true);
  const { editTodo, deleteTodo, completeTodo } = useTodo();

  const changeBtnInpVAl = () => {
    setbtnInpVal((prev) => !prev);
  };
  const editBtn = () => {
    changeBtnInpVAl();
    editTodo(todo.id, newinp);
  };
  const deleteBtn = () => {
    deleteTodo(todo.id);
  };
  const changeCheckbox = () => {
    completeTodo(todo.id);
    setChecked((prev) => !prev);
  };
  return (
    <div className="w-full py-3">
      <div className="w-full h-12 rounded-md bg-green-600 flex justify-between px-2">
        <div className="flex w-10/12 ">
          {/* CHECKBOX   */}

          <div className="w-6 flex items-center justify-center">
            <input
              type="checkbox"
              name="check"
              id={todo.id}
              checked={checked}
              onChange={changeCheckbox}
              className="w-4 h-4 mt-1 cursor-pointer "
            />
          </div>

          {/* INPUT FOR TODOTEXT  */}

          <div className="w-full  flex items-center ">
            <input
              type="text"
              name="inp"
              id={todo.id + 1}
              readOnly={btnInpVal}
              value={newinp}
              onChange={(e) => setNewInp(e.target.value)}
              className={`w-full text-white h-10 rounded-md outline-none px-2 text-xl font-semibold
              ${!btnInpVal ? "bg-green-700" : "bg-transparent"}
              ${checked ? "line-through decoration-black" : ""}
              `}
            />
          </div>
        </div>

        {/* BUTTONS  */}

        <div className="w-2/12  justify-end flex items-center ">
          <div className=" w-28  flex items-center justify-between ">
            <button
              className=" w-8 h-9 text-xl mr-1 rounded bg-[#f5f5f5] hover:bg-[#c9c8c8] "
              onClick={btnInpVal ? changeBtnInpVAl : editBtn}
            >
              {btnInpVal ? "✏️" : "📁"}
            </button>
            <button
              className=" w-8 h-9 text-xl mx-1 rounded bg-[#f5f5f5] hover:bg-[#c9c8c8] visited:bg-black "
              onClick={deleteBtn}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
