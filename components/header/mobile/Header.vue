<template>
<div class="p-8 bg-white">
  <div class="flex justify-start">
    <img src="~/static/Logo.png"
         alt="logo">
  </div>
  <div class="flex justify-end"
       @click="openMenu()">
    <i-menu v-show="!active"
            class="w-10 h-10"></i-menu>
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
