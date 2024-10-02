import { MdSend } from "react-icons/md";

const Form = () => {
  return (
    <form className="w-[400px] h-[80px] flex items-center justify-between">
      <input
        type="text"
        placeholder="Yeni Görev"
        className="w-10/12 h-3/6 p-2 bg-neutral-200"
      />
      <MdSend className="text-blue-900 text-3xl mr-3  hover:text-green-900 cursor-pointer" />
    </form>
  );
};

export default Form;
