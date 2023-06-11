/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Gotham SSm A, sans-serif'],
    },
    minWidth: {
      'base': '0px',
      'hidden-list-menu': '1153px',
    },
    screens: {
      'base': '0px',
      'show-list-menu': '1153px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'bg-exa': 'url(/pexels-cliford-mervil-2469122.jpg)',
        'model-3': 'url(/models/Model-3.avif)',
        'model-y': 'url(/models/Model-Y.avif)',
        'model-s': 'url(/models/Model-S.avif)',
        'model-x': 'url(/models/Model-X.avif)',
        'solar-panels': 'url(/models/SolarPanels.avif)',
        'solar-roof': 'url(/models/SolarRoof.avif)',
        'accessories': 'url(/models/Accessories.avif)',
      },

      maxWidth: {
        'hidden-models': '1153px',
      },
    },
  },
  plugins: [],
}
