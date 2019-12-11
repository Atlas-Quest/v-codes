<template>
<div class="flex p-8">
  <div class="flex w-full">
    <div class="w-1/2">
      <nuxt-link to="/">
        <img class="h-16"
             src="~/static/Logo.png"
             alt="logo">
      </nuxt-link>
    </div>
    <desktop-nav></desktop-nav>
  </div>
</div>
</template>

<script>
import DesktopNav from './Nav'
export default {
	name: 'Header',
	components: {
		DesktopNav
	}
}
</script>
