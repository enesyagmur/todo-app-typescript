import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="w-[400px] flex flex-col items-start justify-evenly">
      <Todo todo={"Yazılım"} isDone={true} />
      <Todo todo={"İngilizce"} isDone={false} />
      <Todo todo={"Spor"} isDone={true} />
      <Todo todo={"Din"} isDone={false} />
    </div>
  );
};

export default TodoList;
