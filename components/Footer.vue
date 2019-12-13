<template>
<div class="flex bg-footer text-white justify-between p-8 flex-col md:flex-row">
  <div class="flex flex-wrap justify-center md:no-wrap md:flex md:justify-between">
    <img class="my-4"
         src="~/static/jsLogo.png"
         width="auto" />
    <img class="my-4"
         src="~/static/netlify.png"
         width="auto" />
    <img class="my-4"
         src="~/static/nuxtLogo.png"
         width="auto" />
    <img class="my-4"
         src="~/static/vueLogo.png"
         width="auto" />
    <img class="my-4"
         src="~/static/tailwind.png"
         width="auto" />
    <img class="my-4"
         src="~/static/nodeLogo.svg"
         width="auto" />
  </div>
  <div class="flex items-center justify-center pt-4 md:pt-0 text-center md:text-right">
    2019 Vanessa Dohnt
  </div>
</div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style scoped>
img {
  height: 24px;
  padding-right: 12px;
}
</style>
