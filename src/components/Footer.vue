<template>
  <footer>
    <div class="source">
      Made with
      <span>❤</span> in Berlin.
      <br>You can find the source code on
      <a
        href="https://github.com/ehmprah/geometric-tattoo-generator.com"
      >GitHub</a>.
    </div>
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/privacy">Privacy</router-link>
      <router-link to="/imprint">Imprint</router-link>
    </nav>
  </footer>
</template>

<style lang="scss">
footer {
  text-align: center;
  nav {
    padding: 0.75em;
    background: #e0e0e0;
    a {
      margin: 0 0.75em;
    }
  }
  .source {
    padding: 0.75em;
    background: #f3f3f3;
    span {
      color: lightseagreen;
    }
  }
}
</style>



