<template>
<div class="relative">
  <div class="scrim top-0 z-10"></div>

  <div style="background-image:url('background.jpg');height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover;width:100%;">
  </div>
</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>
<style>
.scrim {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
