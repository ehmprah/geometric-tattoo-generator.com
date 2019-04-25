<template>
  <div class="link">
    <span>Permalink:</span>
    <input
      readonly
      id="permalink"
      onfocus="this.select();"
      onmouseup="return false;"
      type="text"
      value="{{ permalink }}"
    >
  </div>
</template>

<script>
export default {
  computed: {
    // TODO either hide share comp on pages and front, or create article layout with it
    url: function() {
      return `https://handbuch-programmieren.de${this.$page.path}`;
    },
  },
};
</script>

<style lang="scss">
.link {
  display: flex;
  margin-bottom: 1em;
  justify-content: space-around;
  align-items: center;
}

.link span {
  flex: 0;
}

.link input {
  flex: 1;
  padding: 0.5em;
  border: none;
  font: inherit;
  &:focus {
    outline: none;
  }
}
</style>



