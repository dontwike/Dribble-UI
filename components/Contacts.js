import Image from "next/image";
import React from "react";

const Contacts = ({ name, src, status }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer relative p-10 mt-2 font-semibold">
      <Image
        src={src}
        height={50}
        width={50}
        className="rounded-full cursor-pointer ml-3"
        alt="No image"
      />
      <p className="hidden sm:inline-flex text-base">{name}</p>
      {status === "online" && (
        <div className="bg-green-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2"></div>
      )}
      {status === "offline" && (
        <div className="bg-gray-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2"></div>
      )}
      <button className="m-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-1 px-3 rounded-full">
        Add
      </button>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-1 px-3 rounded-full">
        Block
      </button>
    </div>
  );
};

export default Contacts;
