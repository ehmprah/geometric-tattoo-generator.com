<template>
  <main>
    <div class="generator">
      <div class="preview" :title="previewTitle" v-html="svg"></div>
      <div class="buttons">
        <button class="button" @click="generate">
          <div v-html="require('!html-loader!@/assets/generate.svg')"></div>
          <span>GENERATE</span>
        </button>
        <button class="button" @click="download">
          <div v-html="require('!html-loader!@/assets/download.svg')"></div>
          <span>DOWNLOAD</span>
        </button>
      </div>
      <Share/>
    </div>
  </main>
</template>

<script>
import Share from '@/components/Share.vue';
import { generate } from '@/generator/generator';
import { randomHash } from '@/util/util';

export default {
  computed: {
    svg: function() {
      return generate(this.$route.params.version, this.$route.params.hash);
    },
    previewTitle: function() {
      return `Geometric Tattoo Design #${this.$route.params.hash}`;
    },
    previewBackground: function() {
      return `background-image: url(data:image/svg+xml;base64,${btoa(
        this.svg,
      )})`;
    },
  },
  methods: {
    generate() {
      return this.$router.push('/t/v2/' + randomHash());
    },
    download() {
      const el = document.createElement('a');
      el.download = `geometric-tattoo-generator.com - ${
        this.$route.params.version
      } - #${this.$route.params.hash}.svg`;
      el.href = `data:image/svg+xml;base64,${btoa(this.svg)}`;
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    },
  },
  components: {
    Share,
  },
};
</script>

<style lang="scss">
.preview svg {
  display: block;
  width: 100%;
  height: 100%;
}

.button {
  padding: 0.75em;
  margin: 0 0 1em;
  border: none;
  background: lightseagreen;
  border-radius: 2px;
  font-family: Impact;
  font-size: 1.75em;
  line-height: 1em;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 0.5em;
    width: 32px;
  }
}
</style>
