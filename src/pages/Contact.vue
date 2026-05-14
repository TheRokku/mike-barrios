<template>
  <div class="bg-dark min-h-screen">
    <NavBar />

    <!-- ── HERO ── -->
    <section
      class="relative min-h-[60vh] flex items-end overflow-hidden pt-20 pb-20"
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
        class="absolute bottom-0 left-0 w-150 h-150 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>

      <div class="relative z-10 px-8 md:px-16 max-w-7xl w-full">
        <p
          class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-6 flex items-center gap-3"
        >
          <span class="w-8 h-px bg-gold/40"></span>
          {{ t.events.label }}
        </p>
        <h1 class="font-cinzel font-black leading-none">
          <span
            class="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white"
            >{{ t.events.headline1 }}</span
          >
          <span
            class="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gold italic"
            >{{ t.events.headline2 }}</span
          >
        </h1>
      </div>
    </section>

    <!-- ── EVENTS LIST ── -->
    <section class="px-8 md:px-16 pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Upcoming -->
        <div v-if="upcoming.length" class="mb-20">
          <p
            class="font-cinzel text-xs tracking-[0.4em] text-gold/50 uppercase mb-8 flex items-center gap-3"
          >
            <span class="w-8 h-px bg-gold/30"></span>
            {{ lang === 'es' ? 'Próximos Eventos' : 'Upcoming Events' }}
          </p>

          <div class="space-y-0">
            <div
              v-for="(event, i) in upcoming"
              :key="i"
              class="grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-6 md:gap-12 border border-gold/10 p-6 md:p-8 group hover:bg-dark2 transition-colors duration-300"
              :class="i > 0 ? 'border-t-0' : ''"
            >
              <!-- Date -->
              <div class="text-center border-r border-gold/10 pr-6 md:pr-12">
                <p
                  class="font-cinzel text-3xl md:text-5xl font-bold text-gold leading-none"
                >
                  {{ event.day }}
                </p>
                <p
                  class="font-cinzel text-xs tracking-widest text-white/30 uppercase mt-1"
                >
                  {{ event.month }}
                </p>
              </div>

              <!-- Info -->
              <div>
                <h3
                  class="font-cinzel text-lg md:text-2xl font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300"
                >
                  {{ event.title }}
                </h3>
                <div class="flex flex-wrap items-center gap-2 md:gap-4">
                  <span
                    class="flex items-center gap-1 font-sans text-xs text-white/30"
                  >
                    <MapPin :size="12" class="text-gold/50" />
                    {{ event.city }}
                  </span>
                  <span class="text-gold/20">•</span>
                  <span class="font-sans text-xs text-white/30">{{
                    event.venue
                  }}</span>
                </div>
              </div>

              <!-- CTA -->
              <a
                :href="event.link || '#'"
                class="hidden md:block px-6 py-3 border border-gold/40 text-gold font-cinzel text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300 whitespace-nowrap"
              >
                {{ t.events.reserve }}
              </a>
            </div>
          </div>
        </div>

        <!-- Past -->
        <div v-if="past.length">
          <p
            class="font-cinzel text-xs tracking-[0.4em] text-white/20 uppercase mb-8 flex items-center gap-3"
          >
            <span class="w-8 h-px bg-white/10"></span>
            {{ lang === 'es' ? 'Eventos Anteriores' : 'Past Events' }}
          </p>

          <div class="space-y-0 opacity-40">
            <div
              v-for="(event, i) in past"
              :key="i"
              class="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] items-center gap-6 md:gap-12 border border-white/5 p-6 md:p-8"
              :class="i > 0 ? 'border-t-0' : ''"
            >
              <div class="text-center border-r border-white/5 pr-6 md:pr-12">
                <p
                  class="font-cinzel text-3xl md:text-5xl font-bold text-white/30 leading-none"
                >
                  {{ event.day }}
                </p>
                <p
                  class="font-cinzel text-xs tracking-widest text-white/20 uppercase mt-1"
                >
                  {{ event.month }}
                </p>
              </div>
              <div>
                <h3
                  class="font-cinzel text-lg md:text-2xl font-semibold text-white/50 mb-2"
                >
                  {{ event.title }}
                </h3>
                <div class="flex flex-wrap items-center gap-2 md:gap-4">
                  <span class="font-sans text-xs text-white/20">{{
                    event.city
                  }}</span>
                  <span class="text-white/10">•</span>
                  <span class="font-sans text-xs text-white/20">{{
                    event.venue
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ── MEDIA PREVIEW ── -->
    <section class="py-20 px-8 md:px-16 border-t border-gold/10">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <!-- Latest YouTube video -->
        <div>
          <p
            class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-6 flex items-center gap-3"
          >
            <span class="w-8 h-px bg-gold/40"></span>
            {{ lang === 'es' ? 'Último Video' : 'Latest Video' }}
          </p>
          <div
            class="relative aspect-video bg-dark2 border border-gold/10 overflow-hidden group"
          >
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/KuadoVQycEc?si=sHwcBiaMPS882kV3"
              title="YouTube video player"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <a
            href="https://youtube.com/@miguelbarriosoficial"
            target="_blank"
            class="inline-flex items-center gap-3 mt-6 font-cinzel text-xs tracking-[0.3em] text-gold/60 uppercase hover:text-gold transition-colors duration-300 group"
          >
            {{ lang === 'es' ? 'VER CANAL COMPLETO' : 'VIEW FULL CHANNEL' }}
            <span
              class="w-6 h-px bg-gold/40 group-hover:w-10 transition-all duration-300"
            ></span>
          </a>
        </div>

        <!-- Socials -->
        <div>
          <p
            class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-8 flex items-center gap-3"
          >
            <span class="w-8 h-px bg-gold/40"></span>
            {{ lang === 'es' ? 'Presencia Digital' : 'Digital Presence' }}
          </p>

          <div class="space-y-0">
            <a
              v-for="social in socials"
              :key="social.handle"
              :href="social.url"
              target="_blank"
              class="flex items-center justify-between p-6 border border-gold/10 group hover:bg-dark2 transition-colors duration-300"
              :class="social !== socials[0] ? 'border-t-0' : ''"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300"
                >
                  <component
                    :is="social.icon"
                    :size="16"
                    class="text-gold/60 group-hover:text-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <p
                    class="font-cinzel text-sm font-bold text-white group-hover:text-gold transition-colors duration-300"
                  >
                    {{ social.platform }}
                  </p>
                  <p class="font-sans text-xs text-white/30 mt-0.5">
                    {{ social.handle }}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="font-cinzel text-xs text-white/20">{{
                  social.followers
                }}</span>
                <ArrowUpRight
                  :size="14"
                  class="text-gold/30 group-hover:text-gold transition-colors duration-300"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- ── RESERVE CTA ── -->
    <section
      class="py-20 px-8 md:px-16 border-t border-gold/10 relative overflow-hidden"
    >
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p
            class="font-cinzel text-xs tracking-[0.4em] text-gold/60 uppercase mb-4 flex items-center gap-3"
          >
            <span class="w-8 h-px bg-gold/40"></span>
            {{ lang === 'es' ? 'Asegura tu lugar' : 'Secure your seat' }}
          </p>
          <h2
            class="font-cinzel text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
          >
            {{
              lang === 'es'
                ? 'Los cupos son limitados por diseño.'
                : 'Seats are limited by design.'
            }}
          </h2>
          <p class="font-sans text-sm text-white/40 leading-relaxed">
            {{
              lang === 'es'
                ? 'Cada evento es una experiencia de acceso exclusivo. No hay segunda oportunidad para la primera transformación.'
                : 'Every event is an exclusive-access experience. There is no second chance at a first transformation.'
            }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 md:justify-end">
          <RouterLink
            to="/contact"
            class="px-10 py-4 bg-gold text-black font-cinzel text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300 text-center"
          >
            {{ lang === 'es' ? 'CONTACTAR AHORA' : 'CONTACT NOW' }}
          </RouterLink>
          <a
            href="mailto:info@mikebarrios.com"
            class="px-10 py-4 border border-gold/40 text-gold font-cinzel text-xs tracking-[0.3em] uppercase hover:border-gold hover:bg-gold/5 transition-all duration-300 text-center"
          >
            {{ lang === 'es' ? 'ENVIAR CORREO' : 'SEND EMAIL' }}
          </a>
        </div>
      </div>
    </section>
    <!-- ── CORPORATE BOOKING ── -->
    <section
      class="py-32 px-8 md:px-16 border-t border-gold/10 relative overflow-hidden"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #c9a84c 0%, transparent 70%)"
      ></div>

      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <div
          class="w-10 h-10 border border-gold/30 flex items-center justify-center mx-auto mb-8"
        >
          <Briefcase :size="16" class="text-gold" />
        </div>
        <h2
          class="font-cinzel text-2xl md:text-4xl font-bold text-white tracking-wide mb-6"
        >
          {{ t.events.booking_title }}
        </h2>
        <p
          class="font-sans text-sm text-white/40 leading-relaxed mb-12 max-w-xl mx-auto"
        >
          {{ t.events.booking_sub }}
        </p>
        <RouterLink
          to="/contact"
          class="inline-block px-12 py-4 border border-gold text-gold font-cinzel text-xs tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
        >
          {{ t.events.booking_cta }}
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
import {
  MapPin,
  Briefcase,
  ArrowUpRight,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from 'lucide-vue-next';

const { lang } = useLang();
const t = computed(() => (lang.value === 'es' ? es : en));

const socials = computed(() => [
  {
    platform: 'Instagram',
    handle: '@mikebarrios.inversiones',
    url: 'https://www.instagram.com/mikebarrios.inversiones/',
    icon: Instagram,
    followers: '2.5k',
  },
  {
    platform: 'Linkedin',
    handle: 'Miguel Barrios',
    url: 'https://www.linkedin.com/in/miguelbarriosoficial/',
    icon: Linkedin,
    followers: '26k',
  },
  {
    platform: 'Youtube',
    handle: '@miguelbarriosoficial',
    url: 'https://youtube.com/@miguelbarriosoficial',
    icon: Youtube,
    followers: '274',
  },
]);

const allEvents = computed(() => [
  {
    day: '15',
    month: lang.value === 'es' ? 'OCT' : 'OCT',
    title:
      lang.value === 'es'
        ? 'Liderazgo en Tiempos de Crisis'
        : 'Leadership in Times of Crisis',
    city: lang.value === 'es' ? 'Madrid, España' : 'Madrid, Spain',
    venue: 'Palacio de Congresos',
    date: new Date('2025-10-15'),
    link: '#',
  },
  {
    day: '02',
    month: 'NOV',
    title:
      lang.value === 'es' ? 'El Arte de la Influencia' : 'The Art of Influence',
    city: lang.value === 'es' ? 'Ciudad de México, MX' : 'Mexico City, MX',
    venue: 'Auditorio Nacional',
    date: new Date('2025-11-02'),
    link: '#',
  },
  {
    day: '20',
    month: 'NOV',
    title:
      lang.value === 'es'
        ? 'Oratoria de Alto Impacto'
        : 'High-Impact Public Speaking',
    city: lang.value === 'es' ? 'Bogotá, Colombia' : 'Bogotá, Colombia',
    venue: 'Centro Ágora',
    date: new Date('2025-11-20'),
    link: '#',
  },
  {
    day: '18',
    month: lang.value === 'es' ? 'ENE' : 'JAN',
    title:
      lang.value === 'es'
        ? 'Arquitectura del Poder'
        : 'The Architecture of Power',
    city: lang.value === 'es' ? 'Miami, EE.UU.' : 'Miami, USA',
    venue: 'Adrienne Arsht Center',
    date: new Date('2026-01-18'),
    link: '#',
  },
]);

const now = new Date();
const upcoming = computed(() => allEvents.value.filter((e) => e.date >= now));
const past = computed(() => allEvents.value.filter((e) => e.date < now));
</script>
