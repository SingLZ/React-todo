import React from 'react';

function AddTodoForm() {
    return (
        <div>
        <form><label htmlFor="todoTitle">Title</label></form>
        <input id="todoTitle"/>
        <button>Add</button>
        </div>
    )
}

export default AddTodoForm;