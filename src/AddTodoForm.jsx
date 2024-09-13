import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './TodoListItem.module.css';

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = React.useState("")

    function handleTitleChange(event){
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    function handleAddTodo(event){
        event.preventDefault();
        onAddTodo({title: todoTitle, id:Date.now()})
        console.log(todoTitle);
        setTodoTitle("")

    };
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    todoTitle={todoTitle} handleTitleChange={handleTitleChange} className={styles.input}
                >
                    <strong className={styles.title}>Title</strong>
                </InputWithLabel>
    
                
                <button className={styles.button}>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;