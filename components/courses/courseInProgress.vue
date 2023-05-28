<template>
    <div 
        class="course-card"
    >
        <NuxtLink :to="`/dashboard/courses/${course.courseId}`">
            <div class="course-card_thumbnail course-in-progress  border10" >

               <div :style="{ 'background': `url(${course.thumbnail})` }">

               </div>
            </div>

            <h2 class="mid-text">
                {{course.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
            </h2> 

            <div class="course-card_progress mini-text" :class="{'small-text': isTabScreen}">
               <progress
                max="100"
                value="70"
               > </progress>

               <div class="dummyProgress">
                    <div class="dummyProgress_level"></div>
               </div>

               <div class="course-card_progress__stats mini-text">
                <div v-if='course'>
                    1/{{course.Modules.length}} Module
                </div>

                <div>
                    60%
                </div>
               </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
      name: 'courseInPreogress',

      props: {
         course: {
            type: Object,
            default: ()=>{}
         },
      },

      computed: {
         isTabScreen() {
            if(process.client) {
               return window.innerWidth >= 750 ? true : false
            }
         }
      },
    }
</script>

<style lang="scss" scoped>
   @import '@/style/components/courseInProgress.scss';
</style>

