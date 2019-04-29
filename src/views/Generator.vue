<template>
  <main>
    <div class="generator">
      <div class="preview" :title="previewTitle" v-html="svg"></div>
      <div class="buttons">
        <button class="button" @click="generate">
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
            ></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <span>GENERATE</span>
        </button>
        <button class="button" @click="download">
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
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
