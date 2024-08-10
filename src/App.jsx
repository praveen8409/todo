import React, { useState } from 'react';
import Search from './components/Search';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CategoryManager from './components/CategoryManager';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState(['Work', 'Personal', 'Shopping', 'Others']);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (index, newTodo) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, ...newTodo } : todo
    );
    setTodos(newTodos);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const filteredTodos = todos.filter((todo) => 
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    todo.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
     <h1 className="text-center my-4 display-4 fw-bold text-primary" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  TODO APP
</h1>

      <div className="row mb-3">
        <div className="col-md-6">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="col-md-6">
          <CategoryManager categories={categories} addCategory={addCategory} />
        </div>
      </div>
      <TodoForm addTodo={addTodo} categories={categories} />
      <TodoList 
        todos={filteredTodos} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete} 
        editTodo={editTodo} 
      />
    </div>
  );
}

export default App;
