import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      /** @see https://github.com/bcoe/c8#checking-for-full-source-coverage-using---all */
      src: ["./src"],
      all: true,
      reporter: ["text", "lcov"],
    },
  },
})
