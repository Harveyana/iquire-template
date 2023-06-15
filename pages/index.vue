<template>
   <logoLoader />
</template>

<script> 

   export default {
      name: 'IndexPage',
      layout: 'loginSignUp',

      head(){
         return {
            title: 'iQuire | Students'
         }
      },

      data() {
         return {
            
         }
      },

      mounted() {
         const user = JSON.parse(localStorage.getItem('user'))
         const userIsLoggedIn = JSON.parse(localStorage.getItem('userIsLoggedIn'))

         if(user && userIsLoggedIn) {
            this.$router.push('/dashboard/overview/courses') 
         } else { this.$router.push('/login') }
      },
   }
</script>
