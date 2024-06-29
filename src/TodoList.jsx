import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props) {
    return (
    <ul>
      {props.todo.map(function(item) {
        return ( 
        <TodoListItem item={item}/> 
      );
        })}
    </ul>
    );
  }

export default TodoList;