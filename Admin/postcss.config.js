import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
