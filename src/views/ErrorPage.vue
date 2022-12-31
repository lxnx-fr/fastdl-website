<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="animate-fadescale font-sans antialiased bg-black text-white grid min-h-screen place-content-center overflow-hidden">

    <div class="max-w-520px text-center z-20">
      <h1 class="text-8xl sm:text-10xl font-medium mb-8" v-text="'404'" />
      <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">
        Page not found: {{this.url}}
      </p>
      <div class="w-full flex items-center justify-center">
        <router-link to="/" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">
          Go back Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404Page",
  data() {
    return {
      url: ""
    }
  },
  mounted() {
    this.url = window.location.pathname;
  }
}
</script>

<style lang="sass" scoped>
.spotlight
  background: linear-gradient(45deg, #00dc82 0%, #36e4da 50%, #0047e1 100%)
  filter: blur(20vh)
  height: 40vh
  bottom: -30vh
.gradient-border
  -webkit-backdrop-filter: blur(10px)
  backdrop-filter: blur(10px)
  @apply relative

.gradient-border
  background-color: rgba(20, 20, 20, 0.3)

.gradient-border::before
  background: linear-gradient(90deg,#303030 0%,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1 100%)

.gradient-border::before
  content: ""
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0

  padding: 2px
  width: 100%
  background-size: 400% auto
  opacity: 0.5
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)
  -webkit-mask-composite: xor
  mask-composite: exclude
.gradient-border:hover::before
  background-position: -50% 0
  opacity: 1


</style>