import Text from "./Text.svelte";

export default { title: "Text" };

export const text = () => ({
  Component: Text,
  props: {
    text: "Hallo text",
  },
});
