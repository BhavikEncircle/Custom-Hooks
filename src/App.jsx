import React from "react";
import Likes from "./Likes";
import Score from "./Score";
import Quantity from "./Quantity";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Custom Hooks Task</h1>
      <Likes />
      <Score />
      <Quantity />
    </div>
  );
};

export default App;
