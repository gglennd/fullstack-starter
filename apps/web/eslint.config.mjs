import createConfig from "@gglennd/eslint-config";

export default createConfig({
  typescript: true,
  react: true,
  ignores: ["./src/routeTree.gen.ts"],
});
