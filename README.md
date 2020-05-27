# sveltestorybook

> A template for Svelte apps

State of development: 🐣 [May, 8. 2020]

This is a project template for [Svelte](https://svelte.dev) apps. To simplify the development workflow, this template extends [sass/scss](https://sass-lang.com) and [Storybook](https://storybook.js.org) - with some addons - as well as other modules like [svelte-themer](https://github.com/josefaidt/svelte-themer). Feel free to use, copy, modify, merge or publish this template. (You may only use the [image](https://github.com/lucaausde/sveltestorybook/blob/master/src/components/atoms/ImageText/assets/flamingo.JPG) for personal use. To get the original image, just get in touch with me.)

## Getting started ...

1. After cloning this repository, please install all dependencies with either npm or yarn.

```bash
yarn
npm i
```

2. Once you're done downloading the dependencies, start eiter storybook or the rollup development server.

```bash
yarn storybook
yarn dev
```

3. When finished developing, build the app.

```bash
yarn build
```

## New to Svelte?

Check out their [tutorial](https://svelte.dev/tutorial/basics) or read their [documentation](https://svelte.dev/docs).

## Don't know how to write stories?

Take the `ImageText` component as reference. `ImageText` is currently residing at [/src/components/atoms/ImageText/ImageText.svelte](https://github.com/lucaausde/sveltestorybook/blob/master/src/components/atoms/ImageText/ImageText.svelte). And the component's story at [/src/components/atoms/ImageText/ImageText.stories.js](https://github.com/lucaausde/sveltestorybook/blob/master/src/components/atoms/ImageText/ImageText.stories.js).

```bash
import YourComponent from "./YourComponent.svelte";

export default { title: "YourComponent" };

export const description = () => ({
  Component: YourComponent,
  props: {
    text: "Passing a prop",
  },
});

```

## Want to use variables?

No problem, I've got you covered. With [svelte-themer](https://github.com/josefaidt/svelte-themer) you can easily create themes and access [variables](https://github.com/lucaausde/sveltestorybook/blob/master/src/constants/theme/theme.js) in all Svelte files. Check out this [example](https://github.com/lucaausde/sveltestorybook/blob/master/src/components/atoms/ImageText/ImageText.svelte)!

---

Thank you for using my template! 🏆
