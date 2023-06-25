<template>
   <div class="details profile border10">
      <!-- AVATAR + NAME -->
      <div>
         <div>
            <img :src="user.profilePic" alt="avatar" />
         </div>

         <h3>
               {{ user.Name }}
         </h3>
      </div>

      <!-- USER DETAILS -->
      <div>
         <div class="field" v-for="item in profileDetails" :key="item.title">
            <p class="small-text">
               {{ item.title }}
            </p>

            <div class="field_noEdit" v-if="!item.editOn">
               <p class="small-text">
                  {{ GET_DESCR(item.id) }}
               </p>

               <button class="small-text" @click="SHOW_EDIT_FIELD(item)">
                  Edit
               </button>
            </div>
            
            <div class="field_edit" v-if="item.editOn">
               <input
                  :type="item.input.type"
                  :name="item.input.name"
                  :id="item.input.id"
                  :placeholder="item.input.placeholder"
                  class="small-text border10 primary-input"
                  v-model="newProfileDetails[item.id]"
               />

               <div>
                  <button class="small-text" @click="item.editOn = false">Close</button>

                  <button class="primary-btn small-text" @click="UPDATE_USER_INFO(item)" :disabled="item.loading">
                     <miniLoader v-if="item.loading" class="loader"/>

                     <span v-else>
                        Save
                     </span>
                  </button>
               </div>
            </div>
         </div>
         

         <div class="field">
               <p class="small-text">Upload Image</p>

               <div class="field_noEdit">
                  <p class="small-text">{{ user.Name }}.jpg</p>

                  <button @click="$refs.newProfilePicture.click()">Edit</button>

                  <input
                     ref="newProfilePicture"
                     type="file"
                     accept="image/png, image/jpeg, image/jpg"
                     @change="ON_IMAGE_CHANGE"
                  />
               </div>
         </div>
      </div>
   </div>
</template>

<script>
   const axios = require('axios');
   import { mapActions } from 'vuex'
   import app from '@/firebase'
   import { getStorage,ref,uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
   import { doc, updateDoc, getFirestore } from "firebase/firestore";

   export default {
      name: "editProfile",

      data() {
         return {
            profileDetails: [
                {
                  title: 'Email Address',
                  id: 'email',
                  editOn: false,
                  loading: false,
                  input: {
                     type: 'email',
                     name: 'email',
                     placeholder: ' ',
                     id: 'email'
                  }
               },

               {
                  title: 'Phone Number',
                  id: 'phoneNumber',
                  editOn: false,
                  loading: false,
                  input: {
                     type: 'number',
                     name: 'phone',
                     id: 'phone',
                     placeholder: '2340000000000',
                  }
               }
            ],

            newProfileDetails: {
               email: 'null',
               phoneNumber: null,
               profilePic: null,
            }
         };
      },

      computed: {
         user() {
            return this.$store.state.app.user
         },
      },

      methods: {
         ...mapActions([
               'CHECK_AUTH_STATE',
         ]),

         GET_DESCR(objectTitle) {
            switch (true) {
               case objectTitle === 'email':
                  return ['', ' ', null, undefined].includes(this.user.email) ? 'Your Email' : this.user.email
                  break

               case objectTitle === 'phoneNumber':
                  return ['', ' ', null, undefined].includes(this.user.phoneNumber) ? 'Your Phone Number (+2340000000000)' : this.user.phoneNumber
                  break
            }
         },

         SHOW_EDIT_FIELD(item) {
            switch (true) {
               case item.id === 'email':
                  item.editOn = true
                  return ['', ' ', null, undefined].includes(this.user.email) ? ' ' : this.newProfileDetails[item.id] = this.user.email
                  break;

               case item.id === 'phoneNumber':
                  item.editOn = true
                  return ['', ' ', null, undefined].includes(this.user.phoneNumber) ? ' ' : this.newProfileDetails[item.id] = +this.user.phoneNumber.toString()
                  break;   
            }
         },

         UPDATE_USER_INFO(item) {
            switch (true) {
               case this.profileDetails.indexOf(item) === 0:
                  this.UPDATE_EMAIL(item);
                  break;

               case this.profileDetails.indexOf(item) === 1:
                  this.UPDATE_PHONE_NUMBER(item);
                  break;
            }
         },

         UPDATE_EMAIL(item) {
            item.loading = true
               //code for backend

               //after resonse comes back
               item.editOn = false;
         },

         async UPDATE_PHONE_NUMBER(item) {
            if(['', ' ', null, undefined].includes(this.newProfileDetails.phoneNumber)) {

            }
            else {
               item.loading = true

               const details = {userId: this.user.uid, phoneNumber: `+${this.newProfileDetails.phoneNumber}`}

               await axios.put('https://us-central1-dulcet-order-370109.cloudfunctions.net/user/phoneNumber', details)
               .then((response)=>{
                  
                     // refreshes user state
                     this.CHECK_AUTH_STATE()
                     item.editOn = false;
                     item.loading = false;
               })
               .catch((error) => {
                  item.editOn = false;
                  item.loading = false;
                  this.$store.commit('SHOW_TOAST', 'Update failed')

                  setTimeout(() => {
                     this.$store.commit('HIDE_TOAST')
                  }, 3000);
               })
            }
         },

         async UPDATE_PROFILE_PHOTO() {
            
            const storage = getStorage();

            const file = this.newProfileDetails.profilePic;

            const metadata = {
               contentType: "image/jpeg",
            }
            
            // UPLOAD FILE & META DATA
            const storageRef = ref(storage, 'images/' + this.user.Name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            // DELETE OLD PROFILE PIC
            if(!this.user.profilePic === ""){
               await deleteObject(storageRef);
            }
            

            // LISTEN FOR CHANGES, ERRORS & COMPLETION
            uploadTask.on("state_changed",
               (snapshot) => {

                  // GET UPLOAD PROGRESS
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");

               },
               (error) => {
                  console.log(error);
               },
               () => {
                  // Upload completed successfully, now we can get the download URL
                  getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                     
                  console.log("File available at", downloadURL);

                  const db = getFirestore();
                  const userRef = doc(db, "users", this.user.uid);

                  await updateDoc(userRef, {
                     profilePic: downloadURL,
                  });

                     // refreshes user state
                     this.CHECK_AUTH_STATE()

                  });
               }
            );

         },

         ON_IMAGE_CHANGE(event) {
            this.newProfileDetails.profilePic = event.target.files[0];

            this.$store.commit('SHOW_TOAST', 'Uploading..')

            this.UPDATE_PROFILE_PHOTO();
         },
      },

      mounted() {

      },

      updated() {
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/components/editProfile.scss';
</style>

