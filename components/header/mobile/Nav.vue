<template>
<div class="fixed inset-0 p-8 bg-white z-30">
  <div class="flex items-center">
    <div class="w-1/2 justify-start items-center">
      <h1 class="text-black">
        <div @click="navigate('/')">
          <img class="h-16"
               src="~/static/Logo.png"
               alt="logo" />
        </div>
      </h1>
    </div>
    <div class="flex justify-end w-1/2"
         @click="$emit('close')">
      <i-close class="w-8 h-8 text-black"></i-close>
    </div>
  </div>

  <div class="flex flex-col w-full mt-16 text-3xl">
    <h2 class="pb-8">
      <div @click="navigate('/')">
        Home
      </div>
    </h2>
    <h2 class="pb-8">
      <div @click="navigate('/about')">
        About
      </div>
    </h2>
    <h2>
      <div @click="navigate('/projects')">
        Projects
      </div>
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
	methods: {
		...mapMutations(['menuClosed']),
		navigate(url) {
			if (this.$route.path === url) return this.menuClosed()
			this.$router.push(url)
		}
	}
}
</script>
