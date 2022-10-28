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
        <RouterLink to="/summary">Summary</RouterLink>
        <RouterLink to="/income_history">Income</RouterLink>
        <RouterLink to="/expense_history">Expense</RouterLink>
      </nav> -->
    </div>
    <Summary :amount-expense="amountExpense" :amount-income="amountIncome" :amount-total="amountTotal" />
    <History :amount="wasIncome" :desc="descIncome" msg="Income History: " />
    <History :amount="wasExpense" :desc="descExpense" msg="Expense History: " />
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
