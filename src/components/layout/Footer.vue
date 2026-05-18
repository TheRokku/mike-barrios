<template>
  <footer class="bg-black border-t border-gold/10 pt-16 pb-8 px-8 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <!-- Brand -->
        <div>
          <h3
            class="font-cinzel text-2xl font-bold text-white leading-tight mb-4"
          >
            MIKE<br />BARRIOS
          </h3>
          <p
            class="font-['Montserrat',sans-serif] text-xs text-white/40 tracking-wide leading-relaxed"
          >
            {{ t.footer.tagline }}
          </p>
        </div>

        <!-- Nav links -->
        <div class="flex gap-12">
          <ul class="space-y-3">
            <li v-for="item in col1" :key="item.key">
              <RouterLink
                :to="item.path"
                class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] uppercase text-white/50 hover:text-gold transition-colors"
              >
                {{ t.nav[item.key] }}
              </RouterLink>
            </li>
          </ul>
          <ul class="space-y-3">
            <li v-for="item in col2" :key="item.key">
              <RouterLink
                :to="item.path"
                class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] uppercase text-white/50 hover:text-gold transition-colors"
              >
                {{ t.nav[item.key] }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="flex flex-col gap-3 md:items-end">
          <a
            href="https://www.instagram.com/mikebarrios.inversiones/"
            class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] uppercase text-white/50 hover:text-gold transition-colors"
            ><InstagramIcon
          /></a>
          <a
            href="https://www.linkedin.com/in/miguelbarriosoficial/"
            class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] uppercase text-white/50 hover:text-gold transition-colors"
            ><LinkedinIcon
          /></a>
          <a
            href="https://youtube.com/@miguelbarriosoficial"
            class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] uppercase text-white/50 hover:text-gold transition-colors"
            ><PlayIcon
          /></a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/5 pt-8">
        <p
          class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] text-white/20 uppercase"
        >
          {{ t.footer.rights }}
        </p>
        <a
          :title="
            lang === 'en'
              ? 'Employ my services clicking here'
              : 'Contrata mis servicios haciendo click aquí'
          "
          href="https://github.com/TheRokku"
          target="_blank"
          class="font-['Montserrat',sans-serif] text-xs tracking-[0.15em] text-white/20 hover:text-white/80 hover:*:text-gold-light transition-colors uppercase align-middle my-2"
        >
          {{ lang === 'en' ? 'Made with quality by ' : 'Hecho con calidad por '
          }}<span class="font-bold text-gold transition-colors">TheRokku</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useLang } from '../../composables/useLang.js';
import en from '../../composables/lang/en.js';
import es from '../../composables/lang/es.js';
import { InstagramIcon, LinkedinIcon, PlayIcon } from 'lucide-vue-next';

const { lang } = useLang();
const t = computed(() => (lang.value === 'es' ? es : en));

const col1 = [
  { key: 'speaker', path: '/services#speaker' },
  { key: 'trainer', path: '/services#trainer' },
  { key: 'coach', path: '/services#coach' },
];
const col2 = [
  { key: 'writer', path: '/services#writer' },
  { key: 'academy', path: '/academy' },
  { key: 'contact', path: '/contact' },
];
</script>
