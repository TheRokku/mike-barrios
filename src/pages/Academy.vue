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
        class="absolute top-0 right-0 w-175 h-175 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>

      <div class="relative z-10 px-8 md:px-16 max-w-7xl w-full">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-6 flex items-center gap-3"
        >
          <span class="w-8 h-px bg-gold/40"></span>
          {{ t.academy.label }}
        </p>
        <h1 class="font-cinzel font-black leading-none">
          <span
            class="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white"
            >{{ t.academy.headline1 }}</span
          >
          <span
            class="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white"
            >{{ t.academy.headline2 }}</span
          >
          <span
            class="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gold italic"
            >{{ t.academy.headline3 }}</span
          >
        </h1>
        <p
          class="font-sans text-sm text-white/40 leading-relaxed mt-8 max-w-2xl"
        >
          {{ t.academy.sub }}
        </p>
      </div>
    </section>

    <!-- ── COURSES ── -->
    <section class="px-8 md:px-16 pb-32">
      <div class="max-w-7xl mx-auto space-y-0">
        <div
          v-for="(course, i) in courses"
          :key="i"
          :class="[
            'grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold/10 group',
            i > 0 ? 'border-t-0' : '',
          ]"
        >
          <!-- Image — alternates sides -->
          <div
            :class="[
              'relative aspect-video lg:aspect-auto overflow-hidden bg-dark2',
              i % 2 !== 0 ? 'order-1 lg:order-2' : '',
            ]"
          >
            <img
              :src="`/images/course-${i + 1}.jpg`"
              :alt="course.title"
              class="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              onerror="this.style.display = 'none'"
            />
            <div
              :class="[
                'absolute inset-0',
                i % 2 !== 0 ? 'bg-linear-to-l' : 'bg-linear-to-r',
                'from-transparent to-dark/80',
              ]"
            ></div>

            <!-- Course number -->
            <span
              class="absolute top-6 left-6 font-cinzel text-4xl font-bold text-white/5"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>

          <!-- Content -->
          <div
            :class="[
              'p-10 md:p-16 flex flex-col justify-center bg-dark group-hover:bg-dark2 transition-colors duration-500',
              i % 2 !== 0 ? 'order-2 lg:order-1' : '',
            ]"
          >
            <p
              class="font-cinzel text-xs tracking-[0.4em] text-gold uppercase mb-4"
            >
              {{ course.tag }}
            </p>
            <h2
              class="font-cinzel text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide leading-tight"
            >
              {{ course.title }}
            </h2>
            <p
              v-if="course.tag2"
              class="font-sans text-xs text-white/30 tracking-widest mb-6"
            >
              {{ course.tag2 }}
            </p>
            <p v-else class="mb-6"></p>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-10">
              {{ course.desc }}
            </p>

            <div class="flex items-center justify-between flex-wrap gap-6">
              <div>
                <p
                  v-if="course.access"
                  class="font-sans text-xs text-white/30 tracking-widest mb-1"
                >
                  {{ course.access }}
                </p>
                <p class="font-cinzel text-3xl font-bold text-gold">
                  {{ course.price }}
                </p>
              </div>
              <RouterLink
                to="/contact"
                class="px-8 py-3 bg-gold text-black font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
              >
                {{ t.academy.enroll }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BOTTOM CTA ── -->
    <section
      class="py-32 px-8 md:px-16 border-t border-gold/10 relative overflow-hidden"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/50 uppercase mb-6"
        >
          {{
            lang === 'es'
              ? '¿Listo para el siguiente nivel?'
              : 'Ready for the next level?'
          }}
        </p>
        <h2
          class="font-cormorant text-4xl md:text-6xl font-light text-white leading-tight mb-12"
        >
          {{
            lang === 'es'
              ? '"El conocimiento sin ejecución es solo entretenimiento."'
              : '"Knowledge without execution is merely entertainment."'
          }}
        </h2>
        <RouterLink
          to="/contact"
          class="inline-block px-12 py-4 border border-gold text-gold font-cinzel text-xs tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
        >
          {{
            lang === 'es' ? 'INICIAR CONVERSACIÓN' : 'BEGIN THE CONVERSATION'
          }}
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
import { useHead } from '@vueuse/head';

const { lang } = useLang();
const t = computed(() => (lang.value === 'es' ? es : en));

const courses = computed(() => [
  {
    tag: t.value.academy.c1_tag,
    title: t.value.academy.c1_title,
    desc: t.value.academy.c1_desc,
    price: t.value.academy.c1_price,
    access: t.value.academy.lifetime,
    tag2: null,
  },
  {
    tag: t.value.academy.c2_tag,
    title: t.value.academy.c2_title,
    desc: t.value.academy.c2_desc,
    price: t.value.academy.c2_price,
    access: null,
    tag2: t.value.academy.c2_tag2,
  },
  {
    tag: t.value.academy.c3_tag,
    title: t.value.academy.c3_title,
    desc: t.value.academy.c3_desc,
    price: t.value.academy.c3_price,
    access: null,
    tag2: null,
  },
]);
</script>
