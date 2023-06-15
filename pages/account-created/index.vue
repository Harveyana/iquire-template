<template>
   <div class="container">
      <!-- SLIDESHOW  -->
      <signUpSlideShow />

      <div>
         <!-- ACCOUNT CREATED -->
         <div class="account-created">
               <h2 class="large-text">Account Created</h2>

               <p class="base-text">Your account has been created successfully</p>

               <img
                  src="@/assets/imgs/login/tick_success.svg"
                  alt="account-created"
               />

               <button class="primary-btn base-text" @click="LOG_USER_IN()">
                  Continue
               </button>
         </div>

      </div>

   </div>
</template>

<script>
   import idList from "@/data/idCategories";

   export default {
      name: 'AcountCreated',
      layout: 'loginSignUp',

      head(){
         return {
            title: 'iQuire | Account Created'
         }
      },

      data() {
         return {

         }
      },

      methods: {
         LOG_USER_IN(){
            this.$router.push('/dashboard/overview/courses')  
         }
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/pages/accountCreated.scss';
</style>