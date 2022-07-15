<script setup>

import { computed, ref } from 'vue';
import printTodoItem from '../utils/printTodoItem';

defineProps({
    id: Number,
    title: String,
    completed: Boolean,
    userId: Number
})
const emit = defineEmits(['todoItemDeleted', 'todoItemCompleted']);

const newTitle = computed(() => printTodoItem(props.id, props.title, props.completed));

function handleChange(event) {
    emit('todoItemCompleted', event.target.checked);
}
</script>

<template>
    <p>{{ userId }}</p>
    <p>{{ title }}</p>
    <input class="read_only" type="checkbox" :checked="completed" @change="handleChange" />
    <button @click="$emit('todoItemDeleted')">Delete</button>
</template>

<style scoped>
/* .read_only {
    pointer-events: none;
} */
</style>