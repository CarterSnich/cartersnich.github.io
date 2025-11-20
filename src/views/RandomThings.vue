<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <main>
    <h1>Random Things</h1>

    <div>
      <RouterLink to="/random-things/linux-distro-log">
        My Linux Distro Log
      </RouterLink>
      <RouterLink to="/random-things/periodic-table">
        Periodic Table
      </RouterLink>
      <RouterLink to="/random-things/nokia-3310-keypad-simulator">
        Nokia 3310 Keypad Simulator
      </RouterLink>
      <RouterLink to="/random-things/brewstyper">
        Brewstyper
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 3rem;
}

a {
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
