<template>
  <NuxtLink
    :to="`/${product.id}`"
    :class="{ activeCard: hover }"
    class="card"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <img src="https://placebear.com/640/480" alt="" />
    <h3>{{ product.preview }}</h3>
    <p :class="{ active: hover }" class="read">Read more</p>
  </NuxtLink>
</template>

<script setup>
import { ref } from "vue";

const { product } = defineProps(["product"]);

const hover = ref(false);
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  height: 273px;

  cursor: pointer;

  transition: transform 0.5s;

  & img {
    max-width: 100%;
    max-height: 280px;

    margin-bottom: 24px;
  }
  & h3 {
    margin-bottom: 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.read {
  @include TT_Commons-20;

  display: none;
  color: $accent;
}
.activeCard {
  transform: translateY(-20px);
  will-change: transform;
}
.active {
  display: block;
}
</style>
