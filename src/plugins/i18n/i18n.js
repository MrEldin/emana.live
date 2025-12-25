import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  // Use import.meta.glob with { eager: true } to load all JSON files
  const locales = import.meta.glob('@/locales/*.json', { eager: true });
  const messages = {};

  for (const path in locales) {
    const matched = path.match(/\/locales\/(.*)\.json$/i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      // Access the module directly since eager: true loads the module
      messages[locale] = locales[path].default || locales[path];
    }
  }

  return messages;
}

export default createI18n({
  legacy: false,
  locale: 'sr', // default locale
  fallbackLocale: 'en', // fallback locale
  messages: loadLocaleMessages(),
});
