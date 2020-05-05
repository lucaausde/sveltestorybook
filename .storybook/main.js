module.exports = {
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register",
  ],
  stories: ["../src/components/**/**/**/**/*.stories.[tj]s"],
};
