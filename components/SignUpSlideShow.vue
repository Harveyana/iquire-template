<template>
   <!-- SLIDESHOW  -->
   <div class="signup_slideshow">
      <!-- SLIDESHOW CONTENT + CONTROLS + LOGO -->
      <div class="signup_slideshow_content">
         <div> 
            <NuxtLink to="/">
               <img src="@/assets/imgs/logoWhite.svg" alt="iQuire" />
            </NuxtLink>

            <h1 class="large-text" ref="slideshowContentHeading">
               {{ loginSlideShowData.content[activeSlide].heading }}
            </h1>

            <p class="base-text"></p>

            <!-- SLIDE SHOW CONTROLS-->
            <div>
               <div 
                  v-for="object in loginSlideShowData.content" :key="object.id"
                  :class="{ 'active' : activeSlide === object.id }"
               >
               </div>
            </div>
         </div>
      </div>

      <!-- SLIDE SHOW IMAGES-->
      <div class="signup_slideshow_images" :style="{'width': `${loginSlideShowData.content.length * 100}%`}">

         <div 
            v-for="object in loginSlideShowData.content" :key="object.id" 
            :style="{ 'background': `no-repeat url(${require(`@/assets/imgs/login/${object.image}.png`)}) center/cover` }"
         >

         </div>

      </div>
   </div>
</template>

<script>
   export default {
      name: 'SignUpSlideShow',

      data() {
         return {
            activeSlide: 0
         }
      },

      computed: {
         loginSlideShowData() {
           return this.$store.state.loginSlideShowData;  
         }
      },

      methods: {
         START_SLIDESHOW() {
            var slider = {
               element: document.querySelector('.signup_slideshow_images'),
               isActive: true
            }
            
            setInterval(() => {
               if (slider.element.style.marginLeft === '-100%') {
                  this.MOVE_SLIDER('backward')
               }
               else {
                  this.MOVE_SLIDER('forward')
               }              
            }, 6000);
         },

         MOVE_SLIDER(direction) {
            var slider = {
               element: document.querySelector('.signup_slideshow_images'),
               isActive: true
            }

            if (direction === 'forward') {
               slider.element.style.marginLeft = '-100%'
               this.activeSlide = 1

               setTimeout(() => {
                  this.$refs.slideshowContentHeading.style.opacity = '0'

                  setTimeout(() => {
                     this.$store.commit('CHANGE_LOGIN_ACTIVE_SLIDE', 1)
                     this.$refs.slideshowContentHeading.style.opacity = '1'
                  }, 500)

               }, 500)
            }
            else {
               slider.element.style.marginLeft = '0'
                this.activeSlide = 0

               setTimeout(() => {
                  this.$refs.slideshowContentHeading.style.opacity = '0'

                  setTimeout(() => {
                     this.$store.commit('CHANGE_LOGIN_ACTIVE_SLIDE', 0)
                     this.$refs.slideshowContentHeading.style.opacity = '1'
                  }, 500)

               }, 500)
            }
         }
      },

      
      mounted() {
         this.START_SLIDESHOW();
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/components/signUpSlide.scss';
</style>