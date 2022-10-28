<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    msg: string,
}>();

const options: Array<string> = [
    "Income",
    "Expense"
];

let selectedOption = ref('income');
let amount = ref('');
let desc = ref('');

function formSubmit() {
    console.log(`${selectedOption.value}: ${amount.value} due to ${desc.value}`);
    amount.value = '';
    desc.value = '';
}
</script>

<template>
    <h1>{{ msg }}</h1>

    <form @submit.prevent="formSubmit">
        <div class="input-form">
            <select name="IncomeExpense" id="IncomeExpense" v-model="selectedOption">
                <option v-for="option in options" :value="option">{{ option }}</option>
            </select>
            <input type="number" v-model="amount" placeholder="Input amount">
            <input type="text" v-model="desc" placeholder="Description...">
        </div>
        <button>Submit</button>
    </form>
</template>

<style scoped>

</style>
