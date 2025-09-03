import createConfig from "@gglennd/eslint-config";

export default createConfig({
  typescript: true,
  ignores: ["./migrations"],
});
