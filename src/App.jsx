import { useState, useEffect } from "react"
import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  //state
  const [text, setText] = useState("") //{text} can now be used anywhere and the value will be equal to the e.target.value in the form.jsx
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  //Run Once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])
  //useEffect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [status, todos])
  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true)) //we want only ones where todo.completed = true
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default: 
        setFilteredTodos(todos)
        break
    }
  }
  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  //get local todos
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else {
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoFromLocal)
    }
  }


  return (
    <div className="App">
      <header>
      <h3>Mavic's Todo List </h3>
        
      </header>
      <Form setStatus={setStatus} text={text} setText={setText} setTodos={setTodos} todos={todos}/>
      <TodoList  filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/> 
    </div> 
  );////now that it's been set, we can pass the {text} as a prop to our Todo.jsx to add them
}

export default App;
