import { TodosType } from "../../Types/TodosType";
import { CgClose } from "react-icons/cg";

type TodoListProps = {
  todos: TodosType[];
  setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodoDone = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
    );
  };

  console.log(todos);

  return (
    <div className="w-[400px] flex flex-col items-start justify-evenly">
      {todos &&
        todos.map((todo, index) => (
          <div
            key={index}
            className="w-10/12 h-[50px] flex items-center justify-between  text-neutral-300 mt-5 cursor-pointer"
          >
            {todo.isDone ? (
              <p className="w-11/12 h-[50px] flex items-center pl-4 font-semibold line-through capitalize text-neutral-500 border border-1 border-green-900">
                {todo.todo}
              </p>
            ) : (
              <p
                className="w-11/12 h-[50px] flex items-center pl-4 font-semibold capitalize border border-1  border-neutral-500 hover:border-green-700"
                onClick={() => changeTodoDone(todo.id)}
              >
                {todo.todo}
              </p>
            )}

            <CgClose
              className="text-neutral-500 text-2xl hover:text-red-900 ml-4"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default TodoList;
