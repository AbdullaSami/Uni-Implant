<script setup>
import AboutCompanySection from "@/components/AboutPage/AboutCompanySection.vue";
import WhyUsSection from "@/components/AboutPage/WhyUsSection.vue";
import DiscoverySection from "@/components/AboutPage/DiscoverySection.vue";
</script>

<template>
  <div>
    <section
      id="about"
      class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full 
      min-h-[100vh] bg-gradient-to-b from-[#d8d8d8] via-[#bfbfbf] to-[#8f8f8f]
      md:h-[100vh] md:bg-[url(@/assets/AboutUsPageHeroBG.png)] md:bg-cover bg-center md:bg-no-repeat text-white"
    >
      <div class="flex justify-start container mx-auto px-6 md:px-28 text-start">
        <span class="bg-[#C70A0C] md:h-[170px] w-[6px] rounded-md"></span>
        <div class="ml-6 md:ml-12">
          <h2 class="text-2xl font-semibold text-[#C70A0C]">{{$t('aboutPage.hero.title')}}</h2>
          <p class="md:text-6xl text-black md:text-white text-3xl py-4 font-semibold leading-relaxed">
            {{$t('aboutPage.hero.headline1')}}
            <span class="md:block mt-4">{{$t('aboutPage.hero.headline2')}}</span>
          </p>
        </div>
      </div>
    </section>
    <div>
      <AboutCompanySection />
    </div>
    <div>
        <WhyUsSection />
    </div>
    <div>
      <DiscoverySection />
    </div>
  </div>
</template>

<style scoped></style>
