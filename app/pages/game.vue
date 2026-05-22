<script setup lang="ts">
const cards = ref<string[]>(shuffelCards(duplicatieCards(getGameCards())));
const currentIndex = ref<number[]>([]);
const clickedOnce = ref(false);
const score = ref(0);
const foundCards = ref<number[]>([]);
const resetting = ref(false);

const clickHandler = (imageSrc: string, id: number) => {
  if (resetting.value || foundCards.value.length === 12) return;
  if (foundCards.value.includes(id)) return;

  currentIndex.value.push(id);

  if (!clickedOnce.value) {
    localStorage.setItem(
      "clickedImageSrc",
      JSON.stringify({
        imageSrc,
        id,
      }),
    );

    clickedOnce.value = true;

    return;
  }
  setScore(imageSrc, id);
  resetBoard();
};

const setScore = (clickedSrc: string, id: number) => {
  const src = JSON.parse(localStorage.getItem("clickedImageSrc") || "{}");

  if (!src.imageSrc) {
    return;
  }

  resetting.value = true;

  if (
    src.id != id &&
    src.imageSrc === clickedSrc &&
    !foundCards.value.includes(src.id) &&
    !foundCards.value.includes(id)
  ) {
    score.value += 3;
    foundCards.value.push(src.id, id);
  } else {
    score.value -= 1;
  }
};

const resetBoard = () => {
  localStorage.removeItem("clickedImageSrc");
  clickedOnce.value = false;

  setTimeout(() => {
    currentIndex.value = [...foundCards.value];
    resetting.value = false;
  }, 1000);
};
</script>

<template>
  <div class="inner-page-wrapper game-page">
    <div class="score">
      <p>Your score: {{ score }}</p>
      <div class="scan-line"></div>
    </div>

    <div class="game-board" v-if="cards.length > 0">
      <GameTile
        v-for="(imageSrc, index) in cards"
        :key="index"
        :imageSrc="imageSrc"
        :id="index"
        :activeState="currentIndex.includes(index) ? 'active' : ''"
        @tile-clicked="clickHandler"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "~/assets/styling/pages/game.css";
</style>
