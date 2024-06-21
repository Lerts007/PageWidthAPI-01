<template>
  <div class="container">
    <h3>Articles</h3>
    <div class="products">
      <ProductCard v-for="p in paginatedProducts" :product="p" :key="p.id" />
    </div>
    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      @update:page="currentPage = $event"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const { data: products } = await useFetch(
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
);

console.log(products);

const currentPage = ref(2);
const productsPerPage = 8;

const totalPages = computed(() => {
  return Math.ceil(products.value.length / productsPerPage);
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage;
  const end = start + productsPerPage;
  return products.value.slice(start, end);
});
</script>

<style lang="scss" scoped>
.container {
  width: 1217px;

  margin: 0 auto;
  padding: 110px 40px;
}

h3 {
  @include TT_Commons-84;

  margin-bottom: 52px;

  //32px
}
.products {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  // grid-template-rows: 398px;
  gap: 40px 32px;
}
</style>
