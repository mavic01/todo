

const Form = ({text, setText, setTodos, todos, setStatus}) => {
    //js func to update the text state in App.js
    const inputTextHandler = (e) => {
        setText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {text: text, completed: false, id: Math.random() * 1000}])
        setText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
    <form>
        <input value={text} type="text" className="todo-input" onChange={inputTextHandler} />
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    </div>
    )
}

export default Form