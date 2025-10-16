<script setup>
import ProductCard from '@/components/ProductCard.vue';
import uniConic from '@/assets/products/implants/cover/uni-conic-cover.png';
import uniClassic from '@/assets/products/implants/cover/uni-plus-cover.png';
import uniPremium from '@/assets/products/implants/cover/uni-piece-cover.png';
</script>

<template>
  <div>
    <section
      id="products"
      class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full min-h-[50vh] md:h-[50vh] bg-[url(@/assets/ProductsPageHeroSection.png)] bg-cover bg-center bg-no-repeat text-white"
    >
      <div
        class="flex justify-start items-center container mx-auto px-6 md:px-28 text-start"
      >
        <span
          class="bg-[#C70A0C] h-[100px] md:h-[70px] w-[4px] md:w-[6px] rounded-md"
        ></span>
        <div class="ml-6 md:ml-8">
          <h2 class="text-2xl md:text-3xl font-semibold text-[#fff]">Implants</h2>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 my-12 md:my-48 px-4 md:px-16 ">
      <ProductCard 
      title="UNI-Conic" 
      :image="uniConic" 
      :features="['Short Implants', 'Bone Level Implant', 'mm slim Implants']" 
      />
      <ProductCard 
      title="UNI-Plus" 
      :image="uniClassic" 
      :features="['Standard Implants', 'Bone Level Implant', 'Regular Implants']" 
      />
      <ProductCard 
      title="UNI-Piece" 
      :image="uniPremium" 
      :features="['Premium Implants', 'Bone Level Implant', 'High Quality Implants']"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>