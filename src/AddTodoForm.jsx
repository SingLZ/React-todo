import React from 'react';

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
                <label htmlFor="todoTitle">Title</label>
                <input value={todoTitle} onChange={handleTitleChange} id="todoTitle" name="title"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;