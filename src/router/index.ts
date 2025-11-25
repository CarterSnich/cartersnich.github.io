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
    meta: {
      title: "Projects",
    },
  },
  {
    path: "/stuff-n-things",
    children: [
      {
        path: "",
        name: "stuff-n-things",
        component: StuffnThings,
        meta: {
          title: "Stuff 'n Things",
        },
      },
      {
        path: "linux-distro-log",
        component: LinuxDistroLog,
        meta: {
          title: "My Linux Distro Log",
        },
      },
      {
        path: "periodic-table",
        component: PeriodicTable,
        meta: {
          title: "Periodic Table",
        },
      },
      {
        path: "nokia-3310-keypad-simulator",
        component: Nokia3310KeypadSimulator,
        meta: {
          title: "Nokia 3310 Keypad Simulator",
        },
      },
      {
        path: "brewstyper",
        component: Brewstyper,
        meta: {
          title: "Brewstyper",
        },
      },
      {
        path: "calendar",
        component: Calendar,
        meta: {
          title: "Calendar",
        },
      },
      {
        path: "clock",
        component: Clock,
        meta: {
          title: "Clock",
        },
      },
      {
        path: "basic-css",
        component: BasicCSS,
        meta: {
          title: "BasicCSS",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title
    ? `${to.meta?.title} | Joe Mar's Portfolio`
    : "Joe Mar's Portfolio";
  next();
});

export default router;
