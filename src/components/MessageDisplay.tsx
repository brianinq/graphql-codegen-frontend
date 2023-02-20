import { Message } from "../types";
import Branch from "./Branch";

type Props = {
  index: Number;
  message: Message;
};

function MessageDisplay({ message, index }: Props) {
  return (
    <>
      <div className="group mb-2 shrink-0 flex items-center drop-shadow-md relative w-48 h-20 bg-rose-100 rounded-sm">
        <Branch trunk={index === 0} />
        <p className="text-md text-black font-bold px-4">{message.body}</p>
      </div>
    </>
  );
}

export default MessageDisplay;
