<template>

    <div class="todoItem mt-5">
        <span class="border-bottom border-primary" :class="{strikeThrough: done}">Task #{{ index+1 + ": " + title
        }}</span>
        <button class="btn btn-danger btn-sm" @click="$emit('testClick')">X</button>
    </div>
</template>

<script>
export default {
    props: ['title', 'done', 'index'],
    emits: ['testClick', 'spanClick'],
}
</script>

<style>
.strikeThrough {
    text-decoration: line-through;
}

.todoItem {
    display: flex;
    justify-content: space-between;
}

span {
    font-family: 'Dosis', sans-serif;
    text-shadow: 1px 1px rgba(255, 192, 203, 0.493);
}
</style>