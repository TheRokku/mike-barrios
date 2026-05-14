<template>
  <div class="bg-dark min-h-screen">
    <NavBar />

    <!-- ── HERO QUOTE ── -->
    <section
      class="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <!-- Gold glow left -->
      <div
        class="absolute top-0 left-0 w-150 h-150 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>

      <div
        class="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <!-- Image -->
        <div class="relative order-2 md:order-1">
          <div
            class="aspect-square md:aspect-3/4 overflow-hidden relative bg-dark2 hover:**:grayscale-0"
          >
            <img
              src="/src/assets/images/DSC06341.jpg"
              alt="Mike Barrios"
              class="w-full h-full object-cover grayscale transition-all"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"
            ></div>
            ··
          </div>
        </div>

        <!-- Quote -->
        <div class="order-1 md:order-2">
          <h1
            class="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8"
          >
            {{ t.about.quote }}
          </h1>
          <div class="w-12 h-px bg-gold mb-6"></div>
          <p class="font-sans text-xs text-white/40 tracking-widest uppercase">
            {{ t.about.quote_sub }}
          </p>
        </div>
      </div>
    </section>

    <!-- ── LA TRAYECTORIA ── -->
    <section class="relative py-40 px-8 md:px-16 overflow-hidden">
      <!-- Vertical label -->
      <div
        class="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block"
      >
        <span
          class="font-cinzel text-xs tracking-[0.5em] text-gold/20 uppercase"
        >
          {{ lang === 'es' ? 'La Trayectoria' : 'The Journey' }}
        </span>
      </div>

      <div class="max-w-4xl mx-auto">
        <div
          class="border border-gold/15 p-10 md:p-16 bg-black/20 backdrop-blur-sm relative"
        >
          <!-- Corner accents -->
          <div
            class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/50 -translate-x-1 -translate-y-1"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/50 translate-x-1 translate-y-1"
          ></div>

          <p
            class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-8"
          >
            {{ t.about.journey_label }}
          </p>
          <p
            class="font-cormorant text-2xl md:text-3xl text-white/80 font-light leading-relaxed mb-6"
          >
            {{ t.about.journey_p1 }}
          </p>
          <p
            class="font-cormorant text-2xl md:text-3xl text-white/80 font-light leading-relaxed"
          >
            {{ t.about.journey_p2 }}
          </p>
        </div>
      </div>
    </section>

    <!-- ── EL MÉTODO ── -->
    <section class="py-32 px-8 md:px-16 border-t border-gold/10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <p
            class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span class="w-8 h-px bg-gold/40"></span>
            {{ t.about.method_title }}
            <span class="w-8 h-px bg-gold/40"></span>
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          <div
            v-for="(method, i) in methods"
            :key="i"
            class="bg-dark p-10 group hover:bg-dark2 transition-colors duration-500"
          >
            <div
              class="w-10 h-10 border border-gold/30 flex items-center justify-center mb-8 group-hover:border-gold transition-colors duration-300"
            >
              <component :is="method.icon" :size="16" class="text-gold" />
            </div>
            <h3
              class="font-cinzel text-base font-semibold text-white mb-4 tracking-wide"
            >
              {{ method.title }}
            </h3>
            <p class="font-sans text-xs text-white/40 leading-relaxed">
              {{ method.desc }}
            </p>
            <div
              class="mt-8 w-0 h-px bg-gold group-hover:w-full transition-all duration-700"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── VISION QUOTE ── -->
    <section class="py-40 px-8 md:px-16 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image:
            linear-gradient(rgba(201, 168, 76, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        "
      ></div>

      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>

      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/50 uppercase mb-12"
        >
          {{ t.about.vision_label }}
        </p>
        <blockquote
          class="font-cormorant text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-16"
        >
          {{ t.about.vision_quote }}
        </blockquote>
        <RouterLink
          to="/contact"
          class="inline-block px-12 py-4 border border-gold text-gold font-cinzel text-xs tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
        >
          {{ t.about.vision_cta }}
        </RouterLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Brain, Zap, Target } from 'lucide-vue-next';
import NavBar from '../components/layout/NavBar.vue';
import Footer from '../components/layout/Footer.vue';
import { useLang } from '../composables/useLang.js';
import en from '../composables/lang/en.js';
import es from '../composables/lang/es.js';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Mike Barrios — Transform Your Leadership',
  meta: [
    {
      name: 'description',
      content:
        'Impact is not an accident. It is architecture. Work with Mike Barrios — international speaker, executive coach and corporate trainer.',
    },
  ],
});

const { lang } = useLang();
const t = computed(() => (lang.value === 'es' ? es : en));

const methods = computed(() => [
  { icon: Brain, title: t.value.about.m1_title, desc: t.value.about.m1_desc },
  { icon: Zap, title: t.value.about.m2_title, desc: t.value.about.m2_desc },
  { icon: Target, title: t.value.about.m3_title, desc: t.value.about.m3_desc },
]);
</script>
