<template>
  <section
    id="about"
    class="relative flex items-center md:items-center py-12 md:py-24 justify-center"
  >
    <div class="relative w-11/12 md:w-5/6 container mx-auto">
      <div class="relative flex flex-col md:flex-row justify-center items-stretch text-start">
        <img
          src="@/assets/about/whyUsBanner.png"
          alt="about-us"
          class="relative md:absolute md:inset-0 md:w-full md:h-[520px] w-full h-auto max-w-full object-cover rounded-2xl md:rounded-3xl shadow-lg"
        />

        <!-- desktop gradient overlay for readability over image -->
        <div class="hidden md:block md:w-full md:h-[520px] w-full h-auto max-w-full absolute inset-0 rounded-3xl bg-gradient-to-r from-black/70 to-black/10 pointer-events-none"></div>

        <div class="relative z-10 px-2 sm:px-4 md:px-8 py-6 md:py-10 md:m-12 w-full">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-black md:text-white">{{$t('aboutPage.whyUs.title')}}</h2>
          <p class="text-sm sm:text-base md:text-base py-4 md:py-8 w-full md:w-4/5 leading-6 md:leading-8 text-gray-800 md:text-white">
            {{$t('aboutPage.whyUs.p1')}}
            <span class="block my-4">
              {{$t('aboutPage.whyUs.p2')}}
            </span>
            {{$t('aboutPage.whyUs.p3')}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

