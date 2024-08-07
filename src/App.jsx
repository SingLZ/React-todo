import './App.css';
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  const [todoList, setTodoList] = 
  React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  const [isLoading, setIsLoading] = 
  React.useState(true);

  React.useEffect(() => {
    function sideEffectHandler() {
      return new Promise((resolve, reject) => {
        setTimeout(()=> { resolve({ data: {todoList: todoList } })}, 2000);
      });
    }
    sideEffectHandler()
    .then((result) => {
      setTodoList(result.data.todoList); // Updating the todoList state with fetched data
      setIsLoading(false); // Setting loading to false after tasks are fetched
    })
}, []);

  React.useEffect(() => {
    if (!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList) )
    }
  }, [todoList, isLoading]) 



  function addTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id){
    const newList = todoList.filter(
      todo => todo.id !== id
    );

    setTodoList(newList)
  }

  return (
    <>
      <h1>Todo List</h1>
      {isLoading ? (<p>Loading...</p>) : (
        <>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todo={todoList} onRemoveTodo={removeTodo}/>
        </>
      )}
    </>


    
  );
}

export default App;
