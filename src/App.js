import logo from './logo.svg';
import './App.css';

const todoList = [
  {id: 1,
    title: "Complete CTD Assignment"

  },
  {id: 2,
    title: "Complete Hacker Rank"
    
  },
  {id: 3,
    title: "Complete Warmup"
    
  }
]

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <lu>
      {todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>;
      })}
    </lu>
    </div>

    
  );
}

export default App;
