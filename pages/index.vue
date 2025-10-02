<template>
  <body
    class="bg-slate-500 w-screen h-screen justify-center items-center flex flex-col"
  >
    <div class="">
      <h1 class="text-5xl font-bold text-center text-white py-3">
        Générateur de QR Code
      </h1>
      <div class="pt-5 flex justify-center">
        <label class="input validator">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              ></path>
              <path
                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              ></path>
            </g>
          </svg>
          <input type="url" placeholder="https://" v-model="webURL" required />
        </label>
      </div>
      <div class="flex justify-center" v-if="isValidUrl">
        <Qrcode
          :value="webURL"
          variant="circle"
          class="pt-3 size-4/6"
        />
      </div>
      <div class="flex justify-center" v-else>
        <Qrcode value="" variant="circle" class="pt-3 size-4/6" />
      </div>
    </div>
  </body>
</template>

<style>
:root {
  font-family: "Montserrat";
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

const webURL = ref("");
const urlRegex = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}.*$/;
const isValidUrl = computed(() => urlRegex.test(webURL.value));
</script>
