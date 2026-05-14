<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-10 transition-all duration-500',
      scrolled
        ? 'py-3 bg-black/90 backdrop-blur-md border-b border-gold/10'
        : 'py-5 bg-transparent',
    ]"
  >
    <!-- Logo -->
    <RouterLink
      to="/home"
      class="font-cinzel text-sm md:text-base font-bold tracking-[0.2em] text-gold hover:opacity-80 transition-opacity"
    >
      MIKE BARRIOS
    </RouterLink>

    <!-- Desktop nav -->
    <ul class="hidden md:flex items-center gap-5 md:gap-8">
      <li v-for="item in navItems" :key="item.key" class="relative">
        <RouterLink
          :to="item.path"
          class="nav-link font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-300 text-nowrap"
          :class="
            isActive(item.path) ? 'text-gold' : 'text-white/50 hover:text-white'
          "
        >
          {{ t.nav[item.key] }}
        </RouterLink>
        <span
          class="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ease-in-out"
          :style="{
            width: isActive(item.path) ? '100%' : '0%',
            opacity: isActive(item.path) ? 1 : 0,
          }"
        >
        </span>
      </li>
    </ul>

    <!-- Right side -->
    <div class="flex items-center gap-4">
      <!-- Lang toggle -->
      <button
        @click="toggleLang"
        class="font-cinzel text-xs tracking-[0.2em] text-gold/70 hover:text-gold transition-colors text-nowrap md:pl-2 align-middle"
      >
        {{ lang === 'en' ? 'EN/ES' : 'ES/EN' }}
      </button>

      <!-- Mobile menu button -->
      <button @click="menuOpen = !menuOpen" class="md:hidden text-white">
        <Menu v-if="!menuOpen" :size="20" />
        <X v-else :size="20" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="menu">
      <div
        v-if="menuOpen"
        class="absolute top-full left-0 right-0 bg-dark/60 backdrop-blur-md border-b border-gold/10 md:hidden max-[768px]:block"
      >
        <ul class="flex flex-col py-6">
          <li v-for="item in navItems" :key="item.key">
            <RouterLink
              :to="item.path"
              @click="menuOpen = false"
              class="block px-8 py-3 font-['Montserrat',sans-serif] text-xs tracking-[0.2em] uppercase transition-colors"
              :class="
                isActive(item.path)
                  ? 'text-gold'
                  : 'text-white/70 hover:text-white'
              "
            >
              {{ t.nav[item.key] }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';
import { useLang } from '../../composables/useLang.js';
import en from '../../composables/lang/en.js';
import es from '../../composables/lang/es.js';

const { lang, setLang } = useLang();
const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);
const activePath = ref('');

const t = computed(() => (lang.value === 'es' ? es : en));

const navItems = [
  { key: 'services', path: '/services' },
  { key: 'speaker', path: '/services#speaker' },
  { key: 'trainer', path: '/services#trainer' },
  { key: 'coach', path: '/services#coach' },
  { key: 'writer', path: '/services#writer' },
  { key: 'about', path: '/about' },
  { key: 'academy', path: '/academy' },
  { key: 'contact', path: '/contact' },
];

watch(
  () => route.fullPath,
  (val) => {
    activePath.value = '';
    setTimeout(() => {
      activePath.value = val;
    }, 50);
  },
  { immediate: true },
);

// Scroll spy for services sections
let observers = [];

watch(
  () => route.path,
  (path) => {
    observers.forEach((o) => o.disconnect());
    observers = [];

    if (path !== '/services') return;

    const sections = ['speaker', 'trainer', 'coach', 'writer'];

    setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                activePath.value = `/services#${id}`;
              }
            });
          },
          { threshold: 0.4 },
        );

        observer.observe(el);
        observers.push(observer);
      });
    }, 200);
  },
  { immediate: true },
);

function isActive(path) {
  if (path.includes('#')) {
    const [, hash] = path.split('#');
    return activePath.value === `/services#${hash}`;
  }
  return (
    activePath.value === path ||
    (activePath.value.startsWith(path + '#') && path === '/services')
  );
}

function toggleLang() {
  setLang(lang.value === 'en' ? 'es' : 'en');
}

function onScroll() {
  scrolled.value = window.scrollY > 50;
}

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  observers.forEach((o) => o.disconnect());
});
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
