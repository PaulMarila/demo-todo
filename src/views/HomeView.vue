<script setup>
import PageContainer from '../components/PageContainer.vue';
import TodoList from '../components/TodoList.vue';
</script>

<template>
    <PageContainer centered=true class="head" title="JSON Dummy TodoList" />
    <Suspense>
        <TodoList />
    </Suspense>
</template>

<style scoped>
.head {
    font-size: 24px;
    color: blueviolet;
    text-align: center;
}
</style>