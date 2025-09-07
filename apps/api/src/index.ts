import { serve } from "@hono/node-server"
import app from "./app"
import { getRuntimeKey } from "hono/adapter"

const runtime = getRuntimeKey()

serve({
  fetch: app.fetch,
  port: process.env.PORT as unknown as number || 3000
}, info => console.info(`${runtime} : running on port`, info.port))