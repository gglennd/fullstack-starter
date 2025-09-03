/* eslint-disable node/prefer-global/process */
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";

import { db } from "../db";
import * as schema from "../db/schema";

const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL as string,
  plugins: [
    openAPI({ disableDefaultReference: process.env.NODE_ENV === "production" }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  telemetry: {
    enabled: false,
  },
});

export default auth;
