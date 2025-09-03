import { serve } from "@hono/node-server";
import { getRuntimeKey } from "hono/adapter";
import app from "./app";

const runtime = getRuntimeKey();

serve({
  fetch: app.fetch,
  // eslint-disable-next-line node/prefer-global/process
  port: process.env.PORT as unknown as number || 3000,
// eslint-disable-next-line no-console
}, info => console.info(`${runtime} : running on port`, info.port));
