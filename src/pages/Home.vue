<template>
  <div class="bg-dark min-h-screen">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Video background -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-linear-to-r from-dark via-dark/80 to-transparent"
      ></div>
      <div
        class="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"
      ></div>

      <!-- Content -->
      <div class="relative z-10 px-8 md:px-16 max-w-4xl mt-20">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/70 uppercase mb-6 flex items-center gap-3"
        >
          <span class="w-8 h-px bg-gold/50"></span>
          {{ t.home.label }}
        </p>

        <h1 class="font-cinzel font-black leading-none mb-8">
          <span
            class="block text-6xl md:text-8xl max-sm:text-4xl lg:text-[9rem] text-white"
            >{{ t.home.headline1 }}</span
          >
          <span
            class="block text-6xl md:text-8xl max-sm:text-4xl lg:text-[9rem] text-white"
            >{{ t.home.headline2 }}</span
          >
          <span
            class="block text-6xl md:text-8xl max-sm:text-4xl lg:text-[9rem] text-gold italic"
            >{{ t.home.headline3 }}</span
          >
        </h1>

        <p
          class="font-sans text-sm text-white/50 tracking-widest border-l-2 border-gold/40 pl-4 mb-12 max-w-md"
        >
          {{ t.home.tagline }}
        </p>

        <div class="flex flex-wrap gap-4">
          <RouterLink
            to="/contact"
            class="px-8 py-4 bg-gold max-sm:w-full text-black font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            {{ t.home.cta_book }}
          </RouterLink>
          <RouterLink
            to="/academy"
            class="px-8 py-4 max-sm:w-full border border-gold/50 text-gold font-cinzel text-xs tracking-[0.3em] uppercase hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            {{ t.home.cta_academy }}
          </RouterLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span
          class="font-cinzel text-[10px] tracking-[0.4em] text-gold uppercase"
          >Scroll</span
        >
        <div class="w-px h-12 bg-gold/50 animate-pulse"></div>
      </div>
    </section>

    <!-- ── GRAVITY SECTION ── -->
    <section class="relative py-40 px-8 max-md:px-16 overflow-hidden">
      <div
        class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-sm:gap-5 items-center"
      >
        <!-- Image side -->
        <div class="relative hover:**:grayscale-0">
          <div
            class="aspect-3/4 bg-dark2 overflow-hidden relative max-md:h-150 max-md:w-full"
          >
            <img
              src="/src/assets/images/mike-portrait.jpg"
              alt="Mike Barrios"
              class="w-full h-full object-cover grayscale opacity-80 transition-all duration-300"
              onerror="this.style.display = 'none'"
            />
            <div
              class="absolute inset-0 flex items-center justify-center border border-gold/10"
            >
              <span class="font-cinzel text-gold/20 text-xs tracking-widest"
                >MIKE BARRIOS</span
              >
            </div>
          </div>

          <div
            class="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/40 pointer-events-none"
          ></div>
        </div>

        <!-- Text side -->
        <div class="relative z-20 top-0 right-38 max-md:right-0 max-sm:right-0">
          <div
            class="absolute top-50 -right-50 w-96 h-96 md:w-full md:h-full -translate-y-1/2 opacity-10 pointer-events-none"
            style="
              background: radial-gradient(circle, #c9a84c 0%, transparent 70%);
            "
          ></div>
          <div
            class="border border-gold/15 p-8 md:p-12 bg-black/30 backdrop-blur-sm"
          >
            <p
              class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-8"
            >
              {{ t.home.gravity_label }}
            </p>
            <h2 class="font-cinzel font-bold leading-tight mb-8">
              <span class="block text-3xl md:text-4xl text-white">{{
                t.home.gravity_title1
              }}</span>
              <span class="block text-3xl md:text-4xl text-gold italic">{{
                t.home.gravity_title2
              }}</span>
              <span class="block text-3xl md:text-4xl text-white">{{
                t.home.gravity_title3
              }}</span>
            </h2>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-4">
              {{ t.home.gravity_p1 }}
            </p>
            <p class="font-sans text-sm text-white/50 leading-relaxed mb-10">
              {{ t.home.gravity_p2 }}
            </p>
            <RouterLink
              to="/about"
              class="inline-flex items-center gap-3 font-cinzel text-xs tracking-[0.3em] text-gold hover:text-gold-light uppercase group"
            >
              {{ t.home.gravity_cta }}
              <span
                class="w-8 h-px bg-gold transition-all duration-300 group-hover:w-14"
              ></span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── STATS STRIP ── -->
    <section class="border-y border-gold/10 py-12 px-8 md:px-16">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.value" class="text-center">
          <p class="font-cinzel text-3xl md:text-4xl font-bold text-gold mb-2">
            {{ stat.value }}
          </p>
          <p class="font-sans text-xs tracking-[0.2em] text-white/30 uppercase">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- ── SERVICES PREVIEW ── -->
    <section class="py-32 px-8 md:px-16">
      <div class="max-w-7xl mx-auto">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-4 flex items-center gap-3"
        >
          <span class="w-8 h-px bg-gold/40"></span>
          {{ lang === 'es' ? 'Lo que ofrezco' : 'What I offer' }}
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10"
        >
          <div
            v-for="(service, i) in services"
            :key="i"
            class="bg-dark p-8 group hover:bg-dark2 transition-colors duration-500 cursor-pointer"
          >
            <p class="font-cinzel text-xs text-gold/40 tracking-widest mb-6">
              {{ String(i + 1).padStart(2, '0') }}
            </p>
            <h3
              class="font-cinzel text-lg font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300"
            >
              {{ service.title }}
            </h3>
            <p class="font-sans text-xs text-white/40 leading-relaxed">
              {{ service.desc }}
            </p>
            <div
              class="mt-8 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA BANNER ── -->
    <section class="py-32 px-8 md:px-16 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image:
            linear-gradient(rgba(201, 168, 76, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        "
      ></div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          class="font-cinzel text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
        >
          {{
            lang === 'es'
              ? '"El impacto no es un accidente.'
              : '"Impact is not an accident.'
          }}<br />
          <span class="text-gold italic">{{
            lang === 'es' ? 'Es arquitectura."' : 'It is architecture."'
          }}</span>
        </h2>
        <RouterLink
          to="/contact"
          class="inline-block mt-4 px-12 py-4 border border-gold text-gold font-cinzel text-xs tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
        >
          {{
            lang === 'es' ? 'INICIAR LA CONVERSACIÓN' : 'BEGIN THE CONVERSATION'
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

const { lang } = useLang();
const t = computed(() => (lang.value === 'es' ? es : en));

const stats = computed(() => [
  {
    value: '20+',
    label: lang.value === 'es' ? 'Años de experiencia' : 'Years of experience',
  },
  {
    value: '500+',
    label: lang.value === 'es' ? 'Líderes formados' : 'Leaders trained',
  },
  { value: '30+', label: lang.value === 'es' ? 'Países' : 'Countries' },
  {
    value: '3',
    label: lang.value === 'es' ? 'Libros publicados' : 'Books published',
  },
]);

const services = computed(() => [
  {
    title: lang.value === 'es' ? 'Conferencista' : 'Speaker',
    desc:
      lang.value === 'es'
        ? 'Narrativas cinematográficas para audiencias de élite.'
        : 'Cinematic narratives for elite audiences.',
  },
  {
    title: lang.value === 'es' ? 'Formador' : 'Trainer',
    desc:
      lang.value === 'es'
        ? 'Programas de alto rendimiento para equipos corporativos.'
        : 'High-performance programs for corporate teams.',
  },
  {
    title: 'Coach',
    desc:
      lang.value === 'es'
        ? 'Asesoramiento confidencial para la cúpula directiva.'
        : 'Confidential guidance for C-suite executives.',
  },
  {
    title: lang.value === 'es' ? 'Escritor' : 'Writer',
    desc:
      lang.value === 'es'
        ? 'Palabras que redefinen la cultura corporativa.'
        : 'Words that redefine corporate culture.',
  },
]);
</script>
