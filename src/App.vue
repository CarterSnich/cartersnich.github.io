<script setup lang="ts">
import { RouterLink } from "vue-router";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "html",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <header>
    <div id="links">
      <RouterLink to="/">Home</RouterLink>
      <div class="separator" />
      <RouterLink to="/projects">Projects</RouterLink>
      <div class="separator" />
      <RouterLink to="/stuff-n-things">Stuff 'n Things</RouterLink>
    </div>
    <div id="theme-toggle">
      <a href="#" :class="{ active: !isDark }" @click.prevent="toggleDark(false)">
        Light
      </a>
      <div class="separator"></div>
      <a href="#" :class="{ active: isDark }" @click.prevent="toggleDark(true)">
        Dark
      </a>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background);
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#links {
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;

  a {
    color: inherit;
    background-color: inherit;
  }

  .router-link-active {
    color: var(--background);
    background-color: var(--text);
  }
}

.separator {
  height: auto;
  width: 1px;
  background-color: var(--text);
}

#theme-toggle {
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;

  >a {
    color: var(--text);
    background-color: var(--background);
  }

  >a.active {
    color: var(--background);
    background-color: var(--text);
  }
}
</style>
