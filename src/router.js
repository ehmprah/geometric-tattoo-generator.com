import Vue from 'vue';
import Router from 'vue-router';
import Generator from '@/views/Generator.vue';
import About from '@/views/About.vue';
import Privacy from '@/views/Privacy.vue';
import Imprint from '@/views/Imprint.vue';
import NotFound from '@/views/NotFound.vue';
import { randomHash } from '@/util/util';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: () => {
        return '/t/v2/' + randomHash();
      },
    },
    {
      path: '/t/:version/:hash',
      name: 'generator',
      component: Generator,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/privacy',
      component: Privacy,
    },
    {
      path: '/imprint',
      component: Imprint,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
