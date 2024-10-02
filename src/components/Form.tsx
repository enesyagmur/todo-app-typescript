import { MdSend } from "react-icons/md";
type TodoFormProps = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodoFunc: (e: React.FormEvent) => void;
};
// propsların karşılığını belirtiyoruz

const Form: React.FC<TodoFormProps> = ({
  newTodo,
  setNewTodo,
  addTodoFunc,
}) => {
  return (
    <form
      className="w-[400px] h-[80px] flex items-center justify-between"
      onSubmit={(e) => addTodoFunc(e)}
    >
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        placeholder="Yeni Görev"
        className="w-10/12 h-3/6 p-2 bg-neutral-200 capitalize"
      />
      <button type="submit">
        <MdSend className="text-blue-900 text-3xl mr-3  hover:text-green-900 cursor-pointer" />
      </button>
    </form>
  );
};

export default Form;
