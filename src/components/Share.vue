<template>
  <div class="share">
    <a class="permalink" @click="copyPermalink" title="Copy Permalink" href="#">
      <div v-html="require('!html-loader!@/assets/copy.svg')"></div>
    </a>
    <a
      class="mail"
      onclick="gtag('event', 'share', { 'event_label': 'Mail' });"
      target="_blank"
      title="Share via mail"
      :href="`mailto:?body=${url}`"
    >
      <div v-html="require('!html-loader!@/assets/mail.svg')"></div>
    </a>
    <a
      class="facebook"
      onclick="gtag('event', 'share', { 'event_label': 'Facebook' });"
      target="_blank"
      title="Share via Facebook"
      :href="`http://www.facebook.com/sharer.php?u=${url}`"
    >
      <div v-html="require('!html-loader!@/assets/facebook.svg')"></div>
    </a>
    <a
      class="twitter"
      onclick="gtag('event', 'share', { 'event_label': 'Twitter' });"
      target="_blank"
      title="Share via Twitter"
      :href="`http://twitter.com/share?url=${url}`"
    >
      <div v-html="require('!html-loader!@/assets/twitter.svg')"></div>
    </a>
    <a
      class="whatsapp"
      onclick="gtag('event', 'share', { 'event_label': 'Whatsapp' });"
      :href="`whatsapp://send?text=${url}`"
      title="Share via Whatsapp"
      data-action="share/whatsapp/share"
    >
      <div v-html="require('!html-loader!@/assets/whatsapp.svg')"></div>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    url: function() {
      return `https://geometric-tattoo-generator.com${this.$route.fullPath}`;
    },
  },
  methods: {
    copyPermalink(e) {
      const el = document.createElement('textarea');
      el.value = this.url;
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
.share {
  display: flex;
  margin: 1em auto;

  a {
    flex: 1;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 1em;
    margin: 0 0.5em;
    transition: all 0.2s;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: none;
      color: #fff;
    }

    &:active {
      transform: scale(0.9);
    }

    &.facebook {
      background-color: #4267b2;
    }

    &.twitter {
      background-color: #1da1f2;
    }

    &.whatsapp {
      background-color: #09cb2a;
    }

    &.mail {
      background-color: #404040;
    }

    &.permalink {
      background-color: #737373;
    }

    svg {
      fill: #fff;
      width: 100%;
      height: 100%;
    }
  }
}
</style>



