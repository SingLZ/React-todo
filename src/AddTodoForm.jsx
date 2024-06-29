import React from 'react';

function AddTodoForm(props) {
    function handleAddTodo(event){
        event.preventDefault();
        const todoTitle = event.target.title.value
        props.onAddTodo(todoTitle)
        console.log(todoTitle);
        event.target.reset();

    };
    return (
        <div>
            <form onSubmit={handleAddTodo}><label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" name="title"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;