function getTodos() {
  if (process.browser) {
    if (localStorage.getItem('todos') !== null) {
      return JSON.parse(localStorage.getItem('todos'))
    } else {
      return []
    }
  }
}

function setTodos(updatedTodos) {
  if (process.browser) {
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }
}

export default {
  initialiseStore(state) {
    state.todos = getTodos()
  },

  addTodo(state, payload) {
    state.todos.push(payload)

    let storedTodos = getTodos()
    storedTodos.push(payload)
    setTodos(storedTodos)
  },

  checkTodo(state, payload) {
    const todo = state.todos.filter( e => e.id === payload)
    todo[0].isChecked = true

    let storedTodos = getTodos()
    const updatedTodos = storedTodos.map(e => {
      if (e.id === payload) {
        return {description: e.description, isChecked:true, id: e.id} 
      }
      return e
    })
    setTodos(updatedTodos)
  },

  deleteTodo(state, payload) {
    const todoInd = state.todos.findIndex( e => e.id === payload)
    state.todos.splice(todoInd, 1)

    let storedTodos = getTodos()
    const updatedTodos = storedTodos.filter(e => e.id !== payload)
    setTodos(updatedTodos)
  }
}