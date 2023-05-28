<template>
   <main class="container">
      <div>
         <h2>
            OOps!
         </h2>

         <p class="small-text">
            Page Not Found
         </p>

         <img src="@/assets/imgs/404.png" alt="error">

           <NuxtLink to="/dashboard/overview/courses" class="primary-btn">
               Go To Dashboard
            </NuxtLink>
      </div>

   </main>
</template>

<script>
   export default {
      name: 'ErrorPage',
      layout: 'errorLayout',
   }

</script>

<style lang="scss" scoped>
   @import '@/style/pages/404.scss';
</style>