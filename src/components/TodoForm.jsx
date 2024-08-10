import React, { useState } from 'react';

function TodoForm({ addTodo, categories }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && date && category) {
      addTodo({
        text,
        date,
        category,
        completed: false,
      });
      setText('');
      setDate('');
      setCategory('');
    }
  };



  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Add Todo</button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
