import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todo, onRemoveTodo}) {
    return (
    <ul>
      {todo.map(item => {
        return ( 
        <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/> 
      );
        })}
    </ul>
    );
  }

export default TodoList;