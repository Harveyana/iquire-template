<template>
   <div class="courses">

      <!-- TOBPAR -->
      <div class="topbar">
         <!-- HEADING + AVATAR -->
         <dashHeader :user="user">
            <template #heading>
               Courses
            </template>
         </dashHeader>
      </div>

      <!-- COURSES IN PROGRESS -->
      <div class="view-content">

         <defaultLoader class="loader" v-if="courses === null"/>   
            
            <div class="list-else border10" v-else-if="courses != null && courses.length === 0">
               <button class="primary-btn mid-text">
                  No Courses Yet.
               </button>
            </div>

            <div class="course-grid" v-else-if="courses != null && courses.length != 0">
               <courseInProgress 
                  v-for="course in courses"
                  :key="course.courseId"
                  :course="course"
               />
            </div>          
      </div>

   </div>
</template>

<script>

   export default {
      name: 'StudentCourses',

      head() {
         return {
            title: 'iQuire | Courses'
         }
      },

      data() {
         return {
            
         }
      },

      computed: {
         user() {
            return this.$store.state.app.user
         },
         courses() {
            return this.$store.state.app.userCourses
         }
      },
      
      mounted () {
         this.$store.commit('HIDE_SIDEBAR');
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/pages/courses.scss'
</style>