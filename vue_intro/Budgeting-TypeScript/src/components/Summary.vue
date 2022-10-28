<script setup lang="ts">
defineProps<{
    amountIncome: number,
    amountExpense: number,
    amountTotal: number
}>();
</script>

<template>
    <ul class="summary">
        <li>Income: {{ amountIncome }}</li>
        <li>Expense: {{ amountExpense }}</li>
        <li>Total: {{ amountTotal }}</li>
    </ul>
</template>

<style>
.summary {
    min-width: 400px;
}
</style>