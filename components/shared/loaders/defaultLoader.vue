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
      name: 'defaultLoader'
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/colors';

   .loader {
      width: 80px;
      height: 80px;
      margin: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center !important;
      overflow: hidden;

      &_spinner {
         width: 100%;
         height: 100%;
         border: 5px solid transparent;
         border-top-color: $blue;
         border-left-color: $blue;
         border-right-color: $blue;
         border-radius: 100%;       
         animation: spin 1s linear infinite;

         &-inner {
            width: 68%;
            height: 68%;
            position: absolute;
            border: 5px solid transparent;
            border-bottom-color: $blue;
            border-right-color: $blue;
            border-left-color: $blue;
            border-radius: 100%;
            animation: spinBackward 1s linear infinite !important;
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