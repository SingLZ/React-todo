import './App.css';
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const todoList = [
    {id: 1,
      title: "Complete CTD Assignment"
  
    },
    {id: 2,
      title: "Complete Hacker Rank"
      
    },
    {id: 3,
      title: "Complete Warmup"
      
    },
    {id: 4,
      title: "Complete Reading Syllabus"
      
    },
    {id: 5,
      title: "Complete updating resume"
      
    }
  
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm/>
      <TodoList todo={todoList}/>
    </div>


    
  );
}

export default App;
