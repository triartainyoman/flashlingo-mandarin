/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Serif TC", "serif"],
      },
      boxShadow: {
        "custom-glow": "0 0 10px rgba(119, 73, 248, 0.5)",
      },
      colors: {
        customBlack: "#343A40",
        customSecondary: "#6C757D",
        customPrimary: "#7749F8",
        customPrimaryHover: "#563D7C",
        customDanger: "#DC3545",
        customDangerHover: "#B02A37",
        customSuccess: "#198754",
        customSuccessHover: "#155E34",
        customInfo: "#0DCAF0",
        customWarning: "#FFC107",
      },
    },
  },
  plugins: [],
}


