import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
