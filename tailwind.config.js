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
      gray:"#F2F8FF",
      slate:"#e1e2e4",
      description:"#625A57",
      bgProducts:"#F8F9FC",
      bgSearch:"#FBFBFB",
      subheading:"#1C0902",
      bgBox:"#EEEEEE",
      bgBoxCircle:"#ff0000",
      bgManager:"#B25559",
      bgServices:"#4A5B73",
      services:"#1C0902",
      email:"#33A593",
      footer:"#1A1A1A",
      bgNewest:"#FCFBFC",
      bgContact:"#002A55",
      bgInputs:"#EDF6FF"
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