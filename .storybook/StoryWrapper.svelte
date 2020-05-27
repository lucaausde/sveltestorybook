<script>
  import "../src/constants/styles/globals.scss";
  import { ThemeWrapper, ThemeToggle } from "svelte-themer";
	import { themes } from '../src/constants/theme/themes.js';
</script>

<style>
  div {
    display: block;
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
</style>

<ThemeWrapper themes="{themes}">
  <div><ThemeToggle /></div>
  <slot></slot>
</ThemeWrapper>