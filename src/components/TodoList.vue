<script setup>


    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    
</script>

<template>
<ul>
    <li v-for="todo of todos" v-bind:key="todo.id">{{ todo.title }}</li>
    <li>2</li>
    <li>3</li>
</ul>
</template>

<style scoped>

</style>