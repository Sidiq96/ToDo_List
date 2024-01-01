import "./styles.css";

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="Item">New Item</label>
          <input type="text" id="Item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header"> To Do List</h1>
      <ul className="list">
        <li>
          <label type="checkbox">
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
