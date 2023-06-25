<template>
   <div class="login">
     <signUpSlideShow />
      
      <!-- LOGIN & SIGN UP (LOGIN)-->
      <div class="sign-in">
         <div>
            <NuxtLink to="/">
               <img src="@/assets/imgs/logo.svg" alt="iQuire" />
            </NuxtLink>

            <h2 class="large-text">
               Sign In
            </h2>

            <p class="base-text">
               New user? 
               <NuxtLink to="/sign-up">
                  Create Account
               </NuxtLink>
            </p>

            <form class="sign-in-form" @submit.prevent="INIT_LOGIN">
               <!-- EMAIL  -->
               <label for="email" class="small-text">
               Email Address
               </label>
               <input 
                  type="email" 
                  class="mini-text primary-input"
                  placeholder="johndoe@gmail.com"
                  autocomplete="off"
                  v-model="user.email"
                  required @focus="errorMssg = null;"
               >

               <!-- PASSWORD -->
               <label for="password" class="small-text">
               Password
               </label>
               <input 
                  type="password" 
                  id="password" 
                  class="mini-text primary-input"
                  placeholder="John"
                  autocomplete="off"
                  v-model="user.password"
                  required @focus="errorMssg = null;"
               >

               <!-- SIGN IN -->
               <input 
               type="submit" 
               class="base-text primary-btn"
               value="Sign In" 
               ref="signInButton"
               >

               <!-- ERROR MSSG -->
               <span class="login-error-mssg small-text" ref="loginErrorMssg" v-if="errorMssg != null">
                  {{ errorMssg }}
               </span>
            </form>

            <NuxtLink to="/forgot-password">
               Forgot password?
            </NuxtLink>

            <div class="third-party-signup">
               <p class="small-text">
               or
               </p>

               <button class="small-text outline-box" @click="AUTH_VIA_GOOGLE()">
                  <img src="@/assets/imgs/login/google_logo.svg" alt="google-logo"/>
                  Sign in with Google
               </button>

               <button class="small-text outline-box" @click="AUTH_VIA_FACEBOOK()">
                  <img src="@/assets/imgs/login/fb_logo.svg" alt="facebook-logo"/>
                  Sign in with Facebook
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   const axios = require('axios');
   import { auth } from '@/firebase'
   import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

   export default {
      name: 'LoginPage',
      layout: 'loginSignUp',

      head(){
         return {
            title: 'iQuire | Login'
         }
      },

      data() {
         return {
            user: {
               email: null,
               password: null
            },

            errorMssg: null
         }
      },

      computed: {        
       
      },

      methods: {
         TOGGLE_BUTTON_STATE(button) {
            if (this.$refs[button].diabled === true) {
               this.$refs[button].value =  'Sign In'
               this.$refs[button].disabled = true
               this.$refs[button].removeAttribute ('disabled');
               this.$refs[button].classList.remove('disabled')
            }
            else {
               this.$refs[button].value =  'Signing in..'
               this.$refs[button].diabled = true;
               this.$refs[button].classList.add('disabled')
            }       
         },

         async INIT_LOGIN() {
            this.TOGGLE_BUTTON_STATE('signInButton');
            this.errorMssg = null

            await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/loginUser", this.user)
               .then((response)=> {
                  if(response && response.status === 200) {
                     console.log(response)
                     this.TOGGLE_BUTTON_STATE('signInButton')

                     localStorage.setItem('userIsLoggedIn', true)
                     localStorage.setItem('user',JSON.stringify(response.data))

                     //IF_USER_WAS_REDIRECTED_FROM_A_PROTECTED_ROUTE
                     //SEND_USER_BACK_THE_INITIAL_ROUTE
                     if(this.$route.query.redirect){
                        this.$router.push(`${this.$route.query.redirect}`)
                     }
                     else {
                        this.$router.push('/dashboard/overview')  
                     }  
                  }
                  else {
                     //ERROR_FROM_SERVER
                     console.log('Server Error: ', response)
                     this.errorMssg = 'Sorry. Something went wrong'
                     this.TOGGLE_BUTTON_STATE("signInButton")
                  }
               })
               .catch((error)=> { 
                  //ERROR_FROM_AXIOS
                  console.log('Axios Error: ', error)
                  this.errorMssg = 'Sorry. Something went wrong'
                  this.TOGGLE_BUTTON_STATE("signInButton")
               })
         },

         async AUTH_VIA_GOOGLE(){
            this.TOGGLE_BUTTON_STATE('signInButton');
            this.errorMssg = null;

            const provider = new GoogleAuthProvider();

            ///////////AUTH START - GET_USER_DATA_FROM_AUTH
            signInWithPopup(auth, provider)
               .then( async(authResponse) => {
                  const authUser = authResponse.user;

                  let user = {
                     uid: authUser.uid
                  }        

                  this.$refs.signInButton.value = 'Just a minute..';
                  ////AXIOS_START - SEND_DATA_TO_SERVER
                  await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/AuthSignIn", user)  
                     .then((response)=>{
                        console.log(response)

                        if(response && response.status === 200){
                              localStorage.setItem('userIsLoggedIn', true)
                              localStorage.setItem('user',JSON.stringify(response.data))

                           //IF_USER_WAS_REDIRECTED_FROM_A_PROTECTED_ROUTE
                           //SEND_USER_BACK_THE_INITIAL_ROUTE
                           if(this.$route.query.redirect){
                              console.log(this.$route.query.redirect)
                              this.$router.push(`${this.$route.query.redirect}`)
                           }  
                           else {
                              this.$router.push('/dashboard/overview')
                           }
                        }
                        else{
                           //ERROR_FROM_SERVER
                           console.log('Server Error: ', response)
                           this.errorMssg = 'Sorry. Something went wrong'
                           this.TOGGLE_BUTTON_STATE("signInButton")
                        }
                     })

                     .catch((error)=> {
                        //ERROR_FROM_AXIOS
                        console.log('Axios Error: ', error)
                        this.errorMssg = 'Sorry. Something went wrong'
                        this.TOGGLE_BUTTON_STATE("signInButton")
                     })
                     
                     
               })
               .catch((error) => {
                  console.log('Auth or Network Error: ', error)
                  this.errorMssg = 'Auth Failed.'
                  this.TOGGLE_BUTTON_STATE("signInButton");
               })
            ///////////AUTH END
         },

         async AUTH_VIA_FACEBOOK(){
            //TOGGLE_BUTTON_STATE
            this.TOGGLE_BUTTON_STATE('signInButton');  
            this.errorMssg = null; 

            let provider = new FacebookAuthProvider();

            ///////////AUTH START - GET_USER_DATA_FROM_AUTH
            signInWithPopup(auth, provider)
               .then( async(authResponse) => {
                  const authUser = authResponse.user;

                  let user = {
                     Name: authUser.Name,
                     email: authUser.email,
                     photoUrl: authUser.photoURL,
                     uid: authUser.uid,
                  }
                  
                  ////AXIOS START - SEND_DATA_TO_SERVER
                  await axios.get("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/googleAuthSignIn", user)
                     .then((response)=>{

                        localStorage.setItem('user',{
                           isLoggedIn: true,
                           type: response.data.type
                        })       

                        this.toggleButtonState('signInButton');   

                        window.location = `https://${response.data.type}.iquire.io`
                     })
     
                     .catch((error)=> {
                        //ERROR_FROM_AXIOS
                        console.log('Axios Error: ', error)
                        this.toggleButtonState('signInButton'); 
                        this.errorMssg = 'Sorry, something went wrong'
                     })
                  ////AXIOS END
                  
               })
               .catch((error) => {
                  //ERROR_MSG_FROM_AUTH
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log('Auth: ', errorMessage, errorCode);

                  this.errorMssg = 'Authentication failed'
                  this.TOGGLE_BUTTON_STATE("signInButton")
               })
            ///////////AUTH END
            
         }
      },

      beforeRouteEnter(to, from, next) {
         next(vm => {
            const user = JSON.parse(localStorage.getItem('user'))
            const userIsLoggeIn = JSON.parse(localStorage.getItem('userIsLoggedIn'))

            if(user && userIsLoggeIn) {
               if (user.type != 'user') {
                  window.location.href = `https://${user.type.toLowerCase()}.iquire.io/login`
               }
               else {
                  vm.$router.push('/dashboard/overview')
               }
            }
         });
      },

   }
</script>

<style lang="scss" scoped> 
   @import '@/style/pages/login.scss';
</style>