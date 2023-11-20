import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin({
      emitCssInSsr: true, // 기본값은 true, CSS 평가를 서버 측 또는 컴파일 타임 책임으로 옮기는 속성
    }),
    react(),
  ],
});
