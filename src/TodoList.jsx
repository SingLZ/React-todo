import React from 'react';

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
  
  ]

function TodoList() {
    return (
    <lu>
      {todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>;
      })}
    </lu>
    )

}


export default TodoList;