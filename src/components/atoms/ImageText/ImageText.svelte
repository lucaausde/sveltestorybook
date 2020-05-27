<script>
  export let textidea = "Flamingo";
  // image credits: © lucaausde 2020
  import image from "./assets/flamingo.JPG";
  let width = "300px";
</script>

<style type="text/scss">
  @import "../../../constants/media/mediaVariables.scss";
  main img {
    max-width: 100%;
  }
  @media(max-width: $md) {
    main {
      div {
        color: red;
      }
    }
  }
</style>

<main>
  <img src={image} alt="Eule">
  <div>{textidea}</div>
</main>