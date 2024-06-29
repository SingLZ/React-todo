function TodoListItem(props) {
    return (
        <li key={props.item.id}>
            <span>{props.item.title}</span>
            </li>
    );
}

export default TodoListItem;