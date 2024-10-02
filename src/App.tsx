import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-neutral-800">
      <Title />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
