import React from "react";
import Check from "../icons/Check";
import Cross from "../icons/Cross";

const Item = ({ item, update_item, delete_item }) => {
  // handle update
  const handleUpdate = (id, isDone) => {
    update_item(id, !isDone);
  };

  // handle delete
  const handleDeleteItem = (id) => {
    delete_item(id);
  };

  return (
    <div className="border-b border-white/10 py-3 flex justify-between text-gray-200 group">
      <div className="w-full flex items-center gap-3">
        <div
          className={`min-w-3 min-h-3 ${
            item?.isDone ? "bg-success" : "bg-secondary"
          } rounded-lg`}
        ></div>
        <p
          className={
            item?.isDone
              ? "font-bold text-gray-400 line-through"
              : "font-bold group-hover:scale-105 duration-200 text-gray-200"
          }
        >
          {item?.text}
        </p>
      </div>
      <div className="w-[100px] flex gap-3 justify-end text-white/50">
        <button
          className="hover:text-white"
          title="Mark done"
          onClick={() => handleUpdate(item?.id, item?.isDone)}
        >
          <Check />
        </button>
        <button
          className="hover:text-white"
          title="Delete"
          onClick={() => handleDeleteItem(item?.id)}
        >
          <Cross />
        </button>
      </div>
    </div>
  );
};

export default Item;
