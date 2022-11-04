<script setup lang="ts">
import Summary from '../components/Summary.vue'
defineProps<{
  amountIncome: number,
  amountExpense: number,
  amountTotal: number
}>();
</script>

<template>
  <Summary :amount-expense="amountExpense" :amount-income="amountIncome" :amount-total="amountTotal" />
</template>

<style>

</style>