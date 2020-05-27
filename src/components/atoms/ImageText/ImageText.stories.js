import ImageText from "./ImageText.svelte";

export default { title: "ImageText" };

export const primary = () => ({
  Component: ImageText,
  props: {
    textidea: "Flamingo",
  },
});
