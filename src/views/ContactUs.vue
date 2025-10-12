<script setup>
import ContactForm from "@/components/ContactForm.vue";
</script>
<template>
  <div>
    <section
      id="contactUs"
      class="relative flex items-center md:items-center py-20 md:py-40 justify-center w-full min-h-[50vh] md:h-[50vh] bg-[url(@/assets/contactUsHeroSectionBG.png)] bg-cover bg-center bg-no-repeat text-white"
    >
      <div
        class="flex justify-start items-center container mx-auto px-6 md:px-28 text-start"
      >
        <span
          class="bg-[#C70A0C] h-[100px] md:h-[70px] w-[4px] md:w-[6px] rounded-md"
        ></span>
        <div class="ml-6 md:ml-8">
          <h2 class="text-2xl md:text-3xl font-semibold text-[#fff]">Contact Us</h2>
        </div>
      </div>
    </section>

    <div>
      <iframe
        title="map"
        src="https://www.google.com/maps?q=30.0444,31.2357&z=12&output=embed"
        width="100%"
        height="100%"
        class="min-h-[280px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] w-[92%] sm:w-[90%] mx-auto block border-0 my-10 md:my-16 rounded-2xl sm:rounded-3xl"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div>
      <ContactForm />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
