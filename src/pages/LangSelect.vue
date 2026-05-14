<template>
  <div
    class="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden"
  >
    <!-- Background grid lines -->
    <div
      class="absolute inset-0 opacity-5"
      style="
        background-image:
          linear-gradient(rgba(201, 168, 76, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201, 168, 76, 0.3) 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <!-- Gold radial glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full opacity-10"
      style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
    ></div>

    <!-- Logo -->
    <div class="relative z-10 text-center mb-20">
      <h1
        class="font-cinzel text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#C9A84C]"
      >
        MIKE BARRIOS
      </h1>
      <div class="w-16 h-px bg-[#C9A84C] mx-auto mt-4 opacity-60"></div>
    </div>

    <!-- Language prompt -->
    <div class="relative z-10 text-center mb-12">
      <p
        class="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C] opacity-70 uppercase mb-2"
      >
        Select Language / Seleccionar Idioma
      </p>
    </div>

    <!-- Buttons -->
    <div class="relative z-10 flex gap-6">
      <button
        @click="select('en')"
        class="group relative px-12 py-4 border border-[#C9A84C] font-cinzel text-sm tracking-[0.3em] text-[#C9A84C] uppercase transition-all duration-300 hover:bg-[#C9A84C] hover:text-black overflow-hidden"
      >
        <span class="relative z-10">English</span>
      </button>

      <button
        @click="select('es')"
        class="group relative px-12 py-4 border border-[#C9A84C] font-cinzel text-sm tracking-[0.3em] text-[#C9A84C] uppercase transition-all duration-300 hover:bg-[#C9A84C] hover:text-black overflow-hidden"
      >
        <span class="relative z-10">Español</span>
      </button>
    </div>

    <!-- Bottom tagline -->
    <div class="absolute bottom-10 text-center">
      <p
        class="font-['Montserrat',sans-serif] text-xs tracking-[0.2em] text-white opacity-20 uppercase"
      >
        Impact is not an accident. It is architecture.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useLang } from '../composables/useLang.js';

const router = useRouter();
const { setLang } = useLang();

function select(l) {
  setLang(l);
  router.push({ name: 'home' });
}
</script>
