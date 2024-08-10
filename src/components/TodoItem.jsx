import React, { useState } from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDate, setNewDate] = useState(todo.date);
  const [newCategory, setNewCategory] = useState(todo.category);

  const handleEdit = () => {
    editTodo(index, { text: newText, date: newDate, category: newCategory });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
    setNewDate(todo.date);
    setNewCategory(todo.category);
  };

  function getRandomColorClass() {
    const colors = ['text-primary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-dark'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="form-control mb-2"
          />
          <div className="d-flex">
            <button onClick={handleEdit} className="btn btn-success me-2 w-50">Save</button>
            <button onClick={handleCancel} className="btn btn-secondary w-50">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{todo.text}</h5>
              
            </div>
            <div>
            <p className={`fw-bold ${getRandomColorClass()}`}>{todo.date} - {todo.category}</p>
            </div>
            <div>
              <button onClick={() => setIsEditing(true)} className="btn btn-secondary me-2">Edit</button>
              <button onClick={() => toggleComplete(index)} className="btn btn-success me-2">
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTodo(index)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
