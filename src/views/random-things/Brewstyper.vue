<script setup lang="ts">
import { randomPickFromArray } from '@/lib/utils';
import { nextTick, ref, useTemplateRef } from 'vue';

const PHRASES = [
  "oh so were feeding the whole goddamn neighborhood are we",
  "i beg your pardon kayla but if you could avert your eyes from the crevice of my rump i would just be over joyous for your patronage",
  "michael get your ass in here youre getting ten across the ass",
  "super amazing one of a kind jaw dropping holy shit hay ride super duper mega monster holy hell corn maze",
  "bitter bear gets a bitter divorce planned parenthood blues substance abuse sally",
  "a fifth of scotch a day keeps your family away i didnt hit you the belt did learn how to knock eric",
  "methamphetamine shmethamphetamine grandpas probably gonna die if i cant have her nobody can",
  "how to poop when youre poor what to wipe with what to flush with",
  "roses are red violets are blue i used to play with toys now i shoot smack",
  "one of this days little babies imma eat cha one of this days",
  "i said i kissed your sister last night while you are spooning that goddamn paint roller",
  "bitch you only talk to me when you need something you should got the corn dog dumbass",
  "titties and beer titties and beer titties and beer titties and beer titties and beer",
  "filled with fuckin trading with pokemon cards and talking about pokemon cards and pokemon cards and more fuckin pokemon cards",
  "ima twenty two yr ol big butty weman adn im lukin for big butty biches to takl to",
  "i know you are but what am i i know you are but what am i i know you are but what am i betch",
  "yo might as well fuckin throw this thing in the garbage can yoyo",
  "sometimes your brain is just stupid i guess i dont know what do i look like a doctor",
  "just got on the boat jerry rum thatll be sure to put your dick in the dirt",
  "what the hell is that is it the russians are the russians attacking",
  "jesus christ michael i am so sick of looking at your stupid fuckin face you know that with your dumb haircut and your stupid scottin pipin jersey",
  "his glasses he cant see without his glasses",
  "im gonna get you im gonna suck you silly",
  "uno dos trees cuatro sinko says siete ouch nine catorce",
  "pico de gallo por favor grassy ass la biblioteca es roja",
  "new york city california americaland",
  "i wanted to rip out all your teeth with pliers after thirty seconds of this video",
  "alright alright alright alright alright alright alright alright alright alright alright alright alright alright",
  "so when you turn down that street just ah keep going until you see the ahh stupid ass cotton blue drive way you really cant miss it",
];

const currentPhrase = ref<string[]>(randomPickFromArray(PHRASES));
const typingProgress = ref<boolean[]>([])
const typingIndex = ref(0);
const isDone = ref(false);

const startTime = ref<Date>();
const endTime = ref<Date>();
const timeDisplay = ref("0ms");
const timeDisplayDaemon = ref<number>()

const duration = ref(0)
const characterCount = ref(0)
const correctCount = ref(0)
const mistakesCount = ref(0)
const accuracy = ref(0.0)

const typer = useTemplateRef("typer")


function onType(e: KeyboardEvent) {
  const timeOfPress = new Date();
  const pressedKey = e.key.toLowerCase();

  switch (pressedKey) {
    case "backspace":
      if (typingIndex.value > 0) {
        typingIndex.value--;
      }
      return;

    default:
      if (!startTime.value) {
        startTime.value = timeOfPress;
        timeDisplayDaemon.value = setInterval(() => {
          if (startTime.value) {
            const now = new Date();
            timeDisplay.value = `${now.getTime() - startTime.value.getTime()}ms`;
          }
        }, 10);
      }

      typingProgress.value[typingIndex.value] = pressedKey === currentPhrase.value[typingIndex.value];

      if (typingIndex.value === currentPhrase.value.length - 1) {
        clearInterval(timeDisplayDaemon.value)
        endTime.value = new Date();
        isDone.value = true;

        // calculate results
        duration.value = (endTime.value.getTime() ?? 0) - (startTime.value.getTime() ?? 0)
        characterCount.value = currentPhrase.value.length
        correctCount.value = typingProgress.value.filter(v => v).length;
        mistakesCount.value = typingProgress.value.length - correctCount.value;
        accuracy.value = Math.round(((correctCount.value / currentPhrase.value.length) * 100) * 100) / 100
      } else {
        typingIndex.value++;
      }
      break;
  }

}

function reset() {
  currentPhrase.value = randomPickFromArray(PHRASES);
  typingProgress.value = []
  typingIndex.value = 0
  isDone.value = false

  startTime.value = undefined
  endTime.value = undefined
  timeDisplay.value = "0ms"
  clearInterval(timeDisplayDaemon.value)
  timeDisplayDaemon.value = undefined;

  duration.value = 0;
  characterCount.value = 0;
  correctCount.value = 0;
  mistakesCount.value = 0;
  accuracy.value = 0;

  nextTick(() => {
    typer.value?.focus()
  })
}
</script>
<template>
  <main>
    <section id="typing-area" @keypress="onType" @keydown.delete="onType" v-if="!isDone">
      <div id="hud">
        <div>time:&nbsp;<span id="time-display">{{ timeDisplay }}</span></div>
        <button type="button" id="random-phrase" @click="reset">random phrase</button>
      </div>
      <div ref="typer" id="typer" tabindex="1" type="text" autofocus>
        <div id="text" class="0">
          <template v-for="n in currentPhrase.length">
            <span :data-index="n - 1" :class="{ correct: typingProgress[n - 1], wrong: typingProgress[n - 1] === false, current: typingIndex === n - 1 }">
              {{ currentPhrase[n - 1] }}
            </span>
          </template>
        </div>
      </div>
    </section>
    <section id="results" v-else>
      <table>
        <tbody>
          <tr>
            <td>duration: </td>
            <td>{{ duration }}ms</td>
          </tr>
          <tr>
            <td>character count: </td>
            <td>{{ characterCount }}</td>
          </tr>
          <tr>
            <td>correct count: </td>
            <td>{{ correctCount }}</td>
          </tr>
          <tr>
            <td>mistake count: </td>
            <td>{{ mistakesCount }}</td>
          </tr>
          <tr>
            <td>accuracy: </td>
            <td>{{ accuracy }}%</td>
          </tr>
        </tbody>
      </table>

      <button type="button" id="play-again" @click="reset">play again</button>
    </section>
  </main>
</template>

<style scoped>
button {
  font-family: inherit;
  font-size: 1rem;
  max-width: fit-content;
  padding: .25rem 1.75rem;
}

#typing-area {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 10rem;
  box-sizing: border-box;
}

#hud {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#typer {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-grow: 1;
}

#typer:focus {
  outline: none;
}

#text {
  text-align: center;
}

#text>span {
  font-size: 2rem;
  white-space: break-spaces;
}

@keyframes blinking {
  0% {
    border-bottom-color: black;
  }

  100% {
    border-bottom-color: white;
  }
}

#typer:focus #text>span.current {
  border-bottom: 3px solid black;
  animation: blinking infinite alternate 500ms;
}


#text>span.correct {
  background-color: green;
}

#text>span.wrong {
  background-color: red;
}

#results {
  height: 100vh;
  display: grid;
  place-content: center;
  font-size: 1.5rem;
}

table tr>td:nth-child(1) {
  border-right: 5rem solid transparent;
}

table tr>td:nth-child(2) {
  text-align: right;
}

#play-again {
  margin: auto;
  margin-top: 1.75rem;
}
</style>