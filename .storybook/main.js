module.exports = {
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
  ],
  stories: ["../src/**/*.stories.[tj]s"],
};
