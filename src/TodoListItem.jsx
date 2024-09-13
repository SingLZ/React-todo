import styles from './TodoListItem.module.css';

function TodoListItem({item, onRemoveTodo}) {
    return (
        <li key={item.id} className = {styles.ListItem} >
            <span>{item.title}</span>
            <span> <button type="button" onClick={() => onRemoveTodo(item.id)} className={styles.button}>
                Remove</button> </span>
            </li>
    );
}

export default TodoListItem;