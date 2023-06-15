<template>
   <div>

   </div>
</template>

<script>
   export default {
      name: 'OverviewCoursesIndex',
      layout: 'default',

      head(){
         return {
            title: 'iQuire | Overview'
         }
      },

      mounted() {
         this.$router.push('/dashboard/overview/courses');
      },
   }
</script>

<style lang="scss" scoped>

</style>