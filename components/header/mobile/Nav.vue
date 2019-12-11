<template>
<div class="fixed inset-0 p-8 bg-white">
  <div class="flex justify-end">
    <div @click="$emit('close')">
      <i-close class="w-8 h-8 text-black"></i-close>
    </div>
  </div>
  <div class="flex flex-col w-full mt-8 font-hairline text-3xl">
    <h2 class="pb-8">
      <nuxt-link :to="toAbout()">
        About
      </nuxt-link>
    </h2>
    <h2>
      <nuxt-link :to="'/projects'">
        Projects
      </nuxt-link>
    </h2>
  </div>
</div>
</template>

<script>
import iClose from '~/components/icons/Close'
export default {
	name: 'MobileNav',
	components: { iClose },
	methods: {
		toAbout() {
			this.$emit('close')
			return '/about'
		}
	}
}
</script>
