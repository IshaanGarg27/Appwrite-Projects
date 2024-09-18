import React, { useState } from "react";
import { database } from "../appwrite/appwriteConfig";
import { ID } from "appwrite";

function Todoform() {
  const [todos, setTodos] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const promise = database.createDocument(
      "66e03c63000e249b1eb8",
      "66e6d7d70030487cc495",
      ID.unique(),
      { todos }
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    e.target.reset();
    // window.location.reload()
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mt-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center mb-10"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Todo"
            className="border p-2 w-2/3 rounded-md"
            onChange={(e) => {
              setTodos(e.target.value);
            }}
          />
          <button
            className="bg-purple-500 p-2 text-white ml-2 rounded-md"
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default Todoform;
