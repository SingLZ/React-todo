import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './components/TodoListItem.module.css';



function App() {
  const [todoList, setTodoList] = 
  React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  const [isLoading, setIsLoading] = 
  React.useState(true);

  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`;


    console.log(url);

    try {
      const response = await fetch (url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map(todo => ({
          id: todo.id,
          title: todo.fields.title
      }));
        
      console.log(todos);

      setTodoList(todos);
      setIsLoading(false);
    

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  
  };

  const addTodoToAirtable = async (newTodo) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          title: newTodo.title // Airtable field name should be 'title'
        }
      })
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add the new todo with Airtable's ID to the local state
      setTodoList([...todoList, { id: data.id, title: data.fields.title }]);

    } catch (error) {
      console.error('Error adding todo to Airtable:', error.message);
    }
  };
  
  React.useEffect(() => {
    fetchData();
}, []);

  React.useEffect(() => {
    if (!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList) )
    }
  }, [todoList, isLoading]) 



  function addTodo(newTodo){
    addTodoToAirtable(newTodo);
  }

  function removeTodo(id){
    const newList = todoList.filter(
      todo => todo.id !== id
    );

    setTodoList(newList)
  }

  return (
    <div className={styles.body}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <h1 className={styles.heading}>Todo List</h1>
          {isLoading ? (<p className={styles.loading}>Loading...</p>) : (
          <>
          <div className={styles.addTodoForm}>
              <AddTodoForm onAddTodo={addTodo} />
          </div>
          <TodoList todo={todoList} onRemoveTodo={removeTodo} className={styles.todoList}/>
          </>
          )}
          </>
        }/>
        
        <Route path="/new" element={
          <h1>New Todo List</h1>
        }/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
