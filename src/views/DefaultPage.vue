<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="default-page animate-fadescale">

    <img src="../assets/img/lxms-logo.webp" alt="Logo" />
    <div class="default-container">
      <h1>Choose Download Type</h1>
      <h2>Fast Downloads for everything</h2>
      <div class="pt-2 pb-5 grid grid-cols-1 gap-4">
        <br/>
        <router-link to="/tf2" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">
          Team Fortress 2 Downloads
        </router-link>
        <router-link to="/web" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">
          Web Dev Downloads
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultPage"
}
</script>

<style lang="sass" scoped>
.default-page
  @apply text-center mx-auto h-screen flex items-center justify-center flex-col gap-6 font-sans
  img
    @apply aspect-auto max-w-xs md:max-w-sm
.default-container
  @apply max-w-sm md:max-w-md w-full bg-white bg-opacity-5 px-8 py-4 text-white text-opacity-80 z-20
  h1
    @apply text-3xl md:text-4xl
  h2
    @apply text-sm md:text-sm
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