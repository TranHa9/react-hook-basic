

const Todo = (props) => {

    const todos = props.todos;
    return (
        <div className='Todo-container'>
            {todos.map(todo => {
                return (
                    <li className='Todo-child' key={todo.id}>{todo.title}</li>
                )
            })}
        </div>
    )
}
export default Todo;