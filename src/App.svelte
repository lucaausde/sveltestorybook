<script>
	import { ThemeWrapper, ThemeToggle } from "svelte-themer";
	import { themes } from './constants/theme/themes.js';
</script>

<style type="text/scss">
	@import "./constants/media/mediaVariables.scss";

	main {
		text-align: center;
	}
	@media screen and (max-width: $md) {
    main {
        color: var(--theme-fancytext);
    }
  }
</style>

<ThemeWrapper themes="{themes}">
	<main>
	<ThemeToggle />
		<h1>Hello!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</main>
</ThemeWrapper>