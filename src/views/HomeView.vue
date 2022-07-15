<script setup>
import PageContainer from '../components/PageContainer.vue';
import TodoList from '../components/TodoList.vue';
import AddTodoList from '../components/AddTodoList.vue';
</script>

<template>
    <PageContainer centered = true class = "head" title="JSON Dummy TodoList" />
    <AddTodoList/>
    <Suspense>
    <TodoList/>
    </Suspense>
</template>

<style scoped>
    .head{
        font-size: 24px;
        color: blueviolet;
        text-align: center;
    }
</style>