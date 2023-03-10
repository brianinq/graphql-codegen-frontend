import React from "react";
import { User } from "../types";
import MessageDisplay from "./MessageDisplay";

type Props = {
  user: User;
};

function UserDisplay({ user }: Props) {
  return (
    <div className="flex gap-x-24 justify-center">
      <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-rose-100 w-48 h-20">
        <p className="text-xl text-black font-bold">{user.name}</p>
      </div>
      <div className="">
        {user.messages.map((message, index) => (
          <MessageDisplay key={index} index={index} message={message} />
        ))}
      </div>
    </div>
  );
}

export default UserDisplay;
