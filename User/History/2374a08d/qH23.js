/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",

  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
