import { ui } from './ui';

export const languages = {
    en: 'English',
    es: 'Spanish',
};

export const localeDateString = {
    es: 'es-ES',
    en: 'en-US'
}

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}