import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

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

  TodoList.PropTypes = {
    todo: PropTypes.array,
    onRemoveTodo : PropTypes.func

}
export default TodoList;