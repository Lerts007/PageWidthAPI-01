<template>
  <a
    :class="{ active: hover }"
    :href="link"
    @mouseover="hover = true"
    @mouseout="hover = false"
    >{{ name }}</a
  >
</template>

<script setup>
const props = defineProps({
  link: String,
  name: String,
});

const hover = ref(false);
</script>

<style lang="scss" scoped>
a {
  border-bottom: 1px solid black;

  transition: transform 0.5s;
}
.active {
  transform: scale(1.1);
}
</style>
