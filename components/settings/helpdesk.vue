<template>
    <div class="details helpdesk border10">
         <form @submit.prevent="SEND_MAIL()">

            <div>
               <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  v-model="helpDeskFormData.subject"
                  placeholder="Enter Subject"
                  class="outline-box mini-text"
                  required
               >
               
               <label for="subject" class="small-text">Subject</label>
            </div>

            <div>
               <textarea 
               name="subject" 
               id="subject" 
               cols="30" 
               rows="5" 
               class="mini-text outline-box"
               v-model="helpDeskFormData.message"
               required
            ></textarea>

            <label for="message" class="small-text">Message</label>
            </div>

            <input type="submit" value="Submit" class="base-text primary-btn" ref="helpSubmitBtn">
         </form>

         <p class="small-text">
            Or Send Us A Message Here:
         </p>

         <div class="socials">
            <ul>
               <li
                     v-for="item in socials"
                     :key="item.fileName"
               >
                  <a href="">
                        <img :src="require(`@/assets/imgs/settings/${item.name}.svg`)" :alt="item.name">
                  </a>
               </li>   
            </ul>
         </div>
   </div>
</template>

<script>
   import emailjs from '@emailjs/browser';

   export default {
      name: 'helpDesk',

      data() {
         return {
            helpDeskFormData: {
               subject: null,
               message: null
            },
            socials: [
               {  name: 'facebook',
                  url: '/'
               },

               {   
                  name: 'instagram',
                  url: '/'
               },

               {   
                  name: 'twitter',    
                  url: '/'
               }
            ],
         }
      },
      computed: {
         user() {
            return this.$store.state.app.user
         },
      },
      methods: {
         SEND_MAIL() {
            
            const templateParams = {
               from_name: this.user.Name,
               reply_to: this.user.email,
               subject: this.helpDeskFormData.subject,
               message: this.helpDeskFormData.message
            };

            this.$refs.helpSubmitBtn.disaled = true
            this.$refs.helpSubmitBtn.value = 'Submitting..'

            emailjs.send('service_hnx93hh', 'template_scmxij6', templateParams, 'HwIvVSX7o9toe8yD9')
               .then((result) => {
                  console.log(result)
                  this.TOAST_PING('Mesage sent')
               },
               (error) => {
                  console.log(result)
                  this.TOAST_PING('Mesage not sent')
               });
           
         },

         TOAST_PING(message) {
            this.$store.commit('SHOW_TOAST', message)

            setTimeout(() => {
               this.$store.commit('HIDE_TOAST')
            }, 1000);
               
            this.RESET_FORM();
         },
         
         RESET_FORM() {
            this.$refs.helpSubmitBtn.disaled = false
            this.$refs.helpSubmitBtn.value = 'Submit'
            this.helpDeskFormData.subject = null;
            this.helpDeskFormData.message = null
         }
      },
   }
</script>


<style lang="scss" scoped>
   @import '@/style/components/helpdesk.scss';
</style>
