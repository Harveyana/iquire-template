<template>
   <div class="overview">
      <!-- >>>>>>PDF VIEW -->
      <div class="pdf-view" v-if="embededPDF.isShown">
         <div class="pdf-view_close">
            <hamCloseCircle />
         </div>

         <div class="pdf-view_inner">
            <defaultLoader v-if="embededPDF.loading"/>
            <iframe :src="embededPDF.src" v-show="!embededPDF.loading"  @load="embededPDF.loading = false" ></iframe>
         </div>
      </div>
      
      <!-- >>>>>>TOP BAR -->
      <div class="topbar">
         <!-- HEADING + AVATAR -->
         <dashHeader :user="user">
            <template #heading>
               Explore Courses 
            </template>
         </dashHeader>
      </div> 

      <defaultLoader v-if="coursePreviewStatus === 'null'" v-show="loader.isShown"/>
    
      <div class="list-else border10" v-else-if="coursePreviewStatus === false">
         <primaryBtn class="primary-btn mid-text">
            Course not found
         </primaryBtn>
      </div>

      <section class="course-detail" v-else-if="coursePreview && coursePreviewStatus === true">
         <!-- COURSE VID + DETAILS -->
         <div>
            <div>
               <!-- COURSE PREVIEW VID + ACTUAL COURSE VID -->
               <div class="video-container border10">
                  <video controlList="nodownload" controls ref="video" :src="mainCourse.Modules[0].videoUrl" :poster="mainCourse.thumbnail" class="video" v-if="mainCourse">
                  </video>
                  
                  <video controlList="nodownload" controls ref="video" src="@/assets/vids/demo.webm" :poster="coursePreview.thumbnail" class="video" v-else>
                  </video>
               </div>

               <!-- COURSE DETAILS -->
               <div class="video-details border10" >

                  <!-- COURSE TITLE -->
                  <h2 class="mid-text-3">
                     {{mainCourse ? mainCourse.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) : coursePreview.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
                  </h2>

                  <!-- COURSE STATS -->
                  <div class="mini-text" :class="{'small-text': isTabScreen}">
                     <span>
                        <img src="@/assets/imgs/overview/courseDetail/user.svg" alt="students">
                        {{mainCourse ? mainCourse.students : coursePreview.students}} Students
                     </span>

                     <span>
                        <img src="@/assets/imgs/overview/courseDetail/modules.svg" alt="modules">
                        {{mainCourse ? mainCourse.Modules.length : coursePreview.Modules.length}} Modules
                     </span>

                     <span>
                        <img src="@/assets/imgs/overview/courseDetail/clock.svg" alt="duration">
                        {{
                           mainCourse ? 
                              `${Math.floor(GET_COURSE_DURATION('mainCourse') / 60)}m ${Math.floor(GET_COURSE_DURATION_SECS('mainCourse'))}s` : 
                              `${Math.floor(GET_COURSE_DURATION('coursePreview') / 60)}m ${Math.floor(GET_COURSE_DURATION_SECS('coursePreview'))}s`
                        }}
                     </span>
                  </div>

                  <!-- COURSE DESCRIPTION + REVIEWS + TUTOR BIO -->
                  <div class="small-text">
                     <!-- HEADINGS -->
                     <div>
                        <div :class="{active: detailInView === 1}" @click="detailInView = 1">
                              About
                        </div>

                        <div :class="{active: detailInView === 2}" @click="detailInView = 2">
                              Reviews
                        </div>

                        <div :class="{active: detailInView === 3}" @click="detailInView = 3">
                           Tutor Bio
                        </div>

                        <div v-if="mainCourse && (mainCourse.Modules.filter((modul) => modul.modulePDF != null)).length > 0" :class="{active: detailInView === 4}" @click="detailInView = 4">
                           Docs
                        </div>
                     </div>

                     <!-- DETAILS -->
                     <div>
                        <div v-show="detailInView === 1">
                              {{mainCourse ? mainCourse.description : coursePreview.description}}
                        </div>
                        
                        <div v-show="detailInView === 2">
                              <!-- <div
                                 v-for="review in courseInView[0].reviews"
                                 :key="review.author"
                                 
                              >
                                 <p class="base-text">
                                    {{review.author}}
                                 </p>

                                 <p>
                                    <span>
                                          {{review.stars}}
                                    </span>

                                    <span>
                                          {{review.date}}
                                    </span>
                                 </p>

                                 <p class="small-text">
                                    {{review.writing}}
                                 </p>
                              </div> -->
                        </div>

                        <div v-show="detailInView === 3">
                              <p class="small-text">
                                 {{mainCourse ? mainCourse.tutorBio : coursePreview.tutorBio}}


                                 <!-- <br /><br />

                                 Email: <br />
                                 <span> obiianayo@gmail.com </span> -->
                              </p>
                        </div>

                        <div v-if="mainCourse && detailInView === 4" >
                           <!-- MODULES DOCS -->
                           <div>
                              <!-- MODULES DOCS -->
                              <div class="small-text">
                                 <ol>
                                    <li
                                       v-for="(modul, index) in mainCourse.Modules.filter((modul) => modul.modulePDF != null)"
                                       :key="modul.moduleTitle"
                                       class="small-text"
                                    >
                                       <div>
                                          <span class="small-text">
                                             {{ mainCourse.Modules.indexOf(modul) + 1 }}
                                          </span>

                                          <span  @click="CALL_UP_PDF(modul.modulePDF)">
                                             {{ modul.moduleTitle.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}}
                                          </span>
                                       </div>
                                    </li>
                                 </ol>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- COURSE MODULES -->
            <div class="video-modules border10">
               <!-- COURSE TITLE -->
               <h3 class="mid-text">
                  {{mainCourse ? mainCourse.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) : coursePreview.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
               </h3>

               <!-- COURSE STATS -->
               <div class="mini-text" :class="{'small-text': isTabScreen}">
                     <span>
                        <img src="@/assets/imgs/overview/courseDetail/user.svg" alt="students">
                        {{ mainCourse ? mainCourse.students : coursePreview.students}} Students
                     </span>

                     <span>
                        <img src="@/assets/imgs/overview/courseDetail/modules.svg" alt="modules">
                        {{mainCourse ? mainCourse.Modules.length : coursePreview.Modules.length}} Modules
                     </span>

                     <span>
                        <img src="@/assets/imgs/overview/courseDetail/clock.svg" alt="duration">

                        {{
                           mainCourse ? 
                              `${Math.floor(GET_COURSE_DURATION('mainCourse') / 60)}m ${Math.floor(GET_COURSE_DURATION_SECS('mainCourse'))}s` : 
                              `${Math.floor(GET_COURSE_DURATION('coursePreview') / 60)}m ${Math.floor(GET_COURSE_DURATION_SECS('coursePreview'))}s`
                        }}
                     </span>
            
               </div>

               <!-- MODULE STATS -->
               <div >
                     <span class="base-text">
                        {{mainCourse ? mainCourse.Modules.length : coursePreview.Modules.length}} Modules
                     </span>

                     <span class="small-text">
                        0/{{mainCourse ? mainCourse.Modules.length : coursePreview.Modules.length}} Done
                     </span>
               </div>

               <!-- MODULES -->
               <div class="small-text main-modules" v-if="mainCourse">
                  <ol>
                     <li
                        v-for=" module in mainCourse.Modules"
                        :key="module.moduleTitle"
                        class="small-text"
                        @click="$refs.video.src = module.videoUrl"
                     >
                        <div>
                           <span class="small-text">
                              {{mainCourse.Modules.indexOf(module) + 1}}
                           </span>

                           <span>
                              {{module.moduleTitle.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
                           </span>
                        </div>

                        <span>
                              {{Math.floor(module.Duration / 60)}}m {{ Math.floor(module.Duration % 60) }}s
                        </span>
                     </li>
                  </ol>
               </div>
                  
               <div class="small-text prev-modules" v-else>
                  <ol>
                     <li
                        v-for=" module in coursePreview.Modules"
                        :key="module.moduleTitle"
                        class="small-text"
                     >
                        <div>
                              <span class="small-text">
                                 {{coursePreview.Modules.indexOf(module) + 1}}
                              </span>

                              <span>
                                 {{module.moduleTitle.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
                              </span>
                        </div>

                        <span>
                              {{Math.floor(module.Duration/ 60)}} {{ Math.floor(module.Duration % 60) }}s
                        </span>
                     </li>
                  </ol>
               </div>

               <button class="primary-btn small-text"  @click="TOGGLE_SWITCH('subscribeModal')" v-if="!mainCourse">
                  Join Course
               </button>
            </div>
         </div>

         <!-- RELATED COURSES -->
         <div class="related-courses">

            <!-- HEADING + RELATED COURSES SLIDE CONTROLS -->
            <div>
               <h3 class="mid-text-2">
                     Related Courses
               </h3>

               <div>
                  <button @click="MOVE_COURSES_SLIDER(-384)">
                     <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99984 16.9181L1.47984 10.3981C0.709844 9.62812 0.709844 8.36813 1.47984 7.59813L7.99984 1.07812" stroke="#9C9CA4" stroke-width="1.18719" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </button>

                  <button @click="MOVE_COURSES_SLIDER(384)">
                     <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.910156 16.9181L7.43016 10.3981C8.20016 9.62812 8.20016 8.36813 7.43016 7.59813L0.910156 1.07812" stroke="#9C9CA4" stroke-width="1.18719" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </button>
               </div>
            </div>

            <!-- RELATED COURSES SLIDE -->
            <div ref="relatedCoursesSlide">
               <courseCard
                  v-for="course in courses.slice(0, 4)"
                  :key="course.courseId"
                  :course="course"
               />
            </div>
         </div>
      </section>


      <!-- PAYMENT MODAL -->
      <mainModal v-if="subscribeModal.isShown" :modalData="subscribeModal" >
         <p class="mid-text">
            You are about to pay
         </p>

         <p>
            ₦{{mainCourse ? mainCourse.price : coursePreview.price}}
         </p>

         <button @click="PAYMENT_INIT($event)" class="primary-btn">
            Pay Now
         </button>
      </mainModal>
      
      <!-- PAYMENT LOADING MODAL -->
      <mainModal v-show="loadingModal.isShown" :modalData="loadingModal">
         <h3>
            {{loadingModal.heading}}
         </h3>

         <p class="mini-text" :class="{'base-text': isTabScreen}">
            {{loadingModal.message}}
         </p>

         <defaultLoader v-if="loadingModal.loader"/>

         <button @click="$router.push('/overview/dashboard/courses')" v-if="!loadingModal.loader" class="primary-btn">
            Close
         </button>
      </mainModal>

      <!-- PAYMENT CONFIMATION MODAL -->
      <mainModal v-show="subscribedModal.isShown" :modalData="subscribedModal">
         <h3>
            Payment Successful
         </h3>

         <p class="mini-text" :class="{'base-text': isTabScreen}">
            Payment has been made successfully
         </p>

         <img src="@/assets/imgs/overview/courseDetail/tickCircle.svg" alt="payment-successfull">

         <button @click="$router.push(`/dashboard/courses/${$route.params.course}`)" class="primary-btn">
            Go To Course
         </button>

      </mainModal>

      
   </div>
</template>

<script>
   import axios from 'axios';
//    import { getStorage, ref, deleteObject } from "firebase/storage";
//    import { doc, getFirestore, deleteDoc } from "firebase/firestore";

   export default {
      name: 'courseDetail',

      head() {
         return {
            title: 'Overview | ' + 
               this.$route.params.course.substring(0, this.$route.params.course.length-13)
               .replaceAll('-', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
         }
      },

      data() {    
         return {
            detailInView: 1,

            mainCourse: null,

            embededPDF: {
               isShown: false,
               loading: true,
               src: null
            },

            subscribeModal: {
               isShown: false,
               name: 'subscribe'
            },

            loadingModal: {
               isShown: false,
               name: 'subscribed subscibe-loading',
               loader: true,
               heading: 'Please wait.',
               message: 'Do not refresh the page or close the browser',
               message: null
            }, 

            subscribedModal: {
               isShown: false,
               name: 'subscribed'
            },     
            
            loader: {
               isShown: true
            },

            coursePayStackResponseID: null,

            coursePreviewStatus: 'null'

         }
      },

      computed: {
         isTabScreen() {
            if(process.client) {
               return window.innerWidth >= 750 ? true : false
            }
         },
         user() {
            if(process.client) {
               return JSON.parse(localStorage.getItem('user'))
            }
         },
         courses(){
            return this.$store.state.courses
         },
         coursePreview() {
            return this.courses.filter((course) => course.courseId === this.$route.params.course)[0]
         }       
      },

      methods: {
         GET_COURSE_DURATION(type) {
            let durations = []

            this[type].Modules.forEach(module => {
               durations.push(module.Duration)
            });

            const sum = durations.reduce((accumulator, value) => {
               return accumulator + value;
               }, 0);
               
            return sum
         },
         GET_COURSE_DURATION_SECS(type) {
            return this.GET_COURSE_DURATION(type) <= 60 ?
            this.GET_COURSE_DURATION(type) : 
            this.GET_COURSE_DURATION(type) % 60       
         },

         MOVE_COURSES_SLIDER(pixels) {
            this.$refs.relatedCoursesSlide.scrollLeft += pixels
         },

         TOGGLE_SWITCH(switchToToggle) {
            this[switchToToggle].isShown ?
            this[switchToToggle].isShown = false :
            this[switchToToggle].isShown = true
         },
         
         async GET_MAIN_COURSE() {
            const response = await axios.get(`https://us-central1-dulcet-order-370109.cloudfunctions.net/course/UserCourses?userId=${this.user.uid}&id=${this.$route.params.course}`)
            this.mainCourse = response.data
         },
         
         async GET_COURSE_PREVIEW(){
            console.log('starty werew')
            await axios.get(`https://us-central1-dulcet-order-370109.cloudfunctions.net/course/coursePreview?id=${this.$route.params.course}`)
               .then((response) => {
                 if(response.status === 200) {
                     this.coursePreviewStatus = true
                 }
                 else {
                  this.coursePreviewStatus = false
                 }
               })
               .catch((error) => {
                  console.log('error: ', error)
                  this.coursePreviewStatus = false
               })
            
         },
         
         async PAYMENT_INIT(event){
            const button = event.target
            button.innerText = 'Processing..'
            button.disabled = true; button.classList.add('disabled')

            // const detail = { userId: this.user.uid, email: this.user.email, courseId: this.coursePreview.courseId, userName: this.user.Name, authorId:this.coursePreview.authorId, callbackUrl: `http://localhost:53870/dashboard/overview/courses/${this.coursePreview.courseId}`, phoneNumber: this.user.phoneNumber || null }
            const detail = { userId: this.user.uid, email: this.user.email, courseId: this.coursePreview.courseId, userName: this.user.Name, authorId:this.coursePreview.authorId, callbackUrl: `https://${this.user.type}.iquire.io/dashboard/courses/${this.coursePreview.courseId}`, phoneNumber: this.user.phoneNumber || null }
            const response = await axios.post('https://us-central1-dulcet-order-370109.cloudfunctions.net/payment/initialize', detail)
            
            location.replace(response.data.data.authorization_url);
         },
       
         async VERIFY_PAYMENT(ref){ 
            console.log('veryf start')
            this.loader.isShown = false
            this.loadingModal.isShown = true

            await axios.post(`https://us-central1-dulcet-order-370109.cloudfunctions.net/payment/verify`, {reference: ref})
               .then((response) => {
                  if(response.data.status === 'success'){
                     this.coursePayStackResponseID = response.data.metadata.courseId
                     this.loadingModal.isShown = false
                     
                     setTimeout(() => {
                        this.subscribedModal.isShown = true
                     }, 1000)
                  }
                  else {
                     this.loadingModal.heading = 'Oops.'
                     this.loadingModal.message = 'Something went wrong'
                     this.loadingModal.loader = false
                  }
               })

         },

         CLOSE_MODALS() {
            this.subscribedModal.isShown = true ? this.subscribedModal.isShown = false : ' '
            this.subscribeModal.isShown = true ? this.subscribeModal.isShown = false : ' '
            this.CLOSE_PDF()
         },

         CALL_UP_PDF(pdfURL) {
            this.embededPDF.src = pdfURL; this.embededPDF.isShown = true
         },
         CLOSE_PDF() {
            this.embededPDF.isShown = false; this.embededPDF.src = null; this.embededPDF.loading = true; 
         },
         
         ADD_ESC_LISTENER() {
            document.addEventListener('keydown', (e)=> {
               if (e.key === 'Escape') {
                  this.CLOSE_MODALS()
               }
            })
         }
      },

      created() {
         this.$nuxt.$on('TOGGLE_MODAL', ($event) => this.CLOSE_MODALS($event))
      },

      mounted() {
         this.ADD_ESC_LISTENER()

         if(this.$route.query.trxref){
            console.log(`i watched from settings ${this.$route.query.trxref}`)
            this.VERIFY_PAYMENT(this.$route.query.trxref)
         }
         else{
            this.GET_MAIN_COURSE()
            this.GET_COURSE_PREVIEW()
         }  
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/pages/course.scss';
</style>
