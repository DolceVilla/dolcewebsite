/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
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
      
    },
  },
  plugins: [
    
    
  ],
}