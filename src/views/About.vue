<script setup>
import AboutCompanySection from "@/components/AboutPage/AboutCompanySection.vue";
import WhyUsSection from "@/components/AboutPage/WhyUsSection.vue";
import DiscoverySection from "@/components/AboutPage/DiscoverySection.vue";
</script>

<template>
  <div>
    <section
      id="about"
      class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full min-h-[70vh] md:h-[100vh] bg-[url(@/assets/AboutUsPageHeroBG.png)] bg-cover bg-center bg-no-repeat text-white"
    >
      <div class="flex justify-start container mx-auto px-6 md:px-28 text-start">
        <span class="bg-[#C70A0C] h-[100px] md:h-[170px] w-[4px] md:w-[6px] rounded-md"></span>
        <div class="ml-6 md:ml-12">
          <h2 class="text-2xl font-semibold text-[#C70A0C]">{{$t('aboutPage.hero.title')}}</h2>
          <p class="md:text-6xl text-3xl py-4 font-semibold">
            {{$t('aboutPage.hero.headline1')}} <br />
            <span class="block mt-4">{{$t('aboutPage.hero.headline2')}}</span>
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
