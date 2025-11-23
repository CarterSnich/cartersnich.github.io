import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "@/views/Home.vue";
import RandomThings from "@/views/RandomThings.vue";
import Projects from "@/views/Projects.vue";
import LinuxDistroLog from "@/views/random-things/LinuxDistroLog.vue";
import Nokia3310KeypadSimulator from "@/views/random-things/Nokia3310KeypadSimulator.vue";
import PeriodicTable from "@/views/random-things/PeriodicTable.vue";
import Brewstyper from "@/views/random-things/Brewstyper.vue";
import Calendar from "@/views/random-things/Calendar.vue";
import BasicCSS from "@/views/random-things/BasicCSS.vue";
import Clock from "@/views/random-things/Clock.vue";

export const routes: RouteRecordRaw[] = [
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
        meta: {
          title: "My Linux Distro Log",
        },
        component: LinuxDistroLog,
      },
      {
        path: "periodic-table",
        meta: {
          title: "Periodic Table",
        },
        component: PeriodicTable,
      },
      {
        path: "nokia-3310-keypad-simulator",
        meta: {
          title: "Nokia 3310 Keypad Simulator",
        },
        component: Nokia3310KeypadSimulator,
      },
      {
        path: "brewstyper",
        meta: {
          title: "Brewstyper",
        },
        component: Brewstyper,
      },
      {
        path: "calendar",
        meta: {
          title: "Calendar",
        },
        component: Calendar,
      },
      {
        path: "clock",
        meta: {
          title: "Clock",
        },
        component: Clock,
      },
      {
        path: "basic-css",
        meta: {
          title: "BasicCSS",
        },
        component: BasicCSS,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
