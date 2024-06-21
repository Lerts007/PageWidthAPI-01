<template>
  <div class="pagination">
    <ButtonPagination
      @click="changePage(1)"
      :class="{ active: 1 === currentPage }"
      :page="1"
    />
    <p v-if="firstEllipsis">...</p>
    <div v-for="page in totalPages - 1">
      <ButtonPagination
        v-if="
          (page === currentPage - 1 ||
            page === currentPage ||
            page === currentPage + 1) &&
          page !== 1
        "
        @click="changePage(page)"
        :key="page"
        :class="{ active: page === currentPage }"
        :page="page"
      />
    </div>
    <p v-if="endEllipsis">...</p>
    <ButtonPagination
      @click="changePage(totalPages)"
      :class="{ active: totalPages === currentPage }"
      :page="totalPages"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});

const firstEllipsis = computed(() => {
  if (props.currentPage > 3) return true;
  else return false;
});
const endEllipsis = computed(() => {
  if (
    props.currentPage === props.totalPages ||
    props.currentPage === props.totalPages - 1 ||
    props.currentPage === props.totalPages - 2
  )
    return false;
  else return true;
});

const emit = defineEmits(["update:page"]);

const changePage = (page) => {
  emit("update:page", page);
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin-top: 50px;
  & p {
    @include TT_Commons-50;
  }
}

.active {
  font-weight: bold;
  background-color: $black;
  color: #fff;
}
</style>
