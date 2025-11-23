<script setup lang="ts">
import { RouterLink } from "vue-router";
import router, { routes } from "@/router/index";

const childrenRoutes = routes[2]?.children?.slice(
  1,
  routes[2]?.children.length
);
</script>

<template>
  <main>
    <h1>Stuff 'n Things</h1>
    <div>
      <RouterLink v-for="cr in childrenRoutes" :to="`/stuff-n-things/${cr.path}`">
        {{ cr.meta?.title }}
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
a {
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
