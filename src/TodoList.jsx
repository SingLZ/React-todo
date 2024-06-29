import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props) {
    return (
    <ul>
      {props.todo.map(function(item) {
        return ( 
        <TodoListItem key={item.id} item={item}/> 
      );
        })}
    </ul>
    );
  }

export default TodoList;