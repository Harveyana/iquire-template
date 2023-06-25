<template>
   <div class="forgot-password">
      <!-- SLIDESHOW  -->
      <signUpSlideShow />

      <div>
         <NuxtLink to="/">
            <img src="@/assets/imgs/logo.svg" alt="iQuire" />
         </NuxtLink>

         <!-- RECOVER PASSWORD -->
         <div class="recover-password recovery" v-if="recoveryProgress === 0">
            <h2 class="large-text">Recover Password</h2>

            <p class="base-text"> Don’t worry, it happens to all of us</p>

            <form class="recover-pswd-for" @submit.prevent="SUBMIT_EMAIL()">
               <label for="email" class="mini-text">Email Address</label>

               <input
                  type="email"
                  id="firstName"
                  class="mini-text outline-box"
                  placeholder="johndoe@gmail.com"
                  autocomplete="off"
                  v-model="userEmail"
                  required
               />

               <input 
                  type="submit" 
                  value="Send Reset Link"
                  class="base-text primary-btn"
               >
            </form>
         </div>

         <!-- RESET LINK SENT -->
         <div class="reset-link-sent recovery" v-if="recoveryProgress === 1">
               <h2 class="large-text">Recover Password</h2>
               
               <p class="base-text" v-if="userEmail">Your password reset link has been sent to {{userEmail.slice(0, 10)}}*******</p>

               <img
                  src="@/assets/imgs/forgot_password/pswd_reset_pending.svg"
                  alt="account-created"
               />

               <primary-btn class="base-text primary-btn" @click="recoveryProgress = 2">
                  <a :href="`mailto:${userEmail}`" target="_blank" rel="noopener noreferrer">Open Email</a>
               </primary-btn>
         </div>
         
         <!-- CREATE NEW PASSWORD -->
         <div class="create-new-password recovery" v-if="recoveryProgress === 2">
               <h2 class="large-text">Recover Password</h2>
               
               <p class="base-text">Create Your New Password</p>

               <form class="new-password-form" @submit.prevent="SUBMIT_PASSWORD()">
                  <label for="password" class="small-text">Enter New Password</label>
                  <input 
                     type="password" 
                     name="password" 
                     id="password"
                     class="mini-text outline-box"
                     placeholder="John"
                     autocomplete="off"
                     v-model="password"
                     required
                  >

                  <label for="password2" class="small-text">Confirm New Password</label>
                  <input 
                     type="password" 
                     name="password2" 
                     id="password"
                     class="mini-text outline-box"
                     placeholder="John"
                     autocomplete="off"
                     v-model="confirmPassword"
                     required
                  >

                  <div class="new-password-form_verf"></div>
                  
                  <input 
                     type="submit" 
                     value="Update"
                     class="mini text primary-btn"
                  >
               </form>
         </div>

         <div class="reset-successful recovery" v-if="recoveryProgress === 3">
            <h2 class="large-text">Password Reset Successful</h2>
            
            <p class="base-text">Congratulations, you can now have access to your account</p>

            <img 
               src="@/assets/imgs/forgot_password/pswd_reset_complete.svg" 
               alt="password-reset-successful"
            >

            <button class="primary-btn" @click="$router.push('/login')">
               Go to Dashboard
            </button>
         </div>
      </div>
   </div>
</template>

<script>
   import axios from 'axios';
   import { doc, getDoc, getFirestore, deleteDoc } from "firebase/firestore";

   export default {
      name: 'PasswordRecoveryPage',
      layout: 'loginSignUp',

      head(){
         return {
            title: 'iQuire | Recover Password'
         }
      },

      data() {
         return {
            recoveryProgress: 0,
            userEmail: null,
            password: null,
            confirmPassword: null
         }
      },

      computed: {
      },

      methods: {
         SUBMIT_EMAIL(){
            axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/passwordReset", {email:this.userEmail})
               .then((response)=>{
                  
                  this.recoveryProgress = 1
               })
               .catch((error)=>{
                  console.log(error.response.data)
               })
         },

         async SUBMIT_PASSWORD(){

            if(this.password === this.confirmPassword){
               const db = getFirestore()

               const docRef = doc(db, "passwordResets", `${this.$route.query.passcode}`);
               const docSnap = await getDoc(docRef);

               if (docSnap.exists()) {
                  const reset = docSnap.data()

                  axios.put("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/password", {userId: reset.userId, password: this.confirmPassword})
                  .then( async(response)=>{
                     
                     deleteDoc(doc(db, "passwordResets", `${this.$route.query.passcode}`))

                     this.recoveryProgress = 3
                  })
                  .catch((error)=>{
                     console.log(error.response.data)
                  })
               } 
               else {
               }
            }
                        
         }

      },

      mounted() {

         if(this.$route.query.passcode){
            console.log(`this is the code ${this.$route.query.passcode}`)

            this.recoveryProgress = 2;
         }

      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/pages/forgotPassword.scss';
</style>