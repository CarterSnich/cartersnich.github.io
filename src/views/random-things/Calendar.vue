<script setup lang="ts">

import { makeCalendar, MONTHS_LONG, WEEKS_LONG } from '@/lib/data-utils';
import { ref, watch } from 'vue';

const now = new Date();

const date = ref(now);
const daysOfTheMonth = ref<number[]>(makeCalendar(now))
const currentYear = ref(now.getFullYear())
const currentMonth = ref(now.getMonth())

watch([currentYear, currentMonth], ([newYear, newMonth]) => {
  const newDate = new Date(newYear, newMonth);
  date.value = newDate;
  daysOfTheMonth.value = makeCalendar(newDate)
  console.log(newYear, newMonth)
  console.log(date)
})

function onClickToday() {
  const now = new Date()
  currentYear.value = now.getFullYear()
  currentMonth.value = now.getMonth()
}

</script>

<template>
  <main>
    <nav>
      <h1>Calendar</h1>
      <div>
        <button type="button" @click="onClickToday">Today</button>
        <select v-model="currentMonth">
          <option v-for="n in 12" :value="n - 1">{{ MONTHS_LONG[n - 1] }}</option>
        </select>
        <input type="number" v-model="currentYear">
      </div>
    </nav>

    <table id="calendar">
      <thead>
        <tr>
          <th v-for="w in WEEKS_LONG">{{ w }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="w in 6">
          <td v-for="d in 7" :class="{ today: now.getMonth() === date.getMonth() && daysOfTheMonth[((w - 1) * 7 + d - 1)] === now.getDate() }">
            {{ daysOfTheMonth[((w - 1) * 7 + d - 1)] }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style>
header {
  position: fixed !important;
}
</style>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
}


#calendar {
  flex-grow: 1;
  border: 1px solid var(--border);

  display: flex;
  flex-direction: column;


  thead>tr {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    th {
      border: 1px solid var(--border);
    }
  }

  tbody {
    flex-grow: 1;
    display: grid;
    grid-template-rows: repeat(6, 1fr);

    tr {
      display: grid;
      grid-template-columns: repeat(7, 1fr);

      td {
        border: 1px solid var(--border);
        padding: 1rem;
        text-align: end;
        font-size: 1.25em;
      }

      td.today {

        color: var(--background);
        background-color: var(--text);
      }


      td:hover {
        color: white;
        background-color: blue;
      }

    }
  }

}
</style>