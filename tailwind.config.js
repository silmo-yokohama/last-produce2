/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Noto Serif JP', 'serif']
      },
      height: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      minHeight: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      maxHeight: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      textColor: theme => ({
        'gold': 'rgb(223,194,86)'
      }),
      backgroundImage: theme => ({
        'main-bg': "url('/public/images/background.png)"
      }),
      backgroundColor: theme => ({
        'main-btn': '#FACC14',
        'main-dark': '#1F2937',
        'main': '#FFFBEB'
      })
    },
  },
  plugins: [],
}

