<script setup>
import AboutUsMainPage from '@/components/MainPage/AboutUsMainPage.vue';
import CategoriesMainPage from '@/components/MainPage/CategoriesMainPage.vue';
import CatalogMainPage from '@/components/MainPage/CatalogMainPage.vue';
import UsefulInformationMainPage from '../components/MainPage/UsefulInformationMainPage.vue';
</script>
<template>
    <div>
   <section id="main" class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full min-h-[70vh] md:h-[100vh] bg-[url(@/assets/homePageHeroBG.png)] bg-cover bg-center bg-no-repeat text-white">
      <div class="container mx-auto px-6 md:px-28 text-start">
        <h2 class="text-2xl font-semibold text-black py-4">{{ $t('homePage.heroSection.title') }}</h2>
        <p class="md:text-6xl text-3xl py-8 font-bold">
            {{$t('homePage.heroSection.slogan1')}} <br>
            <span class="block mt-4">{{$t('homePage.heroSection.slogan2')}}</span>
        </p>
        <p class="text-white my-8">
          {{$t('homePage.heroSection.features')}}
        </p>
        <router-link
        :to="{ name: 'app.products' }"
        class="flex w-full max-w-[198px] bg-white text-[#C70A0C] text-xl my-4 px-4 py-2 rounded-md font-semibold hover:bg-slate-200 hover:text-red-600 transition-colors duration-300">
          <span>{{$t('homePage.heroSection.callToAction')}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="pl-2 h-7" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#c70a0c" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
        </router-link>
      </div>
    </section>
    <div>
      <AboutUsMainPage />
    </div>
    <div>
      <CategoriesMainPage />
    </div>
    <div class="relative">
      <div class="relative z-10">
      <CatalogMainPage />
      </div>
      <div class="relative z-10">
      <UsefulInformationMainPage />
      </div>
      <img class="pointer-events-none absolute w-1/3 sm:w-1/3 top-8 opacity-10 md:opacity-20 hidden sm:block" src="@/assets/left-bg.png" alt="left-bg">
      <img class="pointer-events-none absolute w-1/3 sm:w-[20%] top-0 right-0 opacity-30 hidden sm:block" src="@/assets/right-bg.png" alt="right-bg">
    </div>
    </div>
</template>


<style scoped>

</style>