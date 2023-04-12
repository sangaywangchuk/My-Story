/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

  ],
  safelist: [
    'h-16 w-16 rounded-full', 'grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2','text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl','flex items-center gap-x-6'
  ],
  theme: {
    extend: {},
  },
}

