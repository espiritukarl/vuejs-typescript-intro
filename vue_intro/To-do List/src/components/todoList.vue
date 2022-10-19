<template>
    <span :class="{strikeThrough: done}">{{ title }}</span>
    <button @click="$emit('testClick')">X</button>
</template>

<script>
export default {
    props: ['title', 'done'],
    emits: ['testClick', 'spanClick'],
}
</script>

<style>
.strikeThrough {
    text-decoration: line-through;
}
</style>