<template>
  <div v-if="!route.query.id">请选择id</div>
  <AddCpt
    v-else
    :edit="true"
  ></AddCpt>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import AddCpt from '../create/index.vue';

const route = useRoute();

onMounted(() => {
  if (!route.query.id) return;
});
</script>

<style lang="scss" scoped></style>
