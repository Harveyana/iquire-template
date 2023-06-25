<template>
   <div class="details password border10">
      
      <!-- FORM -->
      <form @submit.prevent="INIT_CHANGE_PASSWORD">
         <div
            v-for="dataGroup in passwordInputs"
            :key="dataGroup.title"
         >

            <!-- INPUTS -->
            <label for="" class="small-text">
            </label>
            
            <label :for="dataGroup.id" class="small-text">
                  {{dataGroup.label}}
            </label>
            
            <div>
                  <input 
                     :type="dataGroup.type" 
                     :name="dataGroup.name" 
                     :id="dataGroup.id"  autocomplete="off"
                     class="mini-text outline-box" v-model="passwords[dataGroup.model]"
                     @keyup="INIT_PASSWORD_VALIDATION(dataGroup)"
                     required
                  />

                  <button>
                     <div v-show="dataGroup.isShown" @click="TOGGLE_PASSWORD_VISIBILITY(dataGroup)">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.99993 13.6073C8.00827 13.6073 6.3916 11.9906 6.3916 9.99896C6.3916 8.00729 8.00827 6.39062 9.99993 6.39062C11.9916 6.39062 13.6083 8.00729 13.6083 9.99896C13.6083 11.9906 11.9916 13.6073 9.99993 13.6073ZM9.99993 7.64062C8.69993 7.64062 7.6416 8.69896 7.6416 9.99896C7.6416 11.299 8.69993 12.3573 9.99993 12.3573C11.2999 12.3573 12.3583 11.299 12.3583 9.99896C12.3583 8.69896 11.2999 7.64062 9.99993 7.64062Z" fill="#292D32"/>
                              <path d="M9.9999 17.5177C6.86657 17.5177 3.90824 15.6844 1.8749 12.501C0.991569 11.126 0.991569 8.88437 1.8749 7.50104C3.91657 4.31771 6.8749 2.48438 9.9999 2.48438C13.1249 2.48438 16.0832 4.31771 18.1166 7.50104C18.9999 8.87604 18.9999 11.1177 18.1166 12.501C16.0832 15.6844 13.1249 17.5177 9.9999 17.5177ZM9.9999 3.73438C7.30824 3.73438 4.73324 5.35104 2.93324 8.17604C2.30824 9.15104 2.30824 10.851 2.93324 11.826C4.73324 14.651 7.30824 16.2677 9.9999 16.2677C12.6916 16.2677 15.2666 14.651 17.0666 11.826C17.6916 10.851 17.6916 9.15104 17.0666 8.17604C15.2666 5.35104 12.6916 3.73438 9.9999 3.73438Z" fill="#292D32"/>
                        </svg>
                     </div>

                     <div v-show="!dataGroup.isShown" @click="TOGGLE_PASSWORD_VISIBILITY(dataGroup)">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.8916 12.7342C7.73327 12.7342 7.57493 12.6759 7.44993 12.5509C6.7666 11.8676 6.3916 10.9592 6.3916 10.0009C6.3916 8.00924 8.00827 6.39258 9.99993 6.39258C10.9583 6.39258 11.8666 6.76758 12.5499 7.45091C12.6666 7.56758 12.7333 7.72591 12.7333 7.89258C12.7333 8.05924 12.6666 8.21758 12.5499 8.33424L8.33327 12.5509C8.20827 12.6759 8.04994 12.7342 7.8916 12.7342ZM9.99993 7.64258C8.69993 7.64258 7.6416 8.70091 7.6416 10.0009C7.6416 10.4176 7.74993 10.8176 7.94993 11.1676L11.1666 7.95091C10.8166 7.75091 10.4166 7.64258 9.99993 7.64258Z" fill="#292D32"/>
                              <path d="M4.66654 15.4241C4.52487 15.4241 4.37487 15.3741 4.2582 15.2741C3.36654 14.5158 2.56654 13.5824 1.8832 12.4991C0.99987 11.1241 0.99987 8.88242 1.8832 7.49909C3.91654 4.31576 6.87487 2.48242 9.99987 2.48242C11.8332 2.48242 13.6415 3.11576 15.2249 4.30742C15.4999 4.51576 15.5582 4.90742 15.3499 5.18242C15.1415 5.45742 14.7499 5.51575 14.4749 5.30742C13.1082 4.27409 11.5582 3.73242 9.99987 3.73242C7.3082 3.73242 4.7332 5.34909 2.9332 8.17409C2.3082 9.14909 2.3082 10.8491 2.9332 11.8241C3.5582 12.7991 4.27487 13.6408 5.06654 14.3241C5.32487 14.5491 5.3582 14.9408 5.1332 15.2074C5.01654 15.3491 4.84154 15.4241 4.66654 15.4241Z" fill="#292D32"/>
                              <path d="M10.0001 17.5176C8.8918 17.5176 7.80847 17.2926 6.7668 16.8509C6.45013 16.7176 6.30013 16.3509 6.43347 16.0342C6.5668 15.7176 6.93347 15.5676 7.25013 15.7009C8.13347 16.0759 9.05847 16.2676 9.9918 16.2676C12.6835 16.2676 15.2585 14.6509 17.0585 11.8259C17.6835 10.8509 17.6835 9.15089 17.0585 8.17589C16.8001 7.76756 16.5168 7.37589 16.2168 7.00923C16.0001 6.74256 16.0418 6.35089 16.3085 6.12589C16.5751 5.90923 16.9668 5.94256 17.1918 6.21756C17.5168 6.61756 17.8335 7.05089 18.1168 7.50089C19.0001 8.87589 19.0001 11.1176 18.1168 12.5009C16.0835 15.6842 13.1251 17.5176 10.0001 17.5176Z" fill="#292D32"/>
                              <path d="M10.5751 13.5576C10.2835 13.5576 10.0168 13.3493 9.95848 13.0493C9.89181 12.7076 10.1168 12.3826 10.4585 12.3243C11.3751 12.1576 12.1418 11.391 12.3085 10.4743C12.3751 10.1326 12.7001 9.91598 13.0418 9.97431C13.3835 10.041 13.6085 10.366 13.5418 10.7076C13.2751 12.1493 12.1251 13.291 10.6918 13.5576C10.6501 13.5493 10.6168 13.5576 10.5751 13.5576Z" fill="#292D32"/>
                              <path d="M1.66686 18.9592C1.50853 18.9592 1.3502 18.9009 1.2252 18.7759C0.983529 18.5342 0.983529 18.1342 1.2252 17.8926L7.4502 11.6676C7.69186 11.4259 8.09186 11.4259 8.33353 11.6676C8.5752 11.9092 8.5752 12.3092 8.33353 12.5509L2.10853 18.7759C1.98353 18.9009 1.8252 18.9592 1.66686 18.9592Z" fill="#292D32"/>
                              <path d="M12.1083 8.51589C11.9499 8.51589 11.7916 8.45755 11.6666 8.33255C11.4249 8.09089 11.4249 7.69089 11.6666 7.44922L17.8916 1.22422C18.1333 0.982552 18.5333 0.982552 18.7749 1.22422C19.0166 1.46589 19.0166 1.86589 18.7749 2.10755L12.5499 8.33255C12.4249 8.45755 12.2666 8.51589 12.1083 8.51589Z" fill="#292D32"/>
                        </svg>
                     </div>
                  </button>
            </div>
         </div>

         <!-- PASSWORD CHECKS -->
         <div>
            <span class="mini-text condition-null" :class="{'condition-pass': passwordChecks.isEightCharcters}" v-if="passwordChecks.isShown">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z" fill="#828282"/>
                  </svg>

                  Password must be at least 8 characters long
            </span>

            <span class="mini-text condition-null" :class="{'condition-pass': passwordChecks.containsCapitalLetter}" v-if="passwordChecks.isShown">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z" fill="#828282"/>
                  </svg>

                  Must contain at least 1 uppercase letter
            </span>

            <span class="mini-text condition-null" :class="{'condition-pass': passwordChecks.containsLowerLetter}" v-if="passwordChecks.isShown">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z" fill="#828282"/>
                  </svg>

                  Must contain at least 1 lowercase letter.
            </span>


            <span class="mini-text condition-null" :class="{'condition-pass': passwordChecks.passwordsMatch}" v-if="this.passwordChecks.matchConfimationIsShown">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z" fill="#828282"/>
                  </svg>

                  Passwords <span v-if="!this.passwordChecks.passwordsMatch">do not</span> match
            </span>
         </div>
         
         <input type="submit" class="small-text primary-btn" value="Update" ref="pasdUpdateBtn">
      </form>
   </div>
