<template>
  <div class="grid grid-cols-7 px-4 md:px-16 py-16 md:py-32 items-center gap-8">
    <div class="flex justify-center col-span-7 md:col-span-3">
      <img class="w-3/4 md:w-auto h-auto md:h-[100vh]" src="@/assets/AboutUsMainPage.png" alt="">
    </div>

    <!-- about us content -->
    <div class="min-h-[50vh] md:h-[100vh] col-span-7 md:col-span-4">
      <h1 class="text-xl text-[#C70A0C]">{{$t('aboutUsMainPage.title')}}</h1>
      <h1 class="text-3xl font-bold my-8">{{$t('aboutUsMainPage.historyTitle')}}</h1>
      <p class="text-base text-gray-700 w-full md:w-3/4">
        {{$t('aboutUsMainPage.historyParagraph')}}
      </p>
      <!-- features  -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <!-- Our Vision & Mission -->
        <div class="p-4">
          <img src="@/assets/vision_mission.png" alt="Our Vision & Mission">
          <h2 class="text-2xl font-semibold mb-2">{{$t('aboutUsMainPage.vision.title')}}</h2>
          <p class="text-sm text-justify text-gray-700 w-full md:w-[82%]">
            {{$t('aboutUsMainPage.vision.paragraph')}}
          </p>
        </div>
        <!-- Why Choose Macros? -->
        <div class="p-4">
          <img src="@/assets/why_choose_macros.png" alt="Why Choose Macros?">
          <h2 class="text-2xl font-semibold mb-2">{{$t('aboutUsMainPage.whyChoose.title')}}</h2>
            <ul class="text-[13px] text-gray-700 list-disc list-inside space-y-2" >
              <li>
                {{$t('aboutUsMainPage.whyChoose.list.item1')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.whyChoose.list.item2')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.whyChoose.list.item3')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.whyChoose.list.item4')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.whyChoose.list.item5')}}
              </li>
            </ul>
        </div>
        <!-- Our Policy -->
        <div class="p-4">
          <img src="@/assets/our_policy.png" alt="Our Policy">
          <h2 class="text-2xl font-semibold mb-2">{{$t('aboutUsMainPage.policy.title')}}</h2>
            <ul class="text-[13px] text-gray-700 list-disc list-inside space-y-2" >
              <li>
                {{$t('aboutUsMainPage.policy.list.item1')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.policy.list.item2')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.policy.list.item3')}}
              </li>
              <li>
                {{$t('aboutUsMainPage.policy.list.item4')}}
              </li>
            </ul>
        </div>
        <!-- Scientific Conference -->
        <div class="p-4 w-full md:w-80">
          <img src="@/assets/scientific_conference.png" alt="Scientific Conference">
          <h2 class="text-2xl font-semibold mb-2">{{$t('aboutUsMainPage.conference.title')}}</h2>
            <p class="text-[13px] text-justify text-gray-700 list-disc list-inside space-y-2" >
              {{$t('aboutUsMainPage.conference.paragraph')}}
            </p>
        </div>
      </div>
      <!-- call to action buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:space-x-3 w-full md:w-96 pl-0 sm:pl-2">
                  <router-link
        :to="{ name: 'app.contact-us' }"
        class="flex justify-center items-center w-52 md:w-fit bg-[#C70A0C] text-[#fff] text-base my-4 px-4 py-2 rounded-md font-semibold hover:bg-slate-200 hover:text-[#C70A0C] transition-colors duration-300">
          {{$t('aboutUsMainPage.buttons.contact')}}
        </router-link>
                  <router-link
        :to="{ name: 'app.products' }"
        class="flex justify-center items-center w-52 md:w-fit bg-white text-[#C70A0C] border-[1px] border-[#C70A0C] text-base md:my-4 px-4 py-[8px] rounded-md font-semibold hover:bg-slate-200 hover:text-red-600 transition-colors duration-300">
          {{$t('aboutUsMainPage.buttons.learnMore')}}
            <svg xmlns="http://www.w3.org/2000/svg" class="pl-2 h-5" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#c70a0c" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
        </router-link>
        </div>


    </div>

  </div>
</template>

<style scoped></style>