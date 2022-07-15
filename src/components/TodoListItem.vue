<script setup>
defineProps({
    id: Number,
    title: String,
    completed: Boolean,
    userId: Number
})
</script>

<template>
    <p>{{ userId }}</p>
    <p>{{ title }}</p>
    <input class="read_only" type="checkbox" :checked="completed" />
    <button>Delete</button>
</template>

<style scoped>
.read_only {
    pointer-events: none;
}
</style>