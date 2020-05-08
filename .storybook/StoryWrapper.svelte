<script context="module">
  import "../public/fonts/fonts.css";
  import "../src/constants/styles/normalize.css";
  import "../src/constants/styles/globals.css";
  import { ThemeWrapper } from "svelte-themer";
  import { themes } from "../src/constants/theme/theme.js";
</script>

<ThemeWrapper themes="{themes}">
  <slot></slot>
</ThemeWrapper>