</template>

<script>
   import axios from 'axios';

   export default {
      name: 'passwordChange',

      data() {
         return {
            passwordInputs: [
                  {
                     label: 'Enter Old Password',
                     type: 'text',
                     name: 'old-password',
                     id: 'old-password',
                     isShown: true,
                     model: 'old',
                     value: ''
                  },
                  {
                     label: 'Enter New Password',
                     type: 'text',
                     name: 'new-password',
                     id: 'new-password',
                     isShown: true,
                     model: 'new',
                     value: ''
                  },
                  {
                     label: 'Confirm New Password',
                     type: 'text',
                     name: 'new-password-2',
                     id: 'new-password-2',
                     isShown: true,
                     model: 'new2',
                     value: ''
                  },
            ],
            passwords: {
               old: '',
               new: '',
               new2: ''
            },
            passwordChecks: {
               isShown: false, 
               matchConfimationIsShown:  false,
               passwordsMatch:  false,
               isEightCharcters: false,
               containsCapitalLetter : false,
               containsLowerLetter : false,
            }
         }
      },
   
      methods: {
         TOGGLE_PASSWORD_VISIBILITY(passwordData) {
            if (passwordData.isShown) {
               passwordData.isShown = false;
               passwordData.type = 'password'
            }
            else {
               passwordData.isShown = true;
               passwordData.type = 'text'
            }
         },
         INIT_PASSWORD_VALIDATION(dataGroup) {
               //check if it's old password field, check with password in database
               if (this.passwordInputs.indexOf(dataGroup) === 0) {
                  console.log('check if password matches password in database')
               }

               //check if its 'new password field', show password conditions and start validation
               if(this.passwordInputs.indexOf(dataGroup) === 1) {
                  
                  if(this.passwords.new === '' || this.passwords.new === ' ') {
                     this.passwordChecks.isShown = false;
                  }
                  else {
                     this.passwordChecks.isShown = true;
                     this.VALIDATE_PASSWORD();
                  }
               }
               
               //check if it's new2 password field, check if it matches new password field
               if (this.passwordInputs.indexOf(dataGroup) === 2) {
                  if(this.passwords.new2 === '' || this.passwords.new2 === ' ') {
                     this.passwordChecks.matchConfimationIsShown = false;
                  }
                  else {
                     this.passwordChecks.matchConfimationIsShown = true;
                     this.CHECK_IF_PASSWORDS_MATCH();
                  }
               }
         },
         VALIDATE_PASSWORD() {
               //get new password, make into an array and start checking
               var newPassword = this.passwords.new;
               var newPasswordArray = Array.from(newPassword)

               this.CHECK_CHARACTER_LENGTH(newPasswordArray);
               this.CHECK_FOR_UPPER_CASE(newPassword);
               this.CHECK_FOR_LOWER_CASE(newPassword);
               this.CHECK_IF_PASSWORDS_MATCH();
         },
         CHECK_CHARACTER_LENGTH(newPasswordArray) {
               switch(true) {
                  case newPasswordArray.length >= 8: 
                     this.passwordChecks.isEightCharcters = true;
                     break;

                  case newPasswordArray.length < 8: 
                     this.passwordChecks.isEightCharcters = false;
                     break;
               
               }
         },
         CHECK_FOR_UPPER_CASE(newPassword) {
               //first check if letter is present
               var letterIsPresent = this.CHECK_FOR_LETTER(newPassword);

               if (letterIsPresent) {
                  /*make array from password*/
                  var newPasswordArray = Array.from(newPassword);

                  
                  // letterIsPresent? console.log('yes', newPassword) :console.log('no', newPassword);
                  // console.log(newPasswordArray)


                  /* make new array of only letters in password */
                  var lettersInNewPassword = newPasswordArray.filter(character => this.CHECK_FOR_LETTER(character)  === true)

                  /* check if any of the letters is uppercase */
                  var upperCaseIsPresent =  lettersInNewPassword.some( character => character === character.toUpperCase() )

                  upperCaseIsPresent? 
                  this.passwordChecks.containsCapitalLetter = true: 
                  this.passwordChecks.containsCapitalLetter = false

               }else {
                  this.passwordChecks.containsCapitalLetter = false;
               }                
         },
         CHECK_FOR_LOWER_CASE(newPassword) {
               //first check if letter is present
               var letterIsPresent = this.CHECK_FOR_LETTER(newPassword);

               if (letterIsPresent) {
                  /*make array from password*/
                  var newPasswordArray = Array.from(newPassword);

                  
                  // letterIsPresent? console.log('yes', newPassword) :console.log('no', newPassword);
                  // console.log(newPasswordArray)


                  /* make new array of only letters in password */
                  var lettersInNewPassword = newPasswordArray.filter(character => this.CHECK_FOR_LETTER(character)  === true)

                  /* check if any of the letters is uppercase */
                  var upperCaseIsPresent =  lettersInNewPassword.some( character => character === character.toLowerCase() )

                  upperCaseIsPresent? 
                  this.passwordChecks.containsLowerLetter = true: 
                  this.passwordChecks.containsLowerLetter = false

               }else {
                  this.passwordChecks.containsLowerLetter = false;
               }       
         },
         CHECK_FOR_LETTER(string) {
               return /[a-z]/i.test(string) ? true : false
         },
         CHECK_IF_PASSWORDS_MATCH() {
               this.passwords.new === this.passwords.new2 ?
               this.passwordChecks.passwordsMatch = true :
               this.passwordChecks.passwordsMatch = false
         },
         INIT_CHANGE_PASSWORD() {
               if(
                  this.passwordChecks.passwordsMatch === true &&
                  this.passwordChecks.isEightCharcters === true &&
                  this.passwordChecks.containsCapitalLetter === true &&
                  this.passwordChecks.containsLowerLetter === true
               ) {
                  this.CHANGE_PASSWORD()
               }
         },

         async CHANGE_PASSWORD() {
            this.$refs.pasdUpdateBtn.disabled = true
            this.$refs.pasdUpdateBtn.value = 'Updating..'

            const details = {userId: this.user.uid, password: this.passwords.new}

            await axios.put('https://us-central1-dulcet-order-370109.cloudfunctions.net/user/password', details)
               .then((response) => {
                  
                  this.TOAST_PING('Updated')
               
                  this.REST_FORM();
               })
               .catch((error) => {
                  console.log(error)
                  this.TOAST_PING('Update failed')

                  this.REST_FORM();
               })
         },

         TOAST_PING(message) {
            this.$store.commit('SHOW_TOAST', message)

            setTimeout(() => {
               this.$store.commit('HIDE_TOAST')
            }, 1000);
               
         },
         
         REST_FORM() {
            this.$refs.pasdUpdateBtn.value = 'Update'
            this.$refs.pasdUpdateBtn.disabled = false
            this.passwords.old = '',
            this.passwords.new = '',
            this.passwords.new2 = ''
            this.passwordChecks.isShown = false, 
            this.passwordChecks.matchConfimationIsShown = false,
            this.passwordChecks.passwordsMatch = false,
            this.passwordChecks.isEightCharcters = false,
            this.passwordChecks.containsCapitalLetter = false,
            this.passwordChecks.containsLowerLetter = false
         }
      },
      
      computed: {
         user() {
            return this.$store.state.app.user
         }
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/components/password.scss';
</style>

