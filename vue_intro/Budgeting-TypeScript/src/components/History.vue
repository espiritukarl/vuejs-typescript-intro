<script setup lang="ts">
let props = defineProps<{
    amount: Array<number>,
    desc: Array<string>,
    msg: string,
}>();

props.amount.splice(0, 1);
props.desc.splice(0, 1);
</script>

<template>
    <div class="history">
        <h2 class="default">{{ msg }} </h2>
        <ul>
            <li v-for="x, index in props.amount">Php {{ x }}<span class="default"> - {{ props.desc[index] }}</span></li>
        </ul>
    </div>
</template>

<style>
.history {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 200px;
    border: 1.5px solid blue;
    border-radius: 15px;
    padding: 5px;
}
</style>