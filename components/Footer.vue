<template>
  <div class="flex bg-footer text-white justify-between py-12 flex-col md:flex-row">
      <div class="md:pl-8 flex flex-wrap justify-center md:no-wrap md:flex md:justify-between">
        <img class="my-4" src="~/static/jsLogo.png" width="auto" height="50px" />
        <img class="my-4" src="~/static/netlify.png" width="auto" height="50px" />
        <img class="my-4" src="~/static/nuxtLogo.png" width="auto" height="50px" />
        <img class="my-4" src="~/static/vueLogo.png" width="auto" height="50px" />
        <img class="my-4" src="~/static/tailwind.png" width="auto" height="50px" />
        <img class="my-4" src="~/static/nodeLogo.svg" width="auto" height="50px" />
      </div>
      <div class="md:pr-8 pt-8 md:pt-0 text-center md:text-right">
        2019 Vanessa Codes
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
img {
  height: 50px;
  padding-right: 12px;
}
</style>
