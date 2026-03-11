/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // Include all files under `app/` (routes/layouts/components) so Tailwind scans them.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        "secondary-color": "#FF6347",
        accent: "#AB8BFF",
        GB: "#0dd514ff",
      },
    },
  },
  plugins: [],
};