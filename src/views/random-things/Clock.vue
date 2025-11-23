<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import { getTh } from '@/lib/utils';
import { useDark, useToggle } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';

const toggleDark = useToggle(useDark());


const isToolbarHidden = ref(false)
const is24Hour = ref(true);
const isExtraInfoHidden = ref(false)

const now = ref(new Date())
const timeDisplay = computed(() => {
  return now.value.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is24Hour.value,
  })
})
const dateDisplay = computed(() => {
  return now.value.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
})

const isSettingsOpen = ref(false)

function onPressKeybinds(e: KeyboardEvent) {
  switch (e.key.toLowerCase()) {
    case "f":
      if (document.fullscreenEnabled) {
        document.exitFullscreen()
      }
      document.querySelector("main")?.requestFullscreen();
      break;

    case "t":
      isToolbarHidden.value = !isToolbarHidden.value
      break;

    case "d":
      toggleDark()
      break;

    case "h":
      is24Hour.value = !is24Hour.value
      break;

    case "i":
      isExtraInfoHidden.value = !isExtraInfoHidden.value
      break;

    default:
      // do supposed to do
      break;

  }
}

const extraInfo = (() => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth()
  const date = d.getDate()
  const time = d.getTime()

  // timezone offset
  const m = d.getTimezoneOffset();
  const sign = m <= 0 ? "+" : "-";
  const tzOffset = `${sign}${String(Math.floor(Math.abs(m) / 60)).padStart(2, "0")}${String(Math.abs(m) % 60).padStart(2, "0")}`;

  // timezone name
  const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // day of year
  const dayOfYear = Math.floor((time - new Date(year, 0, 0).getTime()) / 86400000);

  // ISO week number
  const temp = new Date(year, month, date);
  const dayNum = (temp.getDay() + 6) % 7;
  temp.setDate(temp.getDate() - dayNum + 3);
  const week1 = new Date(temp.getFullYear(), 0, 4);
  const week = 1 + Math.round(((temp.getTime() - week1.getTime()) / 86400000 - 3) / 7);

  // quarter of the year
  const quarterOfYear = Math.floor((month + 3) / 3)

  // leep year?
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // get century
  const century = Math.floor((year - 1) / 100) + 1

  return {
    tzOffset,
    tzName,
    dayOfYear,
    week,
    quarterOfYear,
    isLeapYear,
    century
  }
})();


onMounted(() => {
  setInterval(() => {
    now.value = new Date();
  }, 10);
})

</script>

<template>
  <main ref="main" @keydown="onPressKeybinds" tabindex="0">
    <div id="time-display">{{ timeDisplay }}</div>
    <div id="date-display">{{ dateDisplay }}</div>
    <small id="extra-info" v-if="!isExtraInfoHidden">
      <span>UTC{{ extraInfo.tzOffset }} ({{ extraInfo.tzName }})</span>
      <span>Day {{ extraInfo.dayOfYear }}</span>
      <span>Week {{ extraInfo.week }}</span>
      <span>Q{{ extraInfo.quarterOfYear }}</span>
      <span>{{ extraInfo.isLeapYear ? "Leap" : "Common" }} year</span>
      <span>{{ extraInfo.century }}<sup>{{ getTh(extraInfo.century) }}</sup> Century</span>
    </small>

    <div id="toolbar" :class="{ hidden: isToolbarHidden }">
      <span>
        <code>F</code> Fullscreen
      </span>
      <span>
        <code>T</code> Toggle toolbar
      </span>
      <span>
        <code>D</code> Toggle dark mode
      </span>
      <span>
        <code>H</code> Toggle 24-hour format
      </span>
      <span>
        <code>I</code> Toggle extra info
      </span>
    </div>
  </main>

  <Modal title="Settings" :is-open="isSettingsOpen" @onClickClose="isSettingsOpen = false">
    settings
  </Modal>
</template>

<style scoped>
main {
  max-width: 100%;
  margin: 0;

  display: grid;
  place-content: center;
  background-color: var(--background);
}


#time-display {
  text-align: center;
  font-size: 10rem;
}

#date-display {
  text-align: center;
  font-size: 3rem;
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
    border: none
  }

}



#toolbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: .25rem .5rem;
  opacity: .5;

  display: flex;
  gap: 1rem;

}

#toolbar.hidden {
  opacity: 0;
}

#toolbar.hidden:hover {
  opacity: .5;
}
</style>