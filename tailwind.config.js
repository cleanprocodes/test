/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container:{
      center:true
    },
    colors:{
      primary:"#1A5AFF",
      white:"#fff",
      slate:"#e1e2e4",
      description:"#625A57",
      bgProducts:"#F8F9FC",
      bgSearch:"#FBFBFB",
      subheading:"#1C0902",
      bgBox:"#EEEEEE",
      bgBoxCircle:"#ff0000"
    },
    extend: {
      fontFamily:{
        sans:"IranSans"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}