<template>
  <div>
        <section
      id="download"
      class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full min-h-[50vh] md:h-[50vh] bg-[url(@/assets/downloadHeroSectionBG.png)] bg-cover bg-center bg-no-repeat text-white"
    >
      <div class="flex justify-start items-center container mx-auto px-6 md:px-28 text-start">
        <span class="bg-[#C70A0C] h-[100px] md:h-[70px] w-[4px] md:w-[6px] rounded-md"></span>
        <div class="ml-6 md:ml-8">
          <h2 class="text-3xl font-semibold text-[#fff]">Download</h2>
        </div>
      </div>
    </section>

    <!-- Downloadable Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6 md:gap-8 container mx-auto px-6 md:px-72 py-12 md:py-20">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex flex-col items-center text-center"
      >
        <img :src="item.src" :alt="item.label" class="w-32 sm:w-40 md:w-56 h-auto mb-3 md:mb-4 cursor-pointer" />
        <p class="text-base font-semibold">{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Articles from '@/assets/download/Articles.png'
import Certificates from '@/assets/download/Certificates.png'
import DigitalLibrary from '@/assets/download/DigitalLibrary.png'
import ECatalog from '@/assets/download/E-catalog.png'
import FAQ from '@/assets/download/FAQ.png'
import IFU from '@/assets/download/IFU.png'
import MasterPhDTheses from '@/assets/download/Master&PhDTheses.png'
import PressKit from '@/assets/download/Press Kit.png'
import Videos from '@/assets/download/Videos.png'

const items = [
  { src: ECatalog, label: 'E-Catalog' },
  { src: DigitalLibrary, label: 'Digital Library' },
  { src: IFU, label: 'IFU' },
  { src: Certificates, label: 'Certificates' },
  { src: Articles, label: 'Articles' },
  { src: MasterPhDTheses, label: 'Master & PhD Theses' },
  { src: Videos, label: 'Videos' },
  { src: PressKit, label: 'Press Kit' },
  { src: FAQ, label: 'FAQ' },
]

</script>

<style lang="scss" scoped></style>