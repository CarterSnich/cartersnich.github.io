import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import LinuxDistroLog from "@/views/stuff-n-things/LinuxDistroLog.vue";
import Nokia3310KeypadSimulator from "@/views/stuff-n-things/Nokia3310KeypadSimulator.vue";
import PeriodicTable from "@/views/stuff-n-things/PeriodicTable.vue";
import Brewstyper from "@/views/stuff-n-things/Brewstyper.vue";
import Calendar from "@/views/stuff-n-things/Calendar.vue";
import BasicCSS from "@/views/stuff-n-things/BasicCSS.vue";
import Clock from "@/views/stuff-n-things/Clock.vue";
import StuffnThings from "@/views/StuffnThings.vue";

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
    path: "/stuff-n-things",
    children: [
      {
        path: "",
        name: "stuff-n-things",
        component: StuffnThings,
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
