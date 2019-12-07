<template>
<div class="fixed inset-0">
  <div class="flex justify-end p-4">
    <div @click="$emit('close')">
      <i-close class="w-8 h-8 text-black"></i-close>
    </div>
  </div>
  <div class="flex">
    <h2>
      About
    </h2>
  </div>
</div>
</template>

<script>
import iClose from '~/components/icons/Close';
export default {
  name: 'MobileNav',
  components: { iClose }
}
</script>
