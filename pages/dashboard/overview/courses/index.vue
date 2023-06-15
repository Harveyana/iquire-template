<template>
   <div class="overview">
      <div class="topbar">
         <!-- HEADING + AVATAR -->
         <dashHeader :user="user">
            <template #heading>
               Explore Courses 
            </template>
         </dashHeader>
      </div>
      <!-- SEARCH + SORT + SORT LIST -->
      <div class="toolbar">
         <div class="search">
            <input 
               type="search" 
               name="search" 
               id=""
               class="mini-text outline-box"
               placeholder="Search Course Name/Mentor"
               v-model="seach_query"
               autocomplete="off"
            >
         </div>

         <div class="sorts small-text">    
               
            <!-- LEVEL SORT
            <div>
                  <button @click="toggleSortList('levelSortList', 'catgSortList', 'sortList')">
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="6.46094" width="2" height="5.53846" rx="1" fill="#9C9CA4"/>
                        <rect x="5" y="3.69141" width="2" height="8.30769" rx="1" fill="#9C9CA4"/>
                        <rect x="10" width="2" height="12" rx="1" fill="#9C9CA4"/>
                     </svg>

                     <span>Level</span>
                  </button>

                  <div class="sortsList border10">
                     <h3 class="base-text">
                        Levels
                     </h3>

                     <div
                        v-for="level in levelSortList.levels" 
                        :key="level"
                     >
                        <input 
                              type="radio" 
                              name="level" 
                              :id="level" 
                              :value="level" 
                        />


                        <label 
                              :for="level"
                              class="mini-text border10"
                        >
                              {{level}}
                        </label>
                     </div>

                     <button class="primary-btn">
                        Apply
                     </button>
                     
                  </div>

            </div> -->

            <!-- CATEGORY SORT -->
            <div>
               <button @click="toggleSortList('catgSortList', 'levelSortList', 'sortList')">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_1107_2374)">
                     <path d="M6.2025 17.0625H3.1725C1.665 17.0625 0.9375 16.365 0.9375 14.925V3.075C0.9375 1.635 1.6725 0.9375 3.1725 0.9375H6.2025C7.71 0.9375 8.4375 1.635 8.4375 3.075V14.925C8.4375 16.365 7.7025 17.0625 6.2025 17.0625ZM3.1725 2.0625C2.22 2.0625 2.0625 2.3175 2.0625 3.075V14.925C2.0625 15.6825 2.22 15.9375 3.1725 15.9375H6.2025C7.155 15.9375 7.3125 15.6825 7.3125 14.925V3.075C7.3125 2.3175 7.155 2.0625 6.2025 2.0625H3.1725Z" fill="#9C9CA4"/>
                     <path d="M14.8275 10.3125H11.7975C10.29 10.3125 9.5625 9.615 9.5625 8.175V3.075C9.5625 1.635 10.2975 0.9375 11.7975 0.9375H14.8275C16.335 0.9375 17.0625 1.635 17.0625 3.075V8.175C17.0625 9.615 16.3275 10.3125 14.8275 10.3125ZM11.7975 2.0625C10.845 2.0625 10.6875 2.3175 10.6875 3.075V8.175C10.6875 8.9325 10.845 9.1875 11.7975 9.1875H14.8275C15.78 9.1875 15.9375 8.9325 15.9375 8.175V3.075C15.9375 2.3175 15.78 2.0625 14.8275 2.0625H11.7975Z" fill="#9C9CA4"/>
                     <path d="M14.8275 17.0625H11.7975C10.29 17.0625 9.5625 16.365 9.5625 14.925V13.575C9.5625 12.135 10.2975 11.4375 11.7975 11.4375H14.8275C16.335 11.4375 17.0625 12.135 17.0625 13.575V14.925C17.0625 16.365 16.3275 17.0625 14.8275 17.0625ZM11.7975 12.5625C10.845 12.5625 10.6875 12.8175 10.6875 13.575V14.925C10.6875 15.6825 10.845 15.9375 11.7975 15.9375H14.8275C15.78 15.9375 15.9375 15.6825 15.9375 14.925V13.575C15.9375 12.8175 15.78 12.5625 14.8275 12.5625H11.7975Z" fill="#9C9CA4"/>
                     </g>
                     <defs>
                     <clipPath id="clip0_1107_2374">
                     <rect width="18" height="18" fill="white"/>
                     </clipPath>
                     </defs>
                  </svg>

                  <span>Category</span>
               </button>

               
               <div class="sortsList border10">
                  
                  <h3 class="base-text">
                     Categories
                  </h3>

                  <div
                     v-for="category in catgSortList.catgs" 
                     :key="category"
                  >
                     <input 
                           type="radio" 
                           name="category" 
                           :id="category" 
                           :value="category" 
                     />

                     <label 
                           :for="category"
                           class="mini-text border10"
                     >
                     {{category}}
                  </label>
                  </div>

                  <button class="primary-btn">
                     Apply
                  </button>
                  
               </div>
            </div>

            <!-- GENERIC SORT -->
            <div>
               <button @click="toggleSortList('sortList', 'levelSortList', 'catgSortList' )">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.75 5.8125H2.25C1.9425 5.8125 1.6875 5.5575 1.6875 5.25C1.6875 4.9425 1.9425 4.6875 2.25 4.6875H15.75C16.0575 4.6875 16.3125 4.9425 16.3125 5.25C16.3125 5.5575 16.0575 5.8125 15.75 5.8125Z" fill="#9C9CA4"/>
                     <path d="M13.5 9.5625H4.5C4.1925 9.5625 3.9375 9.3075 3.9375 9C3.9375 8.6925 4.1925 8.4375 4.5 8.4375H13.5C13.8075 8.4375 14.0625 8.6925 14.0625 9C14.0625 9.3075 13.8075 9.5625 13.5 9.5625Z" fill="#9C9CA4"/>
                     <path d="M10.5 13.3125H7.5C7.1925 13.3125 6.9375 13.0575 6.9375 12.75C6.9375 12.4425 7.1925 12.1875 7.5 12.1875H10.5C10.8075 12.1875 11.0625 12.4425 11.0625 12.75C11.0625 13.0575 10.8075 13.3125 10.5 13.3125Z" fill="#9C9CA4"/>
                  </svg>

                  <span>Sort By</span>
               </button>

               <div class="sortsList border10" id="genSort">
                  <div
                     v-for="category in sortList.sortCatgs" 
                     :key="category"
                  >
                     <input
                     type="radio" 
                     name="sortCategory" 
                     :id="category" 
                     :value="category" 
                     />

                     <label 
                           :for="category"
                           class="mini-text border10"
                     >
                           {{category}}
                     </label>
                  </div>
                     

                  <button class="primary-btn">
                     Apply
                  </button>
               
               </div>
            </div>
            
         </div>
      </div>
         
      <defaultLoader class="loader" v-if="courses.length === 0"/>
      
      <!-- COURSES -->
      <div class="view-content course-grid" v-else>
         <courseCard 
            v-for="course in filteredCourses"
            :key="course.id"
            :course="course"
         />
      </div>   
   </div>
</template>

<script> 
   import FILTER from '@/modules/coursesFilter.js'

   export default {
      name: 'overviewSection',
      layout: 'default',
       
      head(){
         return {
            title: 'iQuire | Overview'
         }
      },

      data() {        
         return {
            seach_query: '',

            levelSortList: {
               isShown: true,
               levels: ['Beginner', 'Intermediate', 'Master']
            },

            catgSortList: {
               isShown: false,
               catgs: ['Pasta', 'Grills']
            },

            sortList: {
               isShown: false,
               sortCatgs: ['Popular', 'Level']
            }
         }
      },
      
      computed: {
         courses() {
            return this.$store.state.courses 
         },

         filteredCourses() {
            return FILTER(this.courses, this.seach_query)
         },

         user() {
            return this.$store.state.app.user
         },
      },

      methods: {
         TOGGLE_SORT_LIST(listToToogle, otherList, otherList2) {
            this[listToToogle].isShown ?
            this[listToToogle].isShown = false :
            this[listToToogle].isShown = true;

            this[otherList].isShown = false;
            this[otherList2].isShown = false;    
         },
      },
      
      mounted() {
         this.$store.commit('HIDE_SIDEBAR');
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/pages/overview.scss';
</style>