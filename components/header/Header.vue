<template>
<div>
  <!-- <img class="h-16"
       src="~/static/Logo.png"
       alt="logo"> -->
  <mobile-header></mobile-header>
</div>
</template>

<script>
import MobileHeader from '~/components/header/mobile/Header'
export default {
	name: 'Header',
	components: {
		MobileHeader
	}
}
</script>
