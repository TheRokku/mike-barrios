import { ref } from 'vue';

const lang = ref(localStorage.getItem('mb-lang') || null);

export function useLang() {
  function setLang(l) {
    lang.value = l;
    localStorage.setItem('mb-lang', l);
  }

  return { lang, setLang };
}
