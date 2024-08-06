function TodoListItem({item}) {
    return (
        <li key={item.id}>
            <span>{item.title}</span>
            </li>
    );
}

export default TodoListItem;