import { useState } from "react";
import "./styles.css";

export default function App() {
  const [title, SetTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Shopping" },
    { id: 2, title: "Books" }
  ]);

  const submitBtn = (title) => {
    const newTodo = { id: todos.length + 1, title: title };
    setTodos([...todos, newTodo]);
  };
  const deleteBtn = (todo) => {
    const afterDelete = todos.filter((rest) => todo !== rest);
    setTodos(afterDelete);
  };

  return (
    <div className="App">
      <input
        type="text"
        id="input-field"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
        placeholder="todo title"
      />
      <button onClick={() => submitBtn(title)}>Submit</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div
              style={{
                display: "flex",
                margin: "5px",
                padding: "0px 20px",
                backgroundColor: "aquamarine",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <p>{todo.title} </p>
              <button
                style={{ height: "20px" }}
                onClick={() => deleteBtn(todo)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
