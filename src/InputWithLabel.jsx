import React from "react";

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

export default InputWithLabel;