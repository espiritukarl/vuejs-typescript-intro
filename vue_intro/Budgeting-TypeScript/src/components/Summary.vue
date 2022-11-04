<script setup lang="ts">
const props = defineProps<{
    amountIncome: number,
    amountExpense: number,
    amountTotal: number
}>();

let expenses = -props.amountExpense
</script>

<template>
    <div class="container">
        <h2>Summary</h2>
        <ul class="summary">
            <li>Income: <span class="income">Php {{ props.amountIncome }}</span></li>
            <li>Expense: <span class="expense">Php {{ expenses }}</span></li>
            <li>Total: <span
                    :style="[props.amountTotal >= 0 ? props.amountTotal == 0 ? { 'color': 'black' } : { 'color': 'green' } : { 'color': 'red' }]">Php
                    {{
        props.amountTotal
                    }}</span></li>
        </ul>
    </div>

</template>

<style>
ul {
    list-style: none;
    margin-left: 20px;
}

li {
    font-size: 24px;
}

.container {
    border: 1.5px solid blue;
    border-radius: 15px;
    padding: 5px;
}
</style>