<script setup lang="ts" scoped>
const cards = ref<string[]>(shuffelCards(duplicatieCards(getGameCards())));
const currentIndex = ref<number[]>([]);

onMounted(() => {
  getRandomCard();
});

const getRandomCard = () => {
  let attempts: number = 0;
  const maxAttempts: number = 2;
  let randomIndex: number = 0;

  do {
    randomIndex = Math.floor(Math.random() * cards.value.length);
    attempts++;

    if (attempts > maxAttempts) break;
  } while (currentIndex.value.includes(randomIndex));

  currentIndex.value = [];
  currentIndex.value.push(randomIndex);

  setTimeout(() => {
    getRandomCard();
  }, 3500);
};
</script>

<template>
  <div class="inner-page-wrapper">
    <div class="background-items">
      <div class="game-board" v-if="cards.length > 1">
        <ClientOnly>
          <GameTile
            v-for="(imageSrc, index) in cards"
            :key="index"
            :imageSrc="imageSrc"
            :id="index"
            :activeState="currentIndex.includes(index) ? 'active' : ''"
          />
        </ClientOnly>
      </div>
      <div class="background" v-else></div>
    </div>

    <div class="overlay"></div>

    <div class="contant">
      <div class="inner">
        <hgroup>
          <p class="pre-title">& WordPress expert.</p>
          <h1>Full stack web/app developer</h1>
        </hgroup>

        <NuxtLink to="/game" class="btn-hologram">
          <span data-text="Let's play a little game!"
            >Let's play a little game!
          </span>
          <div class="scan-line"></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "~/assets/styling/pages/home.css";
</style>
