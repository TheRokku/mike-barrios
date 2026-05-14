<template>
  <div class="bg-dark min-h-screen">
    <NavBar />

    <!-- ── HERO ── -->
    <section
      class="relative min-h-[70vh] flex items-end overflow-hidden pt-20 pb-20"
    >
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image:
            linear-gradient(rgba(201, 168, 76, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.5) 1px, transparent 1px);
          background-size: 80px 80px;
        "
      ></div>

      <div
        class="absolute top-1/2 right-0 w-175 h-175 -translate-y-1/2 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>

      <div class="relative z-10 px-8 md:px-16 max-w-5xl">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-6 flex items-center gap-3"
        >
          <span class="w-8 h-px bg-gold/40"></span>
          {{ t.services.label }}
        </p>
        <h1 class="font-cinzel font-black leading-none">
          <span class="block text-5xl md:text-7xl lg:text-8xl text-white">{{
            t.services.headline1
          }}</span>
          <span
            class="block text-5xl md:text-7xl lg:text-8xl text-gold italic"
            >{{ t.services.headline2 }}</span
          >
        </h1>
        <p
          class="font-sans text-sm text-white/40 leading-relaxed mt-8 max-w-xl"
        >
          {{ t.services.sub }}
        </p>
      </div>
    </section>

    <!-- ── SERVICES ── -->
    <section class="px-8 md:px-16 pb-32">
      <div class="max-w-7xl mx-auto space-y-0 max-sm:space-y-5">
        <!-- Service 1 — Speaker -->
        <div
          id="speaker"
          class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold/10 group"
        >
          <div
            class="relative aspect-video lg:aspect-auto overflow-hidden bg-dark2"
          >
            <img
              src="/src/assets/images/4.jpg"
              alt="Speaker"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              onerror="this.style.display = 'none'"
            />
            <div
              class="absolute inset-0 bg-linear-to-r from-transparent to-dark/60"
            ></div>
            <span
              class="absolute top-6 left-6 font-cinzel text-xs tracking-widest text-gold/40"
            >
              {{ t.services.s1_num }}
            </span>
          </div>
          <div
            class="p-10 md:p-16 flex flex-col justify-center bg-dark group-hover:bg-dark2 transition-colors duration-500"
          >
            <h2
              class="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide"
            >
              {{ t.services.s1_title }}
            </h2>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-10">
              {{ t.services.s1_desc }}
            </p>
            <RouterLink
              to="/contact"
              class="self-start px-8 py-3 bg-gold text-black font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              {{ t.services.s1_cta }}
            </RouterLink>
          </div>
        </div>

        <!-- Service 2 — Trainer (reversed) -->
        <div
          id="trainer"
          class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold/10 border-t-0 group"
        >
          <div
            class="p-10 md:p-16 flex flex-col justify-center bg-dark group-hover:bg-dark2 transition-colors duration-500 order-2 lg:order-1"
          >
            <h2
              class="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide"
            >
              {{ t.services.s2_title }}
            </h2>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-10">
              {{ t.services.s2_desc }}
            </p>
            <RouterLink
              to="/contact"
              class="self-start px-8 py-3 border border-gold text-gold font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              {{ t.services.s2_cta }}
            </RouterLink>
          </div>
          <div
            class="relative aspect-video lg:aspect-auto overflow-hidden bg-dark2 order-1 lg:order-2"
          >
            <img
              src="/src/assets/images/1.jpg"
              alt="Trainer"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              onerror="this.style.display = 'none'"
            />
            <div
              class="absolute inset-0 bg-linear-to-l from-transparent to-dark/60"
            ></div>
            <span
              class="absolute top-6 right-6 font-cinzel text-xs tracking-widest text-gold/40"
            >
              {{ t.services.s2_num }}
            </span>
          </div>
        </div>

        <!-- Service 3 — Coach -->
        <div
          id="coach"
          class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold/10 border-t-0 group"
        >
          <div
            class="relative aspect-video lg:aspect-auto overflow-hidden bg-dark2"
          >
            <img
              src="/src/assets/images/DSC06348 (1).jpg"
              alt="Coach"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              onerror="this.style.display = 'none'"
            />
            <div
              class="absolute inset-0 bg-linear-to-r from-transparent to-dark/60"
            ></div>
            <span
              class="absolute top-6 left-6 font-cinzel text-xs tracking-widest text-gold/40"
            >
              {{ t.services.s3_num }}
            </span>
          </div>
          <div
            class="p-10 md:p-16 flex flex-col justify-center bg-dark group-hover:bg-dark2 transition-colors duration-500"
          >
            <h2
              class="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide"
            >
              {{ t.services.s3_title }}
            </h2>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-10">
              {{ t.services.s3_desc }}
            </p>
            <RouterLink
              to="/contact"
              class="self-start px-8 py-3 border border-gold text-gold font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              {{ t.services.s3_cta }}
            </RouterLink>
          </div>
        </div>

        <!-- Service 4 — Writer (reversed) -->
        <div
          id="writer"
          class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold/10 border-t-0 group"
        >
          <div
            class="p-10 md:p-16 flex flex-col justify-center bg-dark group-hover:bg-dark2 transition-colors duration-500 order-2 lg:order-1"
          >
            <h2
              class="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide"
            >
              {{ t.services.s4_title }}
            </h2>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-10">
              {{ t.services.s4_desc }}
            </p>
            <RouterLink
              to="/contact"
              class="self-start px-8 py-3 border border-gold text-gold font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              {{ t.services.s4_cta }}
            </RouterLink>
          </div>
          <div
            class="relative aspect-video lg:aspect-auto overflow-hidden bg-dark2 order-1 lg:order-2"
          >
            <img
              src="/src/assets/images/DSC06303.jpg"
              alt="Writer"
              class="w-full h-full max-sm:h-56 object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              onerror="this.style.display = 'none'"
            />
            <div
              class="absolute inset-0 bg-linear-to-l from-transparent to-dark/60"
            ></div>
            <span
              class="absolute top-6 right-6 font-cinzel text-xs tracking-widest text-gold/40"
            >
              {{ t.services.s4_num }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FINAL CTA ── -->
    <section
      class="py-32 px-8 md:px-16 border-t border-gold/10 relative overflow-hidden"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white mb-6">
          {{ t.services.final_title }}
        </h2>
        <p class="font-sans text-sm text-white/40 leading-relaxed mb-12">
          {{ t.services.final_sub }}
        </p>
        <RouterLink
          to="/contact"
          class="inline-block px-12 py-4 bg-gold text-black font-cinzel text-xs tracking-[0.4em] uppercase hover:bg-gold-light transition-colors duration-300"
        >
          {{ t.services.final_cta }}
        </RouterLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import NavBar from '../components/layout/NavBar.vue';
import Footer from '../components/layout/Footer.vue';
import { useLang } from '../composables/useLang.js';
import en from '../composables/lang/en.js';
import es from '../composables/lang/es.js';

const { lang } = useLang();
const t = computed(() => (lang.value === 'es' ? es : en));
</script>
