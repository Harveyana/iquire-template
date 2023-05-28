<template>
   <div class="loader">
      <div class="loader_spinner">
         
      </div>

      <div class="loader_spinner-inner">

      </div>
   </div>
</template>

<script>
   export default {
      name: 'miniLoader'
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/colors';

   .loader {
      width: 20px;
      height: 20px;
      margin: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &_spinner {
         width: 100%;
         height: 100%;
         border: 2px solid transparent;
         border-top-color: transparent;
         border-left-color: $white;
         border-right-color: $white;
         border-radius: 100%;       
         animation: spin 1s linear infinite;

         &-inner {
            // width: 50%;
            // height: 50%;
            // position: absolute;
            // border: 2px solid transparent;
            // border-bottom-color: $white;
            // border-right-color: $white;
            // border-left-color: $white;
            // border-radius: 100%;
            // animation: spinBackward 1s linear infinite !important;
         }
      }

      @keyframes spin {
         0% {
            transform: rotate(0deg);
         }
         100% {
            transform: rotate(360deg);
         }
      }

      @keyframes spinBackward {
         0% {
            transform: rotate(0deg);
         }
         100% {
            transform: rotate(-360deg);
         }
      }
   }
</style>