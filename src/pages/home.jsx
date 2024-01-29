import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import Plus from "../icons/Plus";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // Add new-item to list
  const Add_item_to_list = (e) => {
    e.preventDefault();
    const user_value = e.target[0].value;
    const todo_item = {
      id: Date.now(),
      text: user_value,
      isDone: false,
    };
    setItems((prev) => [...prev, todo_item]);
    setInputValue("");
  };

  // Update item
  const update_item = (id, isDone = true) => {
    const item = items.map((item) => {
      if (item.id == id) {
        return { ...item, isDone };
      }
      return item;
    });
    setItems(item);
  };

  // Delete single Item
  const delete_item = (id) => {
    const temp = items.filter((item) => item.id !== id);
    setItems(temp);
  };

  // delete complete Items
  const delete_completed_item = () => {
    const temp = items.filter((item) => !item.isDone);
    setItems(temp);
  };

  // delete all items
  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("Items");
  };

  // update localstorage
  useEffect(() => {
    if (typeof localStorage && items) {
      if (items.length > 0) {
        localStorage.setItem("Items", JSON.stringify(items));
      }
    }
  }, [items]);

  // set items on first-load
  useEffect(() => {
    if (typeof localStorage) {
      const Items = JSON.parse(localStorage.getItem("Items"));
      if (Items) {
        setItems(Items);
      }
    }
  }, []);

  return (
    <div className="w-full h-[300px] bg-gradient-to-b from-transparent to-primary">
      <div className="h-[150px]"></div>
      {/* Title */}
      <h1 className="w-fit text-white mx-auto text-5xl font-extrabold mb-4 drop-shadow-md">
        Viva TO-DO
      </h1>
      <div className="max-w-[600px] bg-black-100 shadow-xl p-5 rounded-lg mx-auto">
        {/* Input form */}
        <form onSubmit={Add_item_to_list}>
          <div
            className="flex rounded-[5px] overflow-hidden border border-black/30"
            title="Add item"
          >
            <input
              type="text"
              value={inputValue}
              className="bg-black-200 text-gray-200 w-full py-2 px-4 outline-none"
              placeholder="Type here.."
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="py-2 px-4 flex text-sm items-center gap-2 bg-primary hover:bg-primary/70 duration-150 text-white/80">
              <Plus />
            </button>
          </div>
        </form>

        {/* List of items */}
        <div className="border-t my-5 border-white/10 min-h-[300px]">
          {items?.length > 0 &&
            items.map((item) => (
              <React.Fragment key={item.id}>
                <Item
                  item={item}
                  update_item={update_item}
                  delete_item={delete_item}
                />
              </React.Fragment>
            ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => delete_completed_item()}
            className="mt-3 text-gray-300 bg-black-200 text-xs px-3 py-1 rounded-sm hover:bg-black/30"
          >
            Clear completed
          </button>
          <button
            onClick={() => clearItems()}
            className="mt-3 text-gray-300 bg-black-200 text-xs px-3 py-1 rounded-sm hover:bg-black/30"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
