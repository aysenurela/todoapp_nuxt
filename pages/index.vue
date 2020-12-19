<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        todoapp
      </h1>
      <div class="todos">
        <ul>
          <li 
            v-for="(todo, index) in todos" 
            :key="index"
            @click="checkTodo(todo.id)"
            v-bind:class="{checked: todo.isChecked}"
          >
            {{todo.description}}
          </li>
        </ul>
        <form>
          <input type="text" placeholder="New todo" v-model="todoDesc">
          <button @click.prevent="addTodo">Add todo</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoDesc: '',
    }
  },
  
  // Since Vuex stores are reactive, the simplest way to "retrieve" state from it is simply returning some store state from within a computed property
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  
  methods: {
    addTodo() {
      if (this.todoDesc) {
        this.$store.commit('addTodo', {
          description: this.todoDesc,
          isChecked: false,
          id: +new Date()
        });
        this.todoDesc = ''
      }
    },
    checkTodo(id) {
      this.$store.commit('checkTodo', id)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

li {
  cursor: pointer;
}

li.checked {
  text-decoration: line-through;
}
</style>