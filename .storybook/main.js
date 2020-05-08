//https://github.com/goooseman/storybook-addon-i18n
module.exports = {
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
  ],
  stories: ["../src/components/**/**/**/**/*.stories.[tj]s"],
};
