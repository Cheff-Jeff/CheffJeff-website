<script setup lang="ts">
const props = defineProps({
  destination: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const link = ref<string>(props.text);
const oldLink = ref<string>(props.text);
const hash = ref<string[]>([]);
const linkArray = ref<string[]>(props.text.split(""));
const index = ref(0);
const maxIndex = ref(link.value.length);
const resetting = ref(false);
const stoped = ref(false);

const scramble = () => {
  if (stoped.value || resetting.value) return;

  hash.value = hashText(link.value);
  linkArray.value[index.value] = hash.value[index.value]!;
  link.value = linkArray.value.join("");

  if (index.value >= maxIndex.value) slowReset();

  setTimeout(() => {
    index.value++;
    scramble();
  }, 35);
};

const slowReset = () => {
  if (stoped.value) return;

  resetting.value = true;
  hash.value = oldLink.value.split("");
  linkArray.value[index.value] = hash.value[index.value]!;
  link.value = linkArray.value.join("");

  if (index.value === 0) return;

  setTimeout(() => {
    index.value--;
    slowReset();
  }, 150);
};

const reset = () => {
  stoped.value = true;
  link.value = props.text;
  hash.value = [];
  index.value = 0;
  resetting.value = false;
};
</script>

<template>
  <li>
    <NuxtLink
      :to="destination"
      v-on:mouseenter="((stoped = false), scramble())"
      v-on:mouseleave="reset"
    >
      {{ link }}
    </NuxtLink>
  </li>
</template>
