<template>
<div class="flex p-8 bg-white w-full">
  <div class="w-1/2 flex justify-start items-center">
    <h1 class="text-black">
      <nuxt-link to="/">
        <img class="h-16"
             src="~/static/Logo.png"
             alt="logo">
      </nuxt-link>
    </h1>
  </div>
  <div class="w-1/2 flex justify-end items-center"
       @click="openMenu">
    <i-menu v-show="!active"
            class="text-black justify-end w-10 h-10"></i-menu>
    <slot></slot>
  </div>
  <mobile-nav v-show="active"
              @close="menuClosed"></mobile-nav>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import iMenu from '~/components/icons/Menu'
import MobileNav from './Nav'

export default {
	name: 'MobileHeader',
	components: { iMenu, MobileNav },
	computed: {
		...mapState(['active'])
	},
	methods: {
		...mapMutations(['menuClosed', 'openMenu'])
	}
}
</script>
