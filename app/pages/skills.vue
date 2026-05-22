<script setup lang="ts" scoped>
const calcIngetnetAge = (): string => {
  const year = new Date().getFullYear();
  const age = year - 1983;

  return age.toString();
};

const calcMyAge = (): string => {
  const today = new Date();
  const birth = new Date("1999-11-18");

  let age = today.getFullYear() - 1999;
  const currentMonth = today.getMonth() - birth.getMonth();

  if (
    currentMonth < 0 ||
    (currentMonth === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age.toString();
};

const cheffJeffAttac = (): string => {
  return "CheffJeff pushed a new website online, Internet mutch weakend by a new bug. Internets security was lowerd";
};

const internetAttac = (): string => {
  return "Internet released new CSS rules... CheffJeff is cunfused and need to learn css again.";
};

const openBag = () => {
  currentSelection.value = 2;
};

const attactmode = () => {
  currentSelection.value = 1;
};

const startPosition = () => {
  currentSelection.value = 0;
};

const internetAge = ref<string>(calcIngetnetAge());
const myAge = ref<string>(calcMyAge());
const message = ref<string>("What will CheffJeff do?");
const currentSelection = ref<Number>(0);
const hideOptions = ref<boolean>(false);
</script>

<template>
  <div class="page-wrap">
    <div class="container">
      <div class="board">
        <div class="enamy">
          <div class="name-card">
            <div class="top">
              <p class="name">Internet</p>
              <span>Lv{{ internetAge }}</span>
            </div>

            <div class="botton">
              <span>HP</span>
              <div class="bar"></div>
            </div>
          </div>

          <img
            class="person-img"
            src="~/assets/img/battle/ai-idle.png"
            alt="enemy image"
          />
        </div>

        <div class="player">
          <img
            class="person-img"
            src="~/assets/img/battle/me-idle.png"
            alt="player image"
          />

          <div class="name-card">
            <div class="top">
              <p class="name">CheffJeff</p>
              <span>Lv{{ myAge }}</span>
            </div>

            <div class="botton">
              <span>HP</span>
              <div class="bar"></div>
            </div>
          </div>
        </div>

        <div class="selections">
          <div class="message">
            <p>{{ message }}</p>
          </div>

          <div class="options" :class="hideOptions ? 'show' : 'hide'">
            <div class="buttons" v-if="currentSelection === 0">
              <button @click="attactmode">Fight</button>
              <button>Open bag</button>
            </div>

            <div class="buttons" v-if="currentSelection === 1">
              <button @click="startPosition">Back</button>
              <button>Frondend</button>
              <button>Backend</button>
              <button>App</button>
            </div>
          </div>
        </div>

        <div class="bag"></div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "~/assets/styling/pages/skills.css";
</style>
