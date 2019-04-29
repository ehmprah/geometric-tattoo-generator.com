<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  font-size: 14px;
  line-height: 1.5em;
  user-select: none;
  font-family: sans-serif;
  display: flex;
  margin: 0;
}

h1,
h2 {
  font-family: Impact, Charcoal, sans-serif;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.5em;
  margin: 1.5em 0 0.5em 0;
  text-transform: uppercase;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a,
a:visited,
a:active,
a:hover {
  text-decoration: none;
  color: lightseagreen;
}

img {
  max-width: 100%;
  height: auto;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;

  main {
    margin: 1em auto;
    max-width: 400px;
    padding: 0 10px;
  }
}
</style>
