import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";
import TodoList from "./components/todoList/TodoList";
import { TodosType } from "./Types/TodosType";

function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodosType[]>([]);
  // buradaki tanımlamayı farklı yerlerde de kullanacağımız için ayrıca oluşturduk
  const addTodoFunc = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.length > 0) {
      setTodos((prev) => [
        ...prev,
        { id: todos.length + 1, todo: newTodo, isDone: false },
      ]);
      //setTodos un içerisinde bulunan ın üzerine yeni eleman ekleme yapıyoruz
      setNewTodo("");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-neutral-800">
      <Title />
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodoFunc={addTodoFunc}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
