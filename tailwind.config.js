
// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui';

// export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     daisyui, // Use the imported daisyui here
//   ],
// };




// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui';

// export default {
//   content: ["./src/**/*.{html,js,jsx}"], // Ensure `.jsx` is included
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui], // DaisyUI plugin
// };



/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,  // Using daisyui directly as ES module
  ],
}