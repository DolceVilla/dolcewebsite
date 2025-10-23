/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        mobile: '480px',
        tablet: '768px',
        smallLaptop:'1024px',
        mediumLaptop:'1200px',
        laptop:'1366px',
        desktop:'1600px',
        

      },
      colors:{
        gold: '#FABC14'
      },
      
      keyframes:{
                slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        animation: {
       
        slideUp: 'slideUp 0.5s ease-out forwards',
        }
      },
      fontFamily: {
        sans: ['Helvetica','Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono:['Courier New','monospace'],
      },
      backgroundImage:{
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))'
      },
      clipPath:{
        'slide-top-bottom-rtl': 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
      },
    },
  },
  plugins: [
    
    function ({ addUtilities, theme })
    {
      const newUtilities = {
        '.clip-slide-top-bottom-rtl' :{
          clipPath:
          theme('clipPath.slide-top-bottom-rtl')
        },
      }
      addUtilities(newUtilities)
    }
  ],
}