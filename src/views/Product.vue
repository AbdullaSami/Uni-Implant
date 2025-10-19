<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import ProductCard from '@/components/ProductCard.vue';

// Local images map keyed by product keys defined in locales
import uniConic from '@/assets/products/implants/cover/uni-conic-cover.png';
import uniClassic from '@/assets/products/implants/cover/uni-plus-cover.png';
import uniPremium from '@/assets/products/implants/cover/uni-piece-cover.png';
// Prosthetic
import cementable from '@/assets/products/prosthetic/cover/cementable-solutions-cover.png';
import multiUnit from '@/assets/products/prosthetic/cover/multi-unit-solutions-cover.png';
import overdenture from '@/assets/products/prosthetic/cover/overdenture-solutions-cover.png';
// Digital Solutions
import tiBase from '@/assets/products/digital-solutions/cover/ti-base-abutment-cover.png';
import multiUnitTiBase from '@/assets/products/digital-solutions/cover/multi-unit-ti-base-cover.png';

const route = useRoute();
const { t, tm } = useI18n();

const typeName = computed(() => String(route.params.typeName || ''));

const productsConfig = computed(() => {
  const data = tm(`productsPage.types.${typeName.value}`);
  return (data && typeof data === 'object') ? data : { title: '', items: [] };
});

const imageMap = {
  'uni-conic': uniConic,
  'uni-plus': uniClassic,
  'uni-piece': uniPremium,
  // Prosthetic
  'cementable': cementable,
  'overdenture': overdenture,
  'multiunit': multiUnit,
  // Digital Solutions
  'tibase': tiBase,
  'multiunit_tibase': multiUnitTiBase,
};
</script>

<template>
  <div>
    <section
      id="products"
      class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full 
      min-h-[20vh] bg-gradient-to-b from-[#d8d8d8] via-[#bfbfbf] to-[#8f8f8f]
      md:h-[50vh] md:bg-[url(@/assets/ProductsPageHeroSection.png)] md:bg-cover md:bg-center md:bg-no-repeat text-white"
    >
      <div
        class="flex justify-start items-center container mx-auto px-6 md:px-28 text-start"
      >
        <span
          class="bg-[#C70A0C] h-[70px] md:h-[70px] w-[4px] md:w-[6px] rounded-md"
        ></span>
        <div class="ml-6 md:ml-8">
          <h2 class="text-2xl md:text-3xl font-semibold text-[#fff]">
            {{ productsConfig.title  || tm(`navbar.products.${typeName.value}.title`) }}
          </h2>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 my-12 md:my-48 px-4 md:px-16 ">
      <ProductCard
        v-for="item in productsConfig.items"
        :key="item.key"
        :title="item.title"
        :image="imageMap[item.key]"
        :features="item.features"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
