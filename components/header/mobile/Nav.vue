<template>
  <div class="fixed inset-0 p-8 bg-white z-10">
    <div class="flex items-center">
      <div class="w-1/2 justify-start items-center">
        <h1 class="font-black">
          <nuxt-link to="/">
            <img class="h-16" src="~/static/Logo.png" alt="logo" />
          </nuxt-link>
        </h1>
      </div>
      <div class="flex justify-end w-1/2" @click="$emit('close')">
        <i-close class="w-8 h-8 text-black"></i-close>
      </div>
    </div>

    <div class="flex flex-col w-full mt-8  text-3xl">
      <h2 class="pb-8">
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
  </div>
</template>

<script>
import iClose from "~/components/icons/Close";
export default {
  name: "MobileNav",
  components: { iClose }
};
</script>
