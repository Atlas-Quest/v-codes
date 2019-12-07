<template>
<div class="flex justify-end p-3">
  <div v-show="!active"
       @click="openMenu()">
    <i-menu class="w-10 h-10"></i-menu>
  </div>
  <mobile-nav v-show="active"
              @close="active = false"></mobile-nav>
</div>
</template>

<script>
import iMenu from '~/components/icons/Menu';
import MobileNav from './Nav';

export default {
  name: 'MobileHeader',
  components: { iMenu, MobileNav },
  data() {
    return {
      active: false
    }
  },
  methods: {
    openMenu() {
      this.active = !this.active;
      console.log('THIS.ACTIVE', this.active)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
