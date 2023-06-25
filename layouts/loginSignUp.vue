<template>
   <div>
      <logoLoader v-show="logoLoader.isShown"/>

      <Nuxt />
   </div>
</template>

<script>
   export default {
      name: "loginSignUp",

      data() {
         return {
            logoLoader: {
               isShown: true
            }
         }
      },

      mounted () {
         setTimeout(()=> {
            this.logoLoader.isShown = false
         }, 800);
      },
   }
</script>

<style lang="scss">
  
</style>