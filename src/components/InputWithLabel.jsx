import React from "react";
import PropTypes from 'prop-types';

function InputWithLabel({todoTitle, handleTitleChange, children}){
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    })

    return (
    <>
    <label htmlFor="todoTitle">{children}</label>
    <input value={todoTitle} onChange={handleTitleChange} id="todoTitle" name="title" ref={inputRef} />
    </>
)
}

InputWithLabel.PropTypes = {
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
    children: PropTypes.node

}

export default InputWithLabel;