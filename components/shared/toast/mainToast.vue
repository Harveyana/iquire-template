<template>
   <div class="base-text" v-show="toast.isShown">
      {{toast.message}}
   </div>
</template>

<script>
   export default {
      name: 'maintoast',

      computed: {
         toast() {
            return this.$store.state.toast
         }
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/colors';
   @import '@/style/partials/screens';

   div {
      background: $white;
      color: $blue;
      font-weight: 700;
      text-align: center;
      box-shadow:  0px 15px 40px rgba(0, 0, 0, 0.185);
      border-radius: 10px;
      width: max-content;
      min-width: 200px;
      max-width: 250px;
      padding: 12px;
      position: fixed;  
      top: 25px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;

      //750px
      @include tabs {
         max-width: 600px;
      }
   }
</style>