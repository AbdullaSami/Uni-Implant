<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  image: String,
  features: Array
});
</script>
<template>
  <div>
      <div class="flex flex-col space-y-2 my-4">
        <img :src="image" class="w-fit h-auto" alt="">
        <div class="p-6 bg-[rgba(21,21,17,0.04)] rounded-lg">
          <h2 class="text-2xl font-[500]">{{ title }}</h2>
          <ul class="flex flex-col space-y-2 text-[16px] py-4">
            <li v-for="feature in features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

      </div>
  </div>
</template>


<style lang="scss" scoped></style>