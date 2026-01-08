import React from "react";
import useCounter from "./useCounter";

const Likes = () => {
  const { count, increment } = useCounter(0, 1);
  return (
    <div className="p-4  border rounded w-100 mx-auto mt-10 text-center">
      <h2 className=" text-2xl font-bold">Like Counter</h2>

      <h3 className=" mt-2 text-xl ">
        You have liked this post <span className="font-bold">{count}</span>{" "}
        times.
      </h3>
      <button
        className="mt-2 bg-blue-500 text-white text-xl px-4 py-2 rounded "
        onClick={increment}
      >
        Like
      </button>
    </div>
  );
};

export default Likes;
