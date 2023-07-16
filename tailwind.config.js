/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ["var(--font-rubik)"],
                noto: ["var(--font-noto-serif)"],
            },
            colors: {
                growth: {
                    light: "#7EE7AC",
                    DEFAULT: "#2ECC71",
                    dark: "009943",
                },
                darkness: "#171614",
            },
        },
    },
    plugins: [],
};
