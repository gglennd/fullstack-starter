import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: ".//migrations",
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    // eslint-disable-next-line node/prefer-global/process
    url: process.env.DATABASE_URL,
  },
  casing: "snake_case",
});
