import { useState } from "react";
import { useTodo } from "../Context/todoContext";

function Form() {
  const [inp, setInp] = useState("");
  const { addTodo, capitalize } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (inp) {
      addTodo({ id: Date.now(), text: capitalize(inp), complete: false });
      setInp("");
    }
  };
  return (
    <div className="w-full py-3">
      <form method="get" onSubmit={add} className="flex justify-between">
        <input
          type="text"
          name="inp"
          id="inp"
          placeholder="Enter Your Todos"
          autoFocus
          required
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="w-10/12 h-10 bg-slate-100 rounded-md outline-none px-2 text-xl font-semibold"
        />
        <button
          type="submit"
          className="bg-green-500 px- w-[15%] rounded-md hover:bg-green-600 text-white text-lg 
          font-bold"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
