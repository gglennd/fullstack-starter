import { Hono } from "hono";
import { logger } from "hono/logger";

import factory from "./factory";
import { serveStatic } from "@hono/node-server/serve-static";
import { env } from "hono/adapter";

const app = new Hono({ strict: false })
  .use(logger())

const api = factory.createApp().basePath("/api")
  .get("/", c => c.json({ health: "Ok" }, 200))

const routes = [api] as const
routes.map(route => app.route("/", route))

app.use("*", async (c, next) => {
  const { NODE_ENV } = env<{ NODE_ENV: "production" | "development" }>(c)
  const isProd = NODE_ENV === "production"
  if (!isProd) {
    return c.text("Hello from Hono!")
  }
  return next()
}, serveStatic({
  root: "./dist/static",
  index: "index.html"
}))

export type RoutesType = typeof routes
export default app