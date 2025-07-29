const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: false, // Deshabilita la detección automática de idioma
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: true,
};
