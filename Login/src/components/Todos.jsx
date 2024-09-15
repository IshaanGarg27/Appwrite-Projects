import React, { useEffect, useState } from "react";
import { database } from "../appwrite/appwriteConfig";

function Todos() {
  const [todoList, setTodoList] = useState([]);
  const [loader, setLoader] = useState(false);

  //Getting Todo List
  useEffect(() => {
    setLoader(true);

    const getTodos = database.listDocuments(
      "66e03c63000e249b1eb8",
      "66e6d7d70030487cc495"
    );

    getTodos.then(
      function (response) {
        setTodoList(response.documents);
      },
      function (error) {
        console.log(error);
      },
      setLoader(false)
    );
  }, []);

  //Deleting Todo Items
  const deleteTodos = (id) => {
    const promise = database.deleteDocument(
      "66e03c63000e249b1eb8",
      "66e6d7d70030487cc495",
      id
    );

    promise.then(
      function (response) {
        console.log(response.document);
        setTodoList((prevItems) => prevItems.filter((item) => item.$id !== id));
      },
      function (error) {
        console.log(error);
      }
    );
    // window.location.reload()
  };

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todoList &&
            todoList.map((items) => (
              <div key={items.$id}>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>{items.todos}</div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => {
                        deleteTodos(items.$id);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
