import React from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo,editTodo}) {
  return (
    <div>
    <li className="style" >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => editTodo(id)}>Edit</button>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
      <select>
      <option value="white">select</option>
      <option>OnProgress</option>
      <option>Pending</option>
      <option>Completed</option></select>
    </li>
    </div>
  )
  }