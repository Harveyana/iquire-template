<template>
  <div class="logo-loader">
      <img src="@/assets/imgs/logo.svg" alt="iQuire">
   </div>
</template>

<script>
   export default {
      name: 'logoLoader'
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/screens';
   @import '@/style/partials/colors';

   .logo-loader {
      position: fixed;
      background: $white;
      z-index: 10;
      height: 100vh;
      width: 100vw;
      display: grid;
      place-items: center;

      img {
         width: 150px;
      }

      //992px 
      @include laps {
         img {
            width: 200px;
         }
      }

      //1200px 
      @include laps {
         img {
            width: 250px;
         }
      }
   }
</style>