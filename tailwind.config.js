module.exports = {
  content: ["./app/**/*.(tsx|mdx)", "./app/root.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
}
