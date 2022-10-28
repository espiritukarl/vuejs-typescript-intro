<script setup lang="ts">
let props = defineProps<{
    amount: Array<number>,
    desc: Array<string>,
    msg: string
}>();

props.amount.splice(0, 1);
props.desc.splice(0, 1);
</script>

<template>
    <div class="history">
        <h2>{{ msg }} </h2>
        <ul>
            <li v-for="x, index in props.amount">Php {{ x }} - {{ props.desc[index] }}</li>
        </ul>
    </div>

</template>

<style>
.history {
    min-width: 400px;
}
</style>