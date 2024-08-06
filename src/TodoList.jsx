import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todo}) {
    return (
    <ul>
      {todo.map(item => {
        return ( 
        <TodoListItem key={item.id} item={item}/> 
      );
        })}
    </ul>
    );
  }

export default TodoList;