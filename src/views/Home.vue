<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type VNodeRef } from "vue";
import me from "@/assets/me.jpg";
import alsoMe from "@/assets/also-me.jpg";

const meFace = ref(me);
function changeMeFace() {
  if (meFace.value === me) {
    meFace.value = alsoMe;
  } else {
    meFace.value = me;
  }
}

const names = ref<HTMLElement | null>(null);
const nameChangeInterval = ref<number>();

function nameChange() {
  const current = names.value?.querySelector(".show");
  const next =
    current?.nextElementSibling || current?.parentElement?.firstElementChild;
  next?.classList.add("show");
  current?.classList.remove("show");
}

function resetNameChangeInterval() {
  nameChange();
  clearInterval(nameChangeInterval.value);
  nameChangeInterval.value = setInterval(nameChange, 3000);
}

onMounted(() => {
  nameChangeInterval.value = setInterval(nameChange, 3000);
});

onBeforeUnmount(() => {
  clearInterval(nameChangeInterval.value);
});
</script>

<template>
  <main>
    <section id="hero">
      <img
        :src="meFace"
        alt="me-face"
        @click="changeMeFace"
        tabindex="-1"
        title="Try clicking me face " />
      <div id="title">
        <h1
          ref="names"
          id="names"
          @click="resetNameChangeInterval"
          title="Click me to see more of my aliases"
          tabindex="-1">
          <span class="show">Joe Mar Estrera Closa</span>
          <span>CarterSnich</span>
          <span>rootless</span>
        </h1>
        <h2>Software Developer</h2>
      </div>
      <div id="links">
        <a href="#about-me">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </section>

    <section id="about-me">
      <h2>About me</h2>
      <p>
        Hi! I'm an aspiring software developer passionate about building for the
        web and mobile platforms.
      </p>
      <p>
        I enjoy working with frameworks like React, Vue, and Laravel for web
        development, as well as React Native, Expo, and Flutter for mobile apps.
      </p>
      <p>
        I'm also deeply interested in computer servicing and Linux
        configuration. Linux is my daily driver—currently Void Linux—and I love
        fine-tuning my system to suit my workflow. Check out my
        <a href="linux-distro-log.html">Linux distro log</a>.
      </p>
      <p>
        Outside of software, I spend time exploring with electronics and
        programming microcontrollers using Arduino and MicroPython. It's a great
        way to connect software with hardware in creative ways.
      </p>
      <p>
        I also like tinkering with random things and trying to fix them — mostly
        out of curiosity, even when I'm not sure I can.
      </p>
      <p>
        <i>"Who is CarterSnich?"</i> It actually comes from Snich Carter, my
        internet alias. I created the name for the game <b>Harvest Moon</b>.
        "Snich" was inspired by <b>Stitch</b> from <i>Lilo & Stitch</i>, and the
        last name <b>Carter</b> was borrowed from one of the NPCs in the game —
        a priest also named Carter.
      </p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <div class="skills-list">
        <div class="skill-category">
          <h3>Web Development</h3>
          <ul>
            <li>
              <span><i class="nf-icon"></i> Vue</span>
            </li>
            <li>
              <span><i class="nf-icon"></i> React</span>
            </li>
            <li>
              <span><i class="nf-icon"></i> Laravel</span>
            </li>
            <li>
              <span><i class="nf-icon"></i> Flask</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Mobile App Development</h3>
          <ul>
            <li>
              <span><i class="nf-icon"></i> React Native</span>
            </li>
            <li>
              <span><i class="nf-icon"></i> Flutter</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Storage Systems</h3>
          <ul>
            <li>
              <span><i class="nf-icon"></i> MySQL</span>
            </li>
            <li>
              <span><i class="nf-icon"></i> MongoDB</span>
            </li>
            <li>
              <span><i class="nf-icon"></i> Firebase</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>
        Mail:
        <a href="mailto:jmeclosa@proton.me" target="_blank">
          <i class="nf-icon"></i> jmeclosa@proton.me
        </a>
      </p>
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/jmeclosa" target="_blank">
          <i class="nf-icon"></i> Joe Mar Closa
        </a>
      </p>
      <p>
        GitHub:
        <a href="https://github.com/CarterSnich" target="_blank">
          <i class="nf-icon"></i> CarterSnich
        </a>
      </p>
      <p>
        Phone:
        <a href="tel:+639619601674" target="_blank"
          ><i class="nf-icon"></i> +63 (961) 9601 674</a
        >
      </p>
    </section>
  </main>
</template>

<style scoped>
section {
  box-sizing: border-box;
  padding: 3rem;
  scroll-snap-align: start;
}

#hero {
  height: 90vh;
  display: grid;
  place-content: center;
  text-align: center;

  img {
    height: 256px;
    margin: auto;
    cursor: pointer;
  }

  #title {
    margin-block: 3rem;
  }

  h1,
  h2 {
    margin: 0;
  }

  #names {
    display: grid;
    place-content: center;
    cursor: pointer;

    span {
      grid-column: 1;
      grid-row: 1;
      opacity: 0;
      transition: opacity ease-in-out 300ms;
    }

    .show {
      opacity: 1 !important;
    }
  }

  #links {
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    gap: 1rem;

    a {
      color: var(--text);
      background-color: var(--background);
      border: 2px solid var(--border);
      padding: 0.25rem 1rem;
      outline: none;
      font-size: 1.25rem;
    }

    a:focus {
      border-color: blue;
    }
  }
}

#about-me {
}

#skills {
  display: flex;
  flex-direction: column;

  .skills-list {
    flex-grow: 1;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .skill-category {
    h3 {
      text-align: center;
    }

    ul {
      li > span {
        cursor: default;
        padding: 0.25rem 1rem;
      }

      li > span:hover {
        color: var(--background);
        background-color: var(--text);
      }
    }
  }
}

#contact {
}
</style>
