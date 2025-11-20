import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import RandomThings from "@/views/RandomThings.vue";
import Projects from "@/views/Projects.vue";
import LinuxDistroLog from "@/views/random-things/LinuxDistroLog.vue";
import Nokia3310KeypadSimulator from "@/views/random-things/Nokia3310KeypadSimulator.vue";
import PeriodicTable from "@/views/random-things/PeriodicTable.vue";
import Brewstyper from "@/views/random-things/Brewstyper.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/random-things",
      children: [
        {
          path: "",
          name: "random-things",
          component: RandomThings,
        },
        {
          path: "linux-distro-log",
          component: LinuxDistroLog,
        },
        {
          path: "periodic-table",
          component: PeriodicTable,
        },
        {
          path: "nokia-3310-keypad-simulator",
          component: Nokia3310KeypadSimulator,
        },
        {
          path: "brewstyper",
          component: Brewstyper,
        },
      ],
    },
  ],
});

export default router;
