<template>
  <div>
    <router-view/>
  </div>

</template>
<script>
export default {
}
</script>
<style lang="sass">
@import "@/assets/index.sass"
@font-face
  font-family: 'NexaBold'
  src: url('assets/fonts/NexaBold/NexaBold.woff2') format('woff2')
  font-weight: normal
  font-style: normal
  font-display: swap
body, html, #app
  @apply max-w-full overflow-x-hidden m-0


</style>
