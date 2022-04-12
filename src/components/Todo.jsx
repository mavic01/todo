

const Todo = ({text, todo, setTodos, todos}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(elemen => elemen.id !== todo.id)) //comparing the element we're clicking on with dat of the state
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id){ //again we're comparing to the one that we're clicking to dat of the STATE
                return {
                    ...item, completed: !item.completed //getting the item object and changing the completed value to its opposite

                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed && "completed"}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo