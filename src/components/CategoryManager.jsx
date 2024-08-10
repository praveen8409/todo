import React, { useState } from 'react';

function CategoryManager({ categories, addCategory }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleAddCategory}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
     
    </div>
  );
}

export default CategoryManager;
