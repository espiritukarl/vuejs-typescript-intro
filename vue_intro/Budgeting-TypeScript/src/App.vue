<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Summary from './components/Summary.vue';
import History from './components/History.vue';

const options: Array<string> = [
  "Income",
  "Expense"
];

let selectedOption = ref('');
let amount = ref('');
let desc = ref('');

let amountIncome = ref(0);
let amountExpense = ref(0);
let amountTotal = ref(0);

let wasIncome = ref([0]);
let descIncome = ref(['']);

let wasExpense = ref([0]);
let descExpense = ref(['']);

function formSubmit() {
  if (selectedOption.value == 'Income' && amount.value) {
    amountIncome.value += Number(amount.value);
    wasIncome.value.push(Number(amount.value));
    descIncome.value.push(desc.value);
  } else if (selectedOption.value == 'Expense' && amount.value) {
    amountExpense.value += Number(amount.value);
    wasExpense.value.push(Number(amount.value));
    descExpense.value.push(desc.value);
  }
  amountTotal.value = amountIncome.value - amountExpense.value;
  amount.value = '';
  desc.value = '';

}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Budget App</h1>

      <form @submit.prevent="formSubmit">
        <div class="input-form">
          <select name="IncomeExpense" id="IncomeExpense" v-model="selectedOption">
            <option v-for="option in options" :value="option">{{ option }}</option>
          </select>
          <input type="number" v-model="amount" placeholder="Input amount" required>
          <input type="text" v-model="desc" placeholder="Description..." required>
        </div>
        <button>Submit</button>
      </form>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/summary" :amount-expense="amountExpense" :amount-income="amountIncome"
          :amount-total="amountTotal">Summary</RouterLink>
        <RouterLink to="/income_history">Income</RouterLink>
        <RouterLink to="/expense_history">Expense</RouterLink>
      </nav> -->
    </div>
    <Summary :amount-expense="amountExpense" :amount-income="amountIncome" :amount-total="amountTotal" />
    <History :amount="wasIncome" :desc="descIncome" msg="Income History: " class="income" />
    <History :amount="wasExpense" :desc="descExpense" msg="Expense History: " class="expense" />
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
.input-form select,
.input-form input {
  padding: 1px 5px;
  border: 1.2px solid blue;
  border-radius: 2%;
  background: transparent;
}

.input-form select::placeholder,
.input-form input::placeholder {
  color: rgba(72, 72, 255, 0.753);
  font-style: italic;
}

.input-form select {
  min-width: 100px;
}

.input-form input[type='number'] {
  min-width: 200px;
}

.input-form input[type='text'] {
  min-width: 500px;
}

.input-form {
  display: flex;
  gap: 2px;
}

form button {
  margin: 5px 0 15px auto;
  display: flex;
  justify-content: end;
  border: 1px solid rgb(93, 93, 255);
  border-radius: 10%;
  padding: 3px 5px;
  background-color: rgba(93, 93, 255, 0.568);
  color: white;
  cursor: pointer;
  transition: all ease 0.5ms;
}

form button:hover {
  border: 1px solid blue;
  background-color: blue;
}
</style>
