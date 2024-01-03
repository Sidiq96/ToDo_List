// Importing the 'useState' hook from React to manage state in functional components
import { useState } from "react";

// Importing the external stylesheet for styling
import "./styles.css";

// Defining the main functional component named 'App'
export default function App() {
  // State hook to manage the input value for a new to-do item
  const [newItem, setNewItem] = useState("");

  // State hook to manage the list of to-do items
  const [todos, setTodos] = useState([]);

  // Function to handle form submission and add a new to-do item to the list
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      // Using spread operator to create a new array with the current to-dos and adding a new to-do
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }
  // Function to toggle the completion status of a todo item
  function toggleTodo(id, completed) {
    // Using the setTodos function to update the state of todos
    setTodos((currentTodos) => {
      // Mapping through the current array of todos
      return currentTodos.map((todo) => {
        // Checking if the current todo's id matches the provided id
        if (todo.id === id) {
          // If matched, create a new todo object with the same properties but updated completed status
          return { ...todo, completed };
        }
        // If not matched, return the original todo object unchanged
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    // Using the setTodos function to update the state of todos
    setTodos((currentTodos) => {
      // Filtering out the todo item with the provided id
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // JSX code representing the structure of the component
  return (
    <>
      {/* Form for adding a new to-do item */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="Item">New Item</label>
          {/* Input field to capture the new to-do item's title */}
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="Item"
          />
        </div>
        {/* Button to submit the form and add a new to-do item */}
        <button className="btn">Add</button>
      </form>

      {/* Heading for the to-do list */}
      <h1 className="header">To Do List</h1>

      {/* List of to-do items */}
      <ul className="list">
        {/* Mapping through each to-do item and rendering a list item for each */}
        {todos.map((todo) => {
          // Mapping through each todo item in the 'todos' array
          return (
            // Returning a list item with a unique key based on todo's id
            <li key={todo.id}>
              {/* Checkbox to mark the to-do item as completed */}
              <label>
                {/* Input checkbox with checked attribute based on todo's completed status */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  // onChange event handler to toggle the completion status when checkbox is clicked
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {/* Displaying the title of the to-do item */}
                {todo.title}
              </label>
              {/* Button to delete the to-do item */}
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
