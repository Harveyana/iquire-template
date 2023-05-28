<template>
   <div class="course-card">
      <NuxtLink 
      :to="`/dashboard/overview/courses/${this.course.courseId}`"
      v-if="course"
   >
      <div>
         <div class="course-card_thumbnail border10">
            <div :style="{ 'background': `url(${course.thumbnail})`}">

            </div>
         </div>

         <h2 class="mid-text" v-if="course">
               {{course.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
         </h2> 

         <div class="course-card_details mini-text" :class="{'small-text': isTabScreen}" v-if="course">
            <div>
               <img src="@/assets/imgs/overview/user.svg" alt="registered-students"> 
               {{course.students}} Students
            </div>

            <div>
               <img src="@/assets/imgs/overview/modules.svg" alt="number-of-modules" v-if="course"> 
               {{course.Modules.length}} Modules
            </div>

            <div>
               <img src="@/assets/imgs/overview/clock.svg" alt="course-duration"> 
               {{ Math.floor(courseDuration / 60 / 60) }}h {{ Math.floor((courseDuration / 60) % 60) }}m
            </div>
         </div>
      </div>
   </NuxtLink>
   </div>
</template>

<script>
   export default {
      name: 'courseCard',

      props: {
         course: {
            type: Object,
            default: ()=>{}
         },
      },

      computed: {
         isTabScreen() {
            if(process.client) {
               return window.innerWidth >= 992 ? true : false
            }
         },
         courseModules() {
            let ModuleNames = [];
            this.course.Modules.forEach(module => {
               const name = module.moduleTitle
               const moduleDuration = module.Duration
               ModuleNames.push({ name, moduleDuration});
            });
            // console.log(ModuleNames)
      
            return ModuleNames
               
         },
         courseDuration() {
               let durations = [];
               this.course.Modules.forEach(module => {
                  durations.push(module.Duration);
               });
            //    console.log(durations)
               const sum = durations.reduce((accumulator, value) => {
               return accumulator + value;
               }, 0);
               return sum
               
         },
         courseSecs() {
            return this.courseDuration <= 60 ?
            this.courseDuration : 
            this.courseDuration % 60       
         },
      },

      methods: {
      
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/components/courseCard.scss';
</style>