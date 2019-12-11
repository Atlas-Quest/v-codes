<template>
<div class="flex p-8 bg-white w-full">
  <div class="w-1/2 flex justify-start items-center">
    <h1 class="font-black">
      <nuxt-link :to="'/'">
        V Codes
      </nuxt-link>
    </h1>
  </div>
  <div class="w-1/2 flex justify-end items-center"
       @click="openMenu()">
    <i-menu v-show="!active"
            class="justify-end w-10 h-10"></i-menu>
    <slot></slot>
  </div>
  <mobile-nav v-show="active"
              @close="active = false"></mobile-nav>
</div>
</template>

<script>
import iMenu from '~/components/icons/Menu'
import MobileNav from './Nav'

export default {
	name: 'MobileHeader',
	components: { iMenu, MobileNav },
	data() {
		return {
			active: false
		}
	},
	methods: {
		openMenu() {
			this.active = !this.active
		}
	}
}
</script>
