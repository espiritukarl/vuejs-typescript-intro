<template>
  <main>
    <h1 class="mb-5 mt-5">Vue 3 Todo App</h1>
    <section class="searchBar">
      <form @submit.prevent="addNewTodo" class="form-floating">
        <input v-model="newTodo" id="newTodo" placeholder="" class="form-control form-control-sm border border-primary">
        <label for="newTodo">Enter new task</label>

        <div class="submit-buttons mt-2">
          <button class="btn btn-outline-primary btn-sm">Add New Todo</button>
          <button class="btn btn-outline-primary btn-sm" @click="markAllDone">Mark All Done</button>
          <button class="btn btn-outline-danger btn-sm" @click="deleteAll">Delete All</button>
        </div>
      </form>
    </section>

    <ul class="mb-5">
      <li class="todoTasks" v-for="(todo,index) in todos" :key="todo.id" @click="toggleDone(todo)">
        <TodoList @test-click="removeTodo(index)" :index=index :title="todo.content" :done="todo.done" />
      </li>
    </ul>
  </main>
</template>

<script>
import { ref } from 'vue';
import TodoList from './components/todoList.vue';

export default {
  setup() {
    const newTodo = ref("");
    const todos = ref([]);
    let tempID = 0;

    function addNewTodo() {
      if (newTodo.value.length) {
        todos.value.push({
          id: tempID++,
          done: false,
          content: newTodo.value + " "
        });
      }
      newTodo.value = "";
    }
    function toggleDone(todo) {
      todo.done = !todo.done;
    }
    function removeTodo(index) {
      todos.value.splice(index, 1);
    }
    function markAllDone() {
      if (todos.value.every((todo) => todo.done == true)) {
        todos.value.forEach((todo) => todo.done = false);
      }
      else {
        todos.value.forEach((todo) => todo.done = true);
      }
    }
    function deleteAll() {
      todos.value.splice(0, todos.value.length)
    }
    return {
      addNewTodo,
      toggleDone,
      removeTodo,
      markAllDone,
      deleteAll,
      newTodo,
      todos,
      tempID,
    };
  },
  components: { TodoList }
}
</script>

<style>
h1 {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  text-shadow: 1px 1px gray;
}

.searchBar {
  display: flex;
  justify-content: center;
}

.submit-buttons {
  display: flex;
  justify-content: end;
  gap: 10px;
}

input {
  min-width: 900px;
}

.todoTasks {
  cursor: pointer;
}

li {
  margin: 0 auto;
  list-style: none;
  max-width: 800px;
}

input {
  background-color: transparent !important;
}
</style>