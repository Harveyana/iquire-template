<template>
   <main class="dashboard">
      <logoLoader v-show="logoLoader.isShown"/>

      <!-- >>>>>>TOAST -->
      <mainToast />
      
      <!-- >>>>>>SIDEBAR -->
      <sideBar :class="{ 'shown': sidebarStatus === true }" />

      <div class="dash-content">
         <Nuxt v-if="user"/>
      </div>

      <!-- >>>>>>LOGOUT MODAL -->
      <mainModal :modalData="logoutModal" v-show="logoutModal.isShown">
         <div>
            <img src="@/assets/imgs/logout/power.svg" alt="logout?" />
         </div>

         <p>
            Are you sure want to Logout?
         </p>

         <button class="primary-btn base-text" @click="LOGOUT">
            Yes
         </button>

         <button class="primary-btn-alt base-text" @click="TOGGLE_MODAL">
            No
         </button>
      </mainModal>

  </main>
</template>

<script>
   import { auth } from '@/firebase'
   import { signOut } from "@firebase/auth";
   
   export default {
      data() {
         return {
            logoutModal: {
               isShown: false,
               name: 'logout'
            },
            
            logoLoader: {
               isShown: true
            }
         }
      },

      async fetch() {
         
      },
      
      computed: {
         user() {
            return this.$store.state.app.user
         },

         sidebarStatus() {
            return this.$store.state.sidebar.isShown; 
         }
      },


      methods: {
         INIT_LOGOUT() {
            this.logoutModal.isShown = true
         },

         LOGOUT() {
            this.TOGGLE_MODAL()

            signOut(auth)
               .then(() => {
                  // Sign-out successful.
                  localStorage.clear();
                  this.$router.push('/login')
               })
               .catch((error) => {
                  console.log(error)
               });
            
         },

         HIDE_SIDEBAR() {
            if(process.client) {
               if (window.innerWidth < 1200) {
                    this.$store.commit('HIDE_SIDEBAR')
               }
            }
         },

         TOGGLE_MODAL() {
            this.logoutModal.isShown === true ? 
            this.logoutModal.isShown = false :
            this.logoutModal.isShown = true
         }, 

         CLOSE_MENUS() {
            this.sidebarStatus ? this.$store.commit('HIDE_SIDEBAR0') : ' '
            this.logoutModal.isShown ? this.logoutModal.isShown = false : ' '
         },

         TOGGLE_SIDEBAR(){
            this.$store.commit('TOGGLE_SWITCH', 'sidebar')
         },
         
         async CHECK_FOR_USER_INFO() {
            Object.keys(this.$store.state.app.user).length === 0 ?
               this.$store.dispatch('GET_USER_INFO') : console.log('User info available')
         },

         async CHECK_FOR_COURSES() {
            this.$store.state.courses.length === 0 ?
               this.$store.dispatch('GET_ALL_COURSES') : console.log('There are courses in store')
         },

         async CHECK_FOR_USER_COURSES() {
            this.$store.state.app.userCourses === null ?
               this.$store.dispatch('GET_THIS_USERS_COURSES') : console.log('User courses in store')
         },

         async CHECK_FOR_USER_TRANSACTIONS() {
            this.$store.state.app.userTransactions === null ?
               this.$store.dispatch('GET_THIS_USERS_TRANSACTIONS') : console.log('User transactions in store')
         },

         ADD_ESC_LISTENER() {
            document.addEventListener('keydown', (e)=> {
               if (e.key === 'Escape') {
                  this.CLOSE_MENUS()
               }
            })
         }
      },

      created() {
         setTimeout(()=> {
            this.logoLoader.isShown = false
         }, 500)

         this.$nuxt.$on('TOGGLE_MENU', ($event) => this.TOGGLE_SIDEBAR($event))
         this.$nuxt.$on('CLOSE_MENU', ($event) => this.HIDE_SIDEBAR($event))
         this.$nuxt.$on('EMIT_LOGOUT', ($event) => this.INIT_LOGOUT($event))
         this.$nuxt.$on('TOGGLE_MODAL', ($event) => this.CLOSE_MENUS($event))
      },

      mounted () {  
         const user = JSON.parse(localStorage.getItem('user'))
         const userIsLoggeIn = JSON.parse(localStorage.getItem('userIsLoggedIn'))

         

         if(user && userIsLoggeIn) {
            if (user.type != 'user') {
               window.location.href = `https://${user.type.toLowerCase()}.iquire.io`
            }
         }
         else {
            this.$router.push({
               path: '/login',
               query: { redirect: this.$route.fullPath}
            })
         }

         this.ADD_ESC_LISTENER()
         
         this.$store.commit('HIDE_SIDEBAR');
         
         this.CHECK_FOR_USER_INFO()
         
         this.CHECK_FOR_COURSES()   

         this.CHECK_FOR_USER_COURSES()

         this.CHECK_FOR_USER_TRANSACTIONS()
      },

   }
</script>

<style lang="scss">
//    @import '@/style/pages/root.scss';
</style>


