<script setup lang="ts" scoped>
const img = ref<HTMLImageElement | null>(null);
const imgFake = ref<HTMLDivElement | null>(null);
const imgHeight = ref<number>(0);
const imgWidth = ref<number>(0);
const root = ref<HTMLElement | null>(null);
const bgCover = ref<string>("");

const startAnimation = () => {
  if (!img.value) return;
  imgHeight.value = img.value.offsetHeight;
  imgWidth.value = img.value.offsetWidth;
  root.value = document.documentElement;

  setTimeout(() => {
    randomGlitch();
  }, 500);
};

const setGreenframes = () => {
  for (let i = 1; i <= 18; i++) {
    root.value?.style.setProperty(
      `--green-rect-f${i}`,
      glitch(imgWidth.value, imgHeight.value),
    );
  }
};

const setPinkframes = () => {
  for (let i = 1; i <= 18; i++) {
    root.value?.style.setProperty(
      `--pink-rect-f${i}`,
      glitch(imgWidth.value, imgHeight.value),
    );
  }
};

const randomGlitch = () => {
  const delay = Math.random() * 5000 + 1000;

  setTimeout(() => {
    const mode = Math.floor(Math.random() * 3);

    if (mode === 0) {
      setGreenframes();
      imgFake.value?.classList.add("glitch-green");
    }

    if (mode === 1) {
      setPinkframes();
      imgFake.value?.classList.add("glitch-pink");
    }

    if (mode === 2) {
      setGreenframes();
      setPinkframes();
      imgFake.value?.classList.add("glitch-green");
      imgFake.value?.classList.add("glitch-pink");
    }

    setTimeout(() => {
      imgFake.value?.classList.remove("glitch-green", "glitch-pink");
    }, 700);

    randomGlitch();
  }, delay);
};
</script>

<template>
  <div class="page-wrap">
    <div class="bg">
      <img src="~/assets/img/about-bg/1.webp" alt="background image" />
    </div>

    <div class="container">
      <div class="content">
        <p>
          Hi, I’m Jeff. I’m a big Marvel Comics fan, metal head, gamer, bit of a
          perfectionist, cat person and I love learning new things. Before I
          started my career in development. I worked as a <em>chef</em>, hence
          the name CheffJeff.
        </p>

        <p>
          When I’m not diving into a project, you’ll probably find me immersed
          in the darker side of cinema; I’m a horror fan, with a soft spot for
          classics like
          <em>Halloween</em> and the traps of the <em>Saw</em> franchise. My
          love for great storytelling extends to my bookshelf, where I collect
          comics and get lost in the expansive worlds of <em>Star Wars</em> and
          <em>Game of Thrones</em>.
        </p>

        <p>
          As a gamer, I don't shy away from a challenge. I’m particularly fond
          of atmospheric and demanding titles like <em>The Witcher 3</em> and
          <em>Dark Souls</em>.
        </p>
      </div>

      <div class="img-wrapper">
        <div ref="imgFake" class="img"></div>
        <img
          ref="img"
          @load="startAnimation"
          src="~/assets/img/me.webp"
          alt="A photo of me"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "~/assets/styling/pages/about.css";
</style>
