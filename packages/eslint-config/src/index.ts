import antfu from "@antfu/eslint-config";

type AntfuParams = Parameters<typeof antfu>;
type AntfuReturn = ReturnType<typeof antfu>;
type Options = AntfuParams[0];
type UserConfigs = AntfuParams[1][];

export default function createConfig(options?: Options, ...userConfigs: UserConfigs): AntfuReturn {
  return antfu({
    type: "app",
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ...options,
  }, ...userConfigs);
}
