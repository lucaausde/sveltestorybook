import { addDecorator } from "@storybook/svelte";
import StoryWrapper from "./StoryWrapper.svelte";

function wrapped(storyFn) {
  const { Component: OriginalComponent, props, on } = storyFn();
  return {
    Component: OriginalComponent,
    props,
    on,
    Wrapper: StoryWrapper,
  };
}

addDecorator(wrapped);
