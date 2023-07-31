

const Todo = (props) => {

    // const todos = props.todos;
    const { todos, title, handldeDeleteTodo } = props;
    const handldeDelet = (id) => {
        handldeDeleteTodo(id)
    }
    return (
        <div className='Todo-container'>
            <div className="Title">
                {title}
            </div>

            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='Todo-child' >{todo.title}
                            &nbsp;<span onClick={(id) => handldeDelet(todo.id)}>x</span>
                        </li>
                    </div>
                )
            })}
            <hr />
        </div>

    )
}
export default Todo;