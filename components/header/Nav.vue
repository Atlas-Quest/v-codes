<template>
<div class="flex items-center justify-end w-full">
  <h2 class="mr-4">
    <nuxt-link to="/">
      Home
    </nuxt-link>
  </h2>
  <h2 class="mr-4">
    <nuxt-link to="/about">
      About
    </nuxt-link>
  </h2>
  <h2>
    <nuxt-link to="/projects">
      Projects
    </nuxt-link>
  </h2>
</div>
</template>

<script>
export default {
	name: 'DesktopNav'
}
</script>
