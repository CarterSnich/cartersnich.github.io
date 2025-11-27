<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import useOrientation from "@/composable/useOrientation";
import { getTh } from "@/lib/utils";
import { useDark, useStorage, useToggle } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";

const FONTS = [
  "Anonymice Pro Nerd Font",
  "monospace",
  "sans",
  "serif",
  "Nokia Cellphone FC",
];

const isPortrait = useOrientation();
const toggleDark = useToggle(useDark());

const isSettingsVisible = ref(false);

const settings = useStorage("clock-settings", {
  istoolbarHidden: false,
  is24Hour: false,
  showSeconds: false,
  isExtraInfoHidden: false,
  fontIndex: 0,
});

const now = ref(new Date());
const timeDisplay = computed(() => {
  const [a, b] = now.value
    .toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: settings.value.showSeconds ? "2-digit" : undefined,
      hour12: settings.value.is24Hour,
    })
    .split(" ");

  const times = a?.split(":") as string[];

  return {
    hh: times[0] as string,
    mm: times[1] as string,
    ss: times[2],
    M: b,
  };
});
const dateDisplay = computed(() => {
  return now.value.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const extraInfo = (() => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const time = d.getTime();

  // timezone offset
  const m = d.getTimezoneOffset();
  const sign = m <= 0 ? "+" : "-";
  const tzOffset = `${sign}${String(Math.floor(Math.abs(m) / 60)).padStart(
    2,
    "0"
  )}:${String(Math.abs(m) % 60).padStart(2, "0")}`;

  // timezone name
  const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // day of year
  const dayOfYear = Math.floor(
    (time - new Date(year, 0, 0).getTime()) / 86400000
  );

  // ISO week number
  const temp = new Date(year, month, date);
  const dayNum = (temp.getDay() + 6) % 7;
  temp.setDate(temp.getDate() - dayNum + 3);
  const week1 = new Date(temp.getFullYear(), 0, 4);
  const week =
    1 + Math.round(((temp.getTime() - week1.getTime()) / 86400000 - 3) / 7);

  // quarter of the year
  const quarterOfYear = Math.floor((month + 3) / 3);

  // leep year?
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // get century
  const century = Math.floor((year - 1) / 100) + 1;

  return {
    tzName,
    tzOffset,
    dayOfYear,
    week,
    quarterOfYear,
    isLeapYear,
    century,
  };
})();

function onPressKeybinds(e: KeyboardEvent) {
  switch (e.key.toLowerCase()) {
    case "f":
      switchFullscreen();
      break;

    case "t":
      settings.value.istoolbarHidden = !settings.value.istoolbarHidden;
      break;

    case "d":
      toggleDark();
      break;

    case "h":
      settings.value.is24Hour = !settings.value.is24Hour;
      break;

    case "s":
      settings.value.showSeconds = !settings.value.showSeconds;
      break;

    case "i":
      settings.value.isExtraInfoHidden = !settings.value.isExtraInfoHidden;
      break;

    case "o":
      let i = settings.value.fontIndex;
      if (i >= FONTS.length - 1) {
        i = 0;
      } else {
        i++;
      }
      settings.value.fontIndex = i;
      break;

    default:
      // do supposed to do
      break;
  }
}

function switchFullscreen() {
  if (document.fullscreenEnabled) {
    document.exitFullscreen();
  }
  document.querySelector("main")?.requestFullscreen();
}

onMounted(() => {
  setInterval(() => {
    now.value = new Date();
  }, 10);
});
</script>

<template>
  <template v-if="isPortrait">
    <main
      ref="main"
      class="portrait"
      tabindex="0"
      autofocus
      @click="isSettingsVisible = true"
      @keydown="onPressKeybinds">
      <div
        id="time-display"
        :style="{ 'font-family': FONTS[settings.fontIndex] }">
        <div>
          <div>{{ timeDisplay.hh }}</div>
          <div>
            {{ timeDisplay.mm }}
          </div>
        </div>
        <div v-if="timeDisplay.ss || timeDisplay.M">
          <span v-if="timeDisplay.ss">{{ timeDisplay.ss }}</span>
          <span v-if="timeDisplay.M">{{ timeDisplay.M }}</span>
        </div>
      </div>
      <div id="date-display">{{ dateDisplay }}</div>
      <small id="extra-info" v-if="!settings.isExtraInfoHidden">
        <span>{{ extraInfo.tzName }} (UTC{{ extraInfo.tzOffset }})</span>
        <span>Day {{ extraInfo.dayOfYear }}</span>
        <span>Week {{ extraInfo.week }}</span>
        <span>Q{{ extraInfo.quarterOfYear }}</span>
        <span>{{ extraInfo.isLeapYear ? "Leap" : "Common" }} year</span>
        <span>
          {{ extraInfo.century
          }}<sup>{{ getTh(extraInfo.century) }}</sup> Century
        </span>
      </small>
    </main>

    <Modal
      title="Settings"
      :is-open="isSettingsVisible"
      @onClickClose="isSettingsVisible = false">
      <div id="settings">
        <div class="checkbox">
          <input type="checkbox" id="is-24-hour" v-model="settings.is24Hour" />
          <label for="is-24-hour">24-hour format</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="show-seconds"
            v-model="settings.showSeconds" />
          <label for="show-seconds">Show seconds</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-extra-info"
            v-model="settings.isExtraInfoHidden" />
          <label for="hide-extra-info">Hide extra info</label>
        </div>
        <select id="font-index" v-model="settings.fontIndex">
          <option v-for="(f, index) in FONTS" :value="index">{{ f }}</option>
        </select>
        <button for="fullscreen" @click="switchFullscreen">
          Go fullscreen
        </button>
      </div>
    </Modal>
  </template>
  <template v-else>
    <main ref="main" @keydown="onPressKeybinds" tabindex="0" autofocus>
      <div
        id="time-display"
        :style="{ 'font-family': FONTS[settings.fontIndex] }">
        <span>{{ timeDisplay.hh }}</span>
        <span>{{ `:${timeDisplay.mm}` }}</span>
        <span v-if="timeDisplay.ss">{{ `:${timeDisplay.ss}` }}</span>
        <span v-if="timeDisplay.M">{{ ` ${timeDisplay.M}` }}</span>
      </div>
      <div id="date-display">{{ dateDisplay }}</div>
      <small id="extra-info" v-if="!settings.isExtraInfoHidden">
        <span>{{ extraInfo.tzName }} (UTC{{ extraInfo.tzOffset }})</span>
        <span>Day {{ extraInfo.dayOfYear }}</span>
        <span>Week {{ extraInfo.week }}</span>
        <span>Q{{ extraInfo.quarterOfYear }}</span>
        <span>{{ extraInfo.isLeapYear ? "Leap" : "Common" }} year</span>
        <span>
          {{ extraInfo.century
          }}<sup>{{ getTh(extraInfo.century) }}</sup> Century
        </span>
      </small>

      <div id="toolbar" :class="{ hidden: settings.istoolbarHidden }">
        <span><kbd>F</kbd> Fullscreen</span>
        <span><kbd>T</kbd> Toggle toolbar</span>
        <span><kbd>D</kbd> Toggle dark mode</span>
        <span><kbd>H</kbd> Toggle 24-hour format</span>
        <span><kbd>S</kbd> Toggle show seconds</span>
        <span><kbd>I</kbd> Toggle extra info</span>
        <span><kbd>O</kbd> Change font</span>
      </div>
    </main>
  </template>
</template>

<style scoped>
main {
  max-width: 100%;
  margin: 0;

  display: grid;
  place-content: center;

  background-color: var(--background);
}
main.portrait {
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
}

#time-display {
  text-align: center;
  font-size: 10rem;
}
.portrait > #time-display {
  display: flex;
  line-height: 1;
  margin: auto;

  > div:nth-child(2) {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 4rem;
  }
}

#date-display {
  text-align: center;
  font-size: 3rem;
}
.portrait > #date-display {
  font-size: 2rem;
}

#extra-info {
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;

  span {
    padding-inline: 1rem;
    border-right: 1px solid var(--border);
  }

  span:last-child {
    border: none;
  }
}

#toolbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.25rem 0.5rem;
  opacity: 0.5;

  display: flex;
  gap: 1rem;
}

#toolbar.hidden {
  opacity: 0;
}

#toolbar.hidden:hover {
  opacity: 0.5;
}
</style>
