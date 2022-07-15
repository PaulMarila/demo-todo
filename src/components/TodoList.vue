<script setup>
import TodoListItem from './TodoListItem.vue';
import { ref, reactive, toRefs, watch, computed } from 'vue';

const response = await fetch('https://jsonplaceholder.typicode.com/todos');
let todos = await response.json();
//todos = todos.slice(0, 10);
//reactiveTodos.value.push();
const reactiveTodos = ref(todos);
const counter = reactive({
    deleted: 0,
    updated: 0,
    id: todos.at(-1).id
});
// const counter = ref(0);
function getUpdatedCounter() {
    return counter.updated;
}
watch(() => counter.updated, (newValue, oldValue) => {
    console.log(`Counter updated ${oldValue} -> ${newValue}`);
});
function handleTodoItemDeleted(todoItemId) {
    reactiveTodos.value = reactiveTodos.value.filter(item => item.id !== todoItemId);
    counter.deleted++;
}
function handleTodoItemCompleted(todoItemId, completed) {
    reactiveTodos.value = reactiveTodos.value.map(todo => {
        if (todo.id === todoItemId) {
            return {
                ...todo,
                completed: completed
            }
        } else {
            return todo;
        }
    });
    counter.updated++;
}

function handleTodoItemAdded() {
    const newTodo = {
        id: counter.id++,
        title: title.value,
        completed: checkbox.value,
        userId: userId.value
    };
    reactiveTodos.value.splice(0, 0, newTodo);
    title.value = "";
    userId.value = null;
    checkbox.value = false;
    // console.log(todos.at(-1).id);
    // console.log(counter.id);
}

const checkbox = ref(false);
const title = ref('');
const userId = ref(null);
const computedCondition = computed(() => userId.value != 0 && userId.value != null && title.value != "");
watch(checkbox, newValue => {
    console.log(`checkbox: ${newValue}`);
});
</script>

<template>
    <form class="form" @submit.prevent>
        <label for="title">Title:</label><br>
        <input v-model="title" type="text" required><br>
        <label for="userId">User ID:</label><br>
        <input v-model="userId" type="number" required><br>
        <label for="userId">Completed:</label>
        <input v-model="checkbox" type="checkbox" value="Completed:"><br>
        <button @click="handleTodoItemAdded" :disabled="!computedCondition">Add Item</button>
    </form>
    <span>Two-way data binding (v-model):</span>
    <input type="checkbox" v-model="checkbox" />
    <p>Updated: {{ counter.updated }}</p>
    <p>Deleted: {{ counter.deleted }}</p>
    <div class="grid-container">
        <TodoListItem v-for="todo of reactiveTodos" :key="todo.id" :id="todo.id" :userId="todo.userId"
            :title="todo.title" :completed="todo.completed" @todo-item-deleted="handleTodoItemDeleted(todo.id)"
            @todo-item-completed="completed => handleTodoItemCompleted(todo.id, completed)" />
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 50px auto 100px 300px;
    justify-content: center;
    grid-gap: 50px;
    border: 100px 100px blueviolet;
}

.form {
    text-align: center;
    row-gap: 10px;
    ;
}
</style>