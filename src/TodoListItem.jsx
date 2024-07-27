function TodoListItem({item, onRemoveTodo}) {
    return (
        <li key={item.id}>
            <span>{item.title}</span>
            <span> <button type="button" onClick={() => onRemoveTodo(item.id)}>
                Remove</button> </span>
            </li>
    );
}

export default TodoListItem;