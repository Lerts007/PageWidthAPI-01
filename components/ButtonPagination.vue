<template>
  <button>{{ page }}</button>
</template>

<script setup>
defineProps({
  page: Number,
});
</script>

<style lang="scss" scoped>
button {
  @include TT_Commons-16;
  width: 44px;
  height: 44px;

  margin: 0 5px;
  padding: 5px 10px;

  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button.active {
  font-weight: bold;
  background-color: #000;
  color: #fff;
}
</style>
