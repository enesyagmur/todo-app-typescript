import { GoCheckbox } from "react-icons/go";
import { CiViewTimeline } from "react-icons/ci";

const Todo = ({ todo, isDone }) => {
  return (
    <div className="w-10/12 h-[50px] flex items-center justify-between border border-1 border-neutral-500 text-neutral-300 mt-3 cursor-pointer">
      <p className="pl-4 font-semibold">{todo}</p>
      <div className="w-[35px] h-[35px] flex items-center justify-center border-1 border-gray-800 ">
        {isDone ? (
          <GoCheckbox className="text-green-800 text-2xl mr-4" />
        ) : (
          <CiViewTimeline className="text-neutral-500 text-2xl mr-4" />
        )}
      </div>
    </div>
  );
};

export default Todo;
