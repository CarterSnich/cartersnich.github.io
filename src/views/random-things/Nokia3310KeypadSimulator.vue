<script setup lang="ts">
import { ref } from 'vue';

const content = ref("");
const currentVals = ref("");
const input = ref("");
const i = ref(0);
const timeout = ref<number>();

function del() {
  content.value = content.value.slice(0, -1);
}

function commit() {
  content.value += input.value === " " ? "&nbsp;" : input.value;
  input.value = "";
  i.value = 0;
}

function press(vals: string) {
  if (currentVals.value !== vals) {
    currentVals.value = vals;
    commit();
  }
  if (i.value >= vals.length) i.value = 0;

  input.value = vals[i.value] ?? "";
  i.value += 1;

  if (timeout.value) {
    clearTimeout(timeout.value);
    timeout.value = setTimeout(commit, 1000);
  }
}
</script>

<template>
  <main>
    <div id="phone">
      <div id="screen">
        <span v-html="content"></span>
        <span v-html="input"></span>
        <span id="ibeam"></span>
      </div>

      <div id="controls">
        <button @click="del">C</button>
        <button>Select</button>
        <button>Up</button>
        <button>Down</button>
      </div>

      <div id="keypad">
        <button @click="press('1')">1<br /><br /></button>
        <button @click="press('abc2')">2<br />abc</button>
        <button @click="press('def3')">3<br />def</button>

        <button @click="press('ghi4')">4<br />ghi</button>
        <button @click="press('jkl5')">5<br />jkl</button>
        <button @click="press('mno6')">6<br />mno</button>

        <button @click="press('pqrs7')">7<br />pqrs</button>
        <button @click="press('tuv8')">8<br />tuv</button>
        <button @click="press('wxyz9')">9<br />wxyz</button>

        <button @click="press('*')">*</button>
        <button @click="press(' 0')">
          0<br /><i class="nf-icon">󱁐</i>
        </button>
        <button @click="press('#')">#</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: grid;
  place-content: center;
}

#phone {
  box-sizing: border-box;
  display: flex;

  height: 600px;
  width: 280px;

  flex-direction: column;
  justify-content: space-between;

  padding: 30px;
  padding-top: 100px;
  padding-bottom: 50px;

  background-color: #23293b;

  border-top-left-radius: 50px 160px;
  border-top-right-radius: 50px 160px;
  border-bottom-left-radius: 36px 260px;
  border-bottom-right-radius: 36px 260px;
}

#screen {
  font-family: "Nokia Cellphone FC";
  font-size: 1.25rem;

  color: black;
  background-color: #769c65;
  border: 1px solid black;

  aspect-ratio: 7/4;
  padding: 4px;
  word-break: break-all;
  overflow: auto;
}

@keyframes blink {

  0%,
  50% {
    opacity: 1;
  }

  50.0001%,
  100% {
    opacity: 0;
  }
}

#ibeam {
  display: inline-block;
  height: 1em;
  width: 12px;
  background-color: black;
  animation: blink 1s steps(1, end) infinite;
}

#ibeam.typing {
  animation: none !important;
}

#keypad {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
}

#keypad>button {
  height: 56px;
  font-size: 1.25rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

@media (pointer: none),
(pointer: coarse) {
  body {
    display: contents;
  }

  #phone {
    display: flex;

    height: 100vh;
    width: 100vw;
    border-radius: 0 !important;

    flex-direction: column;
  }

}
</style>