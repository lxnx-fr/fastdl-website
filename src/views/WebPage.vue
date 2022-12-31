<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="web-page animate-fadescale">

    <div class="grid grid-cols-2">
      <img src="../assets/img/javascript-v1.webp" alt="Logo" />
      <img src="../assets/img/typescript-v2.webp" alt="Logo" />
    </div>

    <div class="web-container">
      <router-link to="/" class="back-home-btn gradient-border text-md px-4 py-2 pt-3 cursor-pointer">
        <i class="fa-solid fa-arrow-left text-white text-lg"/>
      </router-link>
      <h1>Web Development Files</h1>
      <h2>Fast Download for JS / TS / Images / Fonts</h2>
      <div class="pt-2 pb-5 grid grid-cols-1 gap-4">
        <br/>
        <a href="/js" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">
          Go to Directory
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebPage"

}
</script>

<style lang="sass" scoped>
.web-page
  @apply text-center mx-auto h-screen flex items-center justify-center flex-col gap-6 font-sans
  img
    @apply aspect-auto max-w-xs md:max-w-sm
.web-container
  @apply max-w-sm md:max-w-md w-full bg-white bg-opacity-5 px-8 py-4 text-white text-opacity-90 z-20
  .back-home-btn
    @apply absolute top-6 left-6 md:left-10 md:top-10
  h1
    @apply text-3xl md:text-4xl
  h2
    @apply text-xs md:text-sm
  .btn-redirect-tf2
    @apply text-white bg-orange-500 w-full ease-in-out duration-300 px-4 py-2 transition-all
    &:hover
      box-shadow: 0 5px 20px 0 rgba(0,0,0,.4)
      @apply bg-white text-orange-500
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
  transition: background-position 0.4s ease-in-out, opacity 0.5s ease-in-out
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)
  -webkit-mask-composite: xor
  mask-composite: exclude
.gradient-border:hover::before
  background-position: -50% 0
  opacity: 1


</style>