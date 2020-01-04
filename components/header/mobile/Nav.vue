<template>
<div class="fixed inset-0 p-8 bg-white z-30">
  <div class="flex items-center">
    <div class="w-1/2 justify-start items-center">
      <h1 class="text-black">
        <nuxt-link to="/">
          <img class="h-16"
               src="~/static/Logo.png"
               alt="logo" />
        </nuxt-link>
      </h1>
    </div>
    <div class="flex justify-end w-1/2"
         @click="$emit('close')">
      <i-close class="w-8 h-8 text-black"></i-close>
    </div>
  </div>

  <div class="flex flex-col w-full mt-16 text-3xl">
    <h2 class="pb-8">
      <a href="/about"
         @click="menuClosed()">
        About
      </a>
    </h2>
    <h2>
      <a href="/projects"
         @click="menuClosed()">
        Projects
      </a>
    </h2>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import iClose from '~/components/icons/Close'
export default {
	name: 'MobileNav',
	components: { iClose },
	methods: { ...mapMutations(['menuClosed']) }
}
</script>
