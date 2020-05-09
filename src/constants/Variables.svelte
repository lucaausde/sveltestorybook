<script>
  import { onDestroy } from 'svelte';
  const breakpoints = [
    {name: "small", value: "300px"},
    {name: "medium", value: "1400px"},
  ];

  const variables = [
    {name: "font-standard", value: '"Mukta, Helvetica, Arial, Ubuntu"'}
  ];

  breakpoints.forEach((item, index) => {
    document.documentElement.style.setProperty('--media-'+item.name, item.value);
  });

  variables.forEach((item, index) => {
    document.documentElement.style.setProperty('--'+item.name, item.value);
  });

	onDestroy(() => {
		breakpoints.forEach((item, index) => {
      document.documentElement.style.removeProperty('--media-'+item.name);
    });

    variables.forEach((item, index) => {
      document.documentElement.style.removeProperty('--'+item.name);
    });
	});
</script>