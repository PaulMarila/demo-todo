<script setup>
import TodoListItem from './TodoListItem.vue';

const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const todos = await response.json();
const nameVar = "def";
</script>

<template>
    <div class="grid-container">
        <TodoListItem
            v-for="todo of todos"
            :key="todo.id"
            :id="todo.id"
            :userId="todo.userId"
            :title="todo.title"
            :completed="todo.completed"
        />
    </div>
</template>

<style scoped>
.grid-container{
    display:grid;
    grid-template-columns: 50px auto 100px 300px;
    justify-content: center;
    grid-gap: 50px;
    border: 100px 100px blueviolet;
}
</style>