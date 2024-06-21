<template>
  <Head>
    <Meta name="description" :content="product.title" />
  </Head>
  <div class="container">
    <h2 class="productTitle">{{ product.title }}</h2>
    <img src="https://placebear.com/640/480" alt="" />
    <p class="description">{{ product.description }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url =
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/" + id;
const { data: product } = await useFetch(url);
</script>

<style lang="scss" scoped>
.container {
  width: 1217px;
  margin: 120px auto 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.productTitle {
  @include TT_Commons-84;

  margin-bottom: 73px;

  text-align: center;
}

img {
  max-height: 700px;

  margin-bottom: 134px;
}
.description {
  @include TT_Commons-36;
}
</style>
