import axios from 'axios'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const state = () => ({
   courses: [
     
   ],

   coursePreview: [

   ],

   loginSlideShowData:{
      content: [
         {
            id: 0,
            heading: 'Share your knowledge and expertise with learners from all over the world and earn from it',
            tagline: "Whether you're a seasoned professional or a passionate hobbyist, our platform makes it easy for you to connect with students and share your knowledge.",
            image: 'image1'
         },

         {
            id: 1,
            heading: 'Discover endless learning possibilities with our online courses from top tutors',
            tagline: 'Join us and unleash your potential today!',
            image: 'image2'
         }, 
      ],
   },

   app: {
      user: {},

      userCourses: null,

      userTransactions: null,
   },


   payments: [
      {
         "date": "Mon Dec 26 2022 10:46:54 GMT+0000 (Coordinated Universal Time)",
         "paystackCode": "CUS_nzk4o0mi2dl9vo7",
         "amount": 900000,
         "userPhoneNumber": "",
         "description": "payment for How to bake cake with pudding",
         "userName": "Ugochukwu  Okeke ",
         "authorId": "V0AVmtw1FSWvyn4oQBxszyAsbie2",
         "type": "course purchase",
         "userId": "ZgRTWE3h8OdaNCwyDHsUdJyxbWk2",
         "paymentType": "card",
         "courseName": "How to bake cake with pudding",
         "ref": "z339yu2i3k",
         "userEmail": "okekeugochukwu.dev@gmail.com",
         "courseId": "How to bake1671545117124",
         "status": "success"
       }
   ],
   
   courseCreateprogress: null,

   operationProgress: null,

   loadingState: null,

   showUploadProgress: false,

   showOperation: false,

   sidebar: {
      isShown: false
   },

   toast: {
      isShown: false,
      message: null
   },

   logoutModal: {
      isShown: false,
      name: 'logout'
   },

})

export const mutations =  ({

   TOGGLE_SWITCH(state, switchToToggle) {
      state[switchToToggle].isShown ? 
         state[switchToToggle].isShown = false :
         state[switchToToggle].isShown = true
   },

   SHOW_TOAST(state, message) {
      state.toast.message = message
      state.toast.isShown = true
   },

   HIDE_TOAST(state) {
      state.toast.message = null
      state.toast.isShown = false
   },

   SHOW_SIDEABAR(state){
      state.sidebar.isShown = true;
   },

   HIDE_SIDEBAR(state){
      state.sidebar.isShown = false;
   },
   SET_USER_INFO(state, payload) {
      state.app.user = payload
   },

   SET_COURSES(state, payload) {
      state.courses = payload
   },

   SET_USER_COURSES(state, payload) {
      state.app.userCourses = payload
   },

   SET_USER_TRANSACTIONS(state, payload) {
      state.app.userTransactions = payload
   }


})

export const actions = ({
   CHECK_AUTH_STATE({dispatch, state, commit}) {    
      const auth = getAuth();

      onAuthStateChanged(auth, async(user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;

            let require = {
               uid: user.uid
            }

            await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/AuthSignIn", require)
               .then((response)=>{

                  commit('HIDE_TOAST')
                  commit('SHOW_TOAST', 'Updated')

                  setTimeout(() => {
                     commit('HIDE_TOAST')
                  }, 1000);

                  localStorage.setItem('user',JSON.stringify(response.data))
                  dispatch('GET_USER_INFO')
               })
               .catch((error)=> {
                  console.log(error); 
               })
         } 
         else {
            // User is signed out
            localStorage.clear();
         }
      })

   },

   async RE_INTITIALIZE_USER({commit}) {
      await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/loginUser", this.user)
         .then((response) => {
            commit('SET_USER_INFO', response.data)
         })
   },

   async GET_USER_INFO({commit}) {
      const user = JSON.parse(localStorage.getItem('user'))
      commit('SET_USER_INFO', user)
   },
   
   async GET_ALL_COURSES({commit}) {
      await axios.get("https://us-central1-dulcet-order-370109.cloudfunctions.net/course/courses")
      .then((response) => {
         console.log('courses:', response.data)
         localStorage.setItem('courses', JSON.stringify(response.data))
         commit('SET_COURSES', response.data)
      })
   },

   async GET_THIS_USERS_COURSES({state, commit}) {
      await axios.get(`https://us-central1-dulcet-order-370109.cloudfunctions.net/course/UserCourses?userId=${state.app.user.uid}`)
         .then((response) => {

            const courses = response.data.filter((course) =>  course.id != 'Culinary Disrupt.1672311260475')
            commit('SET_USER_COURSES', courses)
         })
   },

   async GET_THIS_USERS_TRANSACTIONS({state, commit}) {
      await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/payment/userTransactions", {userId : state.app.user.uid})
      .then((response) => {
         console.log('transactions: ', response.data)
         commit('SET_USER_TRANSACTIONS', response.data)
      })
   }
})