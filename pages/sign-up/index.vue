<template>
   <div class="signup">
      <!-- SLIDESHOW  -->
     <signUpSlideShow />

      <!-- LOGIN & SIGN UP (SIGNUP) -->
      <div class="">
          <NuxtLink to="/">
            <img src="@/assets/imgs/logo.svg" alt="iQuire" />
         </NuxtLink>


         <!-- USER SELECTOR -->
         <div class="user-selector-container" v-if="signUpProgress === 0">
            <h2 class="large-text">Which one are you?</h2>

            <p class="base-text">
               Existing user?
               <NuxtLink to="/login"> Login </NuxtLink>
            </p>

            <div class="user-selector">
               <div>
                  <!-- STUDENTS -->
                  <div>
                        <input
                           type="radio"
                           name="user-type"
                           id="students"
                           value="user"
                           v-model="user.type"
                        />

                        <label for="students">
                           <svg
                              width="62"
                              height="83"
                              viewBox="0 0 62 83"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M22.602 21.652H19.8467C17.4543 21.652 15.1592 22.6029 13.4664 24.2932C11.776 25.986 10.8252 28.2811 10.8252 30.6735C10.8252 31.6697 11.6335 32.478 12.6291 32.478C13.6253 32.478 14.4337 31.6697 14.4337 30.6735C14.4337 29.2374 15.004 27.8605 16.0195 26.8463C17.0338 25.8308 18.4107 25.2605 19.8467 25.2605H41.4986C42.9347 25.2605 44.3116 25.8308 45.3258 26.8463C46.3413 27.8606 46.9116 29.2375 46.9116 30.6735C46.9116 31.6697 47.72 32.478 48.7162 32.478C49.7118 32.478 50.5201 31.6697 50.5201 30.6735C50.5201 28.2811 49.5692 25.986 47.8789 24.2932C46.1861 22.6028 43.891 21.652 41.4986 21.652H38.7433C40.5133 19.6741 41.4986 17.1065 41.4986 14.438V10.826C41.4986 4.84633 36.6523 0 30.6727 0C24.693 0 19.8467 4.84633 19.8467 10.826V14.438C19.8467 17.1065 20.832 19.6739 22.602 21.652ZM30.6689 21.652H30.6762C32.5888 21.652 34.4235 20.892 35.7768 19.5388C37.13 18.1855 37.89 16.3508 37.89 14.4382V10.8262C37.89 6.84017 34.6585 3.60861 30.6725 3.60861C26.6865 3.60861 23.4549 6.84017 23.4549 10.8262V14.4382C23.4549 16.3508 24.2149 18.1855 25.5682 19.5388C26.9214 20.892 28.7561 21.652 30.6688 21.652H30.6689Z"
                                    fill="#858282"
                              />
                              <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M30.6723 50.5195C27.6843 50.5195 25.2593 52.9446 25.2593 55.9325C25.2593 58.9205 27.6843 61.3455 30.6723 61.3455C33.6603 61.3455 36.0853 58.9205 36.0853 55.9325C36.0853 52.9446 33.6603 50.5195 30.6723 50.5195ZM30.6723 54.1286C31.6685 54.1286 32.4768 54.9369 32.4768 55.9325C32.4768 56.9287 31.6685 57.7371 30.6723 57.7371C29.6761 57.7371 28.8677 56.9287 28.8677 55.9325C28.8677 54.9369 29.6761 54.1286 30.6723 54.1286Z"
                                    fill="#858282"
                              />
                              <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.50889 36.0859H16.2375C17.2331 36.0859 18.0414 36.8943 18.0414 37.8905C18.0414 38.8861 17.2331 39.6944 16.2375 39.6944H4.50889C4.26905 39.6944 4.04009 39.7905 3.87032 39.9578C3.70238 40.1276 3.60693 40.3565 3.60693 40.597V71.2701C3.60693 71.5099 3.70238 71.7395 3.87032 71.9087C4.04009 72.0766 4.26905 72.1721 4.50889 72.1721H56.8356C57.0754 72.1721 57.3044 72.0766 57.4741 71.9087C57.6421 71.7395 57.7375 71.5099 57.7375 71.2701V40.597C57.7375 40.3565 57.6421 40.1275 57.4741 39.9578C57.3044 39.7905 57.0754 39.6944 56.8356 39.6944H23.4544C22.4588 39.6944 21.6505 38.8861 21.6505 37.8905C21.6505 36.8943 22.4588 36.0859 23.4544 36.0859H56.8356C58.0317 36.0859 59.1789 36.5602 60.0254 37.4066C60.8718 38.253 61.346 39.4009 61.346 40.597V71.2701C61.346 72.4663 60.8718 73.6141 60.0254 74.4599C59.179 75.3063 58.0317 75.7812 56.8356 75.7812H40.81L42.6145 79.3896H48.7168C49.7124 79.3896 50.5208 80.198 50.5208 81.1942C50.5208 82.1898 49.7124 82.9981 48.7168 82.9981H12.6292C11.6336 82.9981 10.8252 82.1898 10.8252 81.1942C10.8252 80.198 11.6336 79.3896 12.6292 79.3896H18.7315L20.536 75.7812H4.51043C3.31425 75.7812 2.16707 75.3063 1.32063 74.4599C0.474239 73.6142 0 72.4663 0 71.2701V40.597C0 39.4008 0.474239 38.253 1.32063 37.4066C2.16702 36.5602 3.31432 36.0859 4.51043 36.0859H4.50889ZM36.7735 75.7818L38.578 79.3902H22.7643L24.5688 75.7818H36.7735Z"
                                    fill="#858282"
                              />
                           </svg>

                           <span> Student </span>
                        </label>
                  </div>

                  <!-- CREATORS -->
                  <div>
                        <input
                           type="radio"
                           name="user-type"
                           id="creators"
                           value="creator"
                           v-model="user.type"
                        />

                        <label for="creators">
                           <svg
                              width="67"
                              height="84"
                              viewBox="0 0 67 84"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                    d="M9.92495 71.613H1.259C0.564037 71.613 0 71.049 0 70.354L0.0006205 51.7275C0.487712 47.6105 1.65359 44.4303 3.47542 42.124C7.71905 36.753 18.7131 35.7167 27.7252 37.0607C28.4127 37.1637 28.8867 37.8047 28.7831 38.4934C28.6801 39.1816 28.0447 39.6389 27.3516 39.552C19.3273 38.3439 9.05075 39.1288 5.44966 43.684C3.94185 45.5933 2.92366 48.4277 2.50843 51.8777L2.5165 69.0936H9.92406C10.619 69.0936 11.1831 69.6577 11.1831 70.3526C11.1831 71.0482 10.619 71.6122 9.92406 71.6122L9.92495 71.613Z"
                                    fill="#858282"
                              />
                              <path
                                    d="M33.4951 40.2939C27.6724 40.2939 21.8315 37.8597 17.964 33.4511C12.3634 27.0655 11.4122 17.1088 15.7011 9.77793C20.1743 2.13146 28.8159 -1.48106 37.7254 0.564746C46.6352 2.61357 52.8339 9.64514 53.5171 18.478C54.173 26.9454 48.9669 35.4843 41.1387 38.782C38.7163 39.8027 36.1064 40.2929 33.4948 40.2929L33.4951 40.2939ZM16.7875 10.413L17.8739 11.049C14.1156 17.4725 14.9489 26.1955 19.8564 31.7914C24.7645 37.3852 33.3032 39.351 40.1619 36.4612C47.0203 33.5734 51.581 26.0908 51.0076 18.6702C50.4107 10.9586 44.9756 4.81503 37.1611 3.0175C29.3541 1.21807 21.7795 4.37454 17.8738 11.0487L16.7875 10.413Z"
                                    fill="#858282"
                              />
                              <path
                                    d="M65.4551 71.6112H56.7891C56.0942 71.6112 55.5301 71.0472 55.5301 70.3522C55.5301 69.6573 56.0942 69.0933 56.7891 69.0933H64.196V51.7264C63.7896 48.4271 62.772 45.5928 61.2635 43.6834C57.6641 39.1283 47.3829 38.3435 39.3616 39.5515C38.6716 39.6384 38.0331 39.1811 37.9301 38.4929C37.8271 37.8048 38.3005 37.1638 38.9881 37.0602C48.002 35.7131 58.995 36.7518 63.2378 42.1235C65.0596 44.4299 66.2256 47.6093 66.7032 51.5762L66.7125 70.3536C66.7125 71.048 66.1491 71.612 65.4542 71.612L65.4551 71.6112Z"
                                    fill="#858282"
                              />
                              <path
                                    d="M33.7729 83.092H11.1482C10.4532 83.092 9.88916 82.528 9.88916 81.833L9.88978 49.6123C9.88978 48.9744 10.3657 48.4389 10.998 48.3632C19.1234 47.3766 27.6818 49.5105 34.4869 54.1947C34.8275 54.4305 35.0317 54.8177 35.0317 55.2321V81.8328C35.0317 82.5284 34.4676 83.0924 33.7727 83.0924L33.7729 83.092ZM12.4078 80.5739H32.5132V55.9033C26.6134 52.0239 19.3822 50.1766 12.4078 50.7501V80.5739Z"
                                    fill="#858282"
                              />
                              <path
                                    d="M56.3974 83.0914H33.7727C33.0777 83.0914 32.5137 82.5274 32.5137 81.8324V55.2317C32.5137 54.8172 32.7178 54.43 33.0585 54.1942C39.8622 49.5101 48.4234 47.3774 56.5473 48.3628C57.179 48.4385 57.6555 48.974 57.6555 49.6118V81.8326C57.6562 82.5269 57.0921 83.091 56.3972 83.091L56.3974 83.0914ZM35.0323 80.5733H55.1393L55.1387 50.7496C48.1618 50.1757 40.9329 52.0216 35.0317 55.9028L35.0323 80.5733Z"
                                    fill="#858282"
                              />
                           </svg>

                           <span> Creator </span>
                        </label>
                  </div>
               </div>

               <button class="base-text primary-btn" @click="VERIFY_SELECTION">
                  Proceed
               </button>
            </div>
         </div>

         <!-- SIGN UP FORM -->
         <div class="sign-up" v-if="signUpProgress === 1">
            <h2 class="large-text">Sign Up</h2>

            <p class="base-text">
               Existing user?
               <NuxtLink to="/login"> Login </NuxtLink>
            </p>

            <form class="sign-up-form" @submit.prevent="signUpProgress = 2">
               <label for="firstName" class="small-text"> First Name </label>

               <input
                     type="text"
                     id="firstName"
                     class="mini-text primary-input"
                     placeholder="johndoe@gmail.com"
                     autocomplete="off"
                     v-model="user.firstName"
                     required
               />

               <label for="lastName" class="small-text"> Last Name </label>

               <input
                     type="text"
                     id="lastName"
                     class="mini-text primary-input"
                     placeholder="Doe"
                     autocomplete="off"
                     v-model="user.lastName"
                     required
               />

               <label for="email" class="small-text"> Email Address </label>

               <input
                     type="email"
                     id="email"
                     class="mini-text primary-input"
                     placeholder="johndoe@gmail.com"
                     autocomplete="off"
                     v-model="user.email"
                     required
               />

               <input
                     type="submit"
                     class="base-text primary-btn"
                     value="Create Account"
               />
            </form>

            <!-- THIRD PARTY SIGNUP -->
            <div class="third-party-signup">
               <p class="small-text">or</p>

               <button class="small-text outline-box" @click="AUTH_VIA_GOOGLE()">
                     <img src="@/assets/imgs/login/google_logo.svg" alt="google-logo" />
                     Sign up with Google
               </button>

               <button class="small-text outline-box" @click="AUTH_VIA_FACEBOOK()">
                     <img src="@/assets/imgs/login/fb_logo.svg" alt="facebook-logo" />
                     Sign up with Facebook
               </button>
            </div>
         </div
         >

         <!-- CREATE PASSWORD -->
         <div class="password-creation" v-if="signUpProgress === 2">
            <h2 class="large-text">Set Password</h2>

            <p class="base-text">Create Your Password</p>

            <form class="set-passd-form" @submit.prevent="VALIDATE_PASSWORD">
               <div v-for="dataGroup in passwordInputs" :key="dataGroup.title">
                  <!-- INPUTS -->
                  <label :for="dataGroup.id" class="small-text">
                     {{ dataGroup.label }}
                  </label>

                  <div>
                     <input
                        :type="dataGroup.type"
                        :name="dataGroup.name"
                        :id="dataGroup.id"
                        autocomplete="off"
                        class="mini-text outline-box"
                        v-model="user[dataGroup.model]"
                        @keyup="INIT_PASSWORD_VALIDATION(dataGroup)"
                        @focus="errorMssg = null;" 
                        :ref="dataGroup.ref"
                        required 
                     />

                     <button>
                        <div
                              v-show="dataGroup.isShown"
                              @click="TOGGLE_PASSWORD_VISIBILITY(dataGroup)"
                        >
                              <svg
                                 width="20"
                                 height="20"
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M9.99993 13.6073C8.00827 13.6073 6.3916 11.9906 6.3916 9.99896C6.3916 8.00729 8.00827 6.39062 9.99993 6.39062C11.9916 6.39062 13.6083 8.00729 13.6083 9.99896C13.6083 11.9906 11.9916 13.6073 9.99993 13.6073ZM9.99993 7.64062C8.69993 7.64062 7.6416 8.69896 7.6416 9.99896C7.6416 11.299 8.69993 12.3573 9.99993 12.3573C11.2999 12.3573 12.3583 11.299 12.3583 9.99896C12.3583 8.69896 11.2999 7.64062 9.99993 7.64062Z"
                                    fill="#292D32"
                                 />
                                 <path
                                    d="M9.9999 17.5177C6.86657 17.5177 3.90824 15.6844 1.8749 12.501C0.991569 11.126 0.991569 8.88437 1.8749 7.50104C3.91657 4.31771 6.8749 2.48438 9.9999 2.48438C13.1249 2.48438 16.0832 4.31771 18.1166 7.50104C18.9999 8.87604 18.9999 11.1177 18.1166 12.501C16.0832 15.6844 13.1249 17.5177 9.9999 17.5177ZM9.9999 3.73438C7.30824 3.73438 4.73324 5.35104 2.93324 8.17604C2.30824 9.15104 2.30824 10.851 2.93324 11.826C4.73324 14.651 7.30824 16.2677 9.9999 16.2677C12.6916 16.2677 15.2666 14.651 17.0666 11.826C17.6916 10.851 17.6916 9.15104 17.0666 8.17604C15.2666 5.35104 12.6916 3.73438 9.9999 3.73438Z"
                                    fill="#292D32"
                                 />
                              </svg>
                        </div>

                        <div
                              v-show="!dataGroup.isShown"
                              @click="TOGGLE_PASSWORD_VISIBILITY(dataGroup)"
                        >
                              <svg
                                 width="20"
                                 height="20"
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M7.8916 12.7342C7.73327 12.7342 7.57493 12.6759 7.44993 12.5509C6.7666 11.8676 6.3916 10.9592 6.3916 10.0009C6.3916 8.00924 8.00827 6.39258 9.99993 6.39258C10.9583 6.39258 11.8666 6.76758 12.5499 7.45091C12.6666 7.56758 12.7333 7.72591 12.7333 7.89258C12.7333 8.05924 12.6666 8.21758 12.5499 8.33424L8.33327 12.5509C8.20827 12.6759 8.04994 12.7342 7.8916 12.7342ZM9.99993 7.64258C8.69993 7.64258 7.6416 8.70091 7.6416 10.0009C7.6416 10.4176 7.74993 10.8176 7.94993 11.1676L11.1666 7.95091C10.8166 7.75091 10.4166 7.64258 9.99993 7.64258Z"
                                    fill="#292D32"
                                 />
                                 <path
                                    d="M4.66654 15.4241C4.52487 15.4241 4.37487 15.3741 4.2582 15.2741C3.36654 14.5158 2.56654 13.5824 1.8832 12.4991C0.99987 11.1241 0.99987 8.88242 1.8832 7.49909C3.91654 4.31576 6.87487 2.48242 9.99987 2.48242C11.8332 2.48242 13.6415 3.11576 15.2249 4.30742C15.4999 4.51576 15.5582 4.90742 15.3499 5.18242C15.1415 5.45742 14.7499 5.51575 14.4749 5.30742C13.1082 4.27409 11.5582 3.73242 9.99987 3.73242C7.3082 3.73242 4.7332 5.34909 2.9332 8.17409C2.3082 9.14909 2.3082 10.8491 2.9332 11.8241C3.5582 12.7991 4.27487 13.6408 5.06654 14.3241C5.32487 14.5491 5.3582 14.9408 5.1332 15.2074C5.01654 15.3491 4.84154 15.4241 4.66654 15.4241Z"
                                    fill="#292D32"
                                 />
                                 <path
                                    d="M10.0001 17.5176C8.8918 17.5176 7.80847 17.2926 6.7668 16.8509C6.45013 16.7176 6.30013 16.3509 6.43347 16.0342C6.5668 15.7176 6.93347 15.5676 7.25013 15.7009C8.13347 16.0759 9.05847 16.2676 9.9918 16.2676C12.6835 16.2676 15.2585 14.6509 17.0585 11.8259C17.6835 10.8509 17.6835 9.15089 17.0585 8.17589C16.8001 7.76756 16.5168 7.37589 16.2168 7.00923C16.0001 6.74256 16.0418 6.35089 16.3085 6.12589C16.5751 5.90923 16.9668 5.94256 17.1918 6.21756C17.5168 6.61756 17.8335 7.05089 18.1168 7.50089C19.0001 8.87589 19.0001 11.1176 18.1168 12.5009C16.0835 15.6842 13.1251 17.5176 10.0001 17.5176Z"
                                    fill="#292D32"
                                 />
                                 <path
                                    d="M10.5751 13.5576C10.2835 13.5576 10.0168 13.3493 9.95848 13.0493C9.89181 12.7076 10.1168 12.3826 10.4585 12.3243C11.3751 12.1576 12.1418 11.391 12.3085 10.4743C12.3751 10.1326 12.7001 9.91598 13.0418 9.97431C13.3835 10.041 13.6085 10.366 13.5418 10.7076C13.2751 12.1493 12.1251 13.291 10.6918 13.5576C10.6501 13.5493 10.6168 13.5576 10.5751 13.5576Z"
                                    fill="#292D32"
                                 />
                                 <path
                                    d="M1.66686 18.9592C1.50853 18.9592 1.3502 18.9009 1.2252 18.7759C0.983529 18.5342 0.983529 18.1342 1.2252 17.8926L7.4502 11.6676C7.69186 11.4259 8.09186 11.4259 8.33353 11.6676C8.5752 11.9092 8.5752 12.3092 8.33353 12.5509L2.10853 18.7759C1.98353 18.9009 1.8252 18.9592 1.66686 18.9592Z"
                                    fill="#292D32"
                                 />
                                 <path
                                    d="M12.1083 8.51589C11.9499 8.51589 11.7916 8.45755 11.6666 8.33255C11.4249 8.09089 11.4249 7.69089 11.6666 7.44922L17.8916 1.22422C18.1333 0.982552 18.5333 0.982552 18.7749 1.22422C19.0166 1.46589 19.0166 1.86589 18.7749 2.10755L12.5499 8.33255C12.4249 8.45755 12.2666 8.51589 12.1083 8.51589Z"
                                    fill="#292D32"
                                 />
                              </svg>
                        </div>
                     </button>
                  </div>
               </div>

               <!-- ERROR MSSG -->
               <span class="login-error-mssg small-text" ref="loginErrorMssg" v-if="errorMssg != null">
                  {{ errorMssg }}
               </span>

               <!-- PASSWORD CHECKS -->
               <div>
                     <span
                        class="mini-text condition-null"
                        :class="{ 'condition-pass': passwordChecks.isEightCharcters }"
                        v-if="passwordChecks.isShown"
                     >
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 12 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                                 d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z"
                                 fill="#828282"
                           />
                        </svg>

                        Password must be at least 8 characters long
                     </span>

                     <span
                        class="mini-text condition-null"
                        :class="{
                           'condition-pass': passwordChecks.containsCapitalLetter,
                        }"
                        v-if="passwordChecks.isShown"
                     >
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 12 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                                 d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z"
                                 fill="#828282"
                           />
                        </svg>

                        Must contain at least 1 uppercase letter
                     </span>

                     <span
                        class="mini-text condition-null"
                        :class="{ 'condition-pass': passwordChecks.containsLowerLetter }"
                        v-if="passwordChecks.isShown"
                     >
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 12 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                                 d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z"
                                 fill="#828282"
                           />
                        </svg>

                        Must contain at least 1 lowercase letter.
                     </span>

                     <span
                        class="mini-text condition-null"
                        :class="{ 'condition-pass': passwordChecks.passwordsMatch }"
                        v-if="this.passwordChecks.isShown"
                     >
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 12 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                                 d="M5.99996 0.166992C2.78346 0.166992 0.166626 2.78383 0.166626 6.00033C0.166626 9.21683 2.78346 11.8337 5.99996 11.8337C9.21646 11.8337 11.8333 9.21683 11.8333 6.00033C11.8333 2.78383 9.21646 0.166992 5.99996 0.166992ZM4.83388 8.57458L2.66796 6.41333L3.49163 5.58733L4.83271 6.92608L7.92088 3.83791L8.74571 4.66274L4.83388 8.57458Z"
                                 fill="#828282"
                           />
                        </svg>

                        Passwords
                        <span v-if="!this.passwordChecks.passwordsMatch">do not</span>
                        match
                     </span>
               </div>

               <input
                     type="submit"
                     value="Create Password"
                     class="mini text primary-btn"
                     ref="createPasswordBtn"
               />
            </form>
         </div>

         <!-- EMAIL VERFICATION -->
         <div class="email-verification" v-if="signUpProgress === 3">
            <h2 class="large-text">Verify Your Email</h2>

            <p class="base-text">
               A verification mail has been sent to {{ userDetails.email }}
            </p>

            <img
               src="@/assets/imgs/login/email_verification.svg"
               alt="email-verification"
            />

            <button class="base-text primary-btn" >
               <a
                  :href="`mailto:${userDetails.email}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Open Email</a
               >
            </button>
         </div>
      </div>

   </div>
</template>

<script>
   import axios from "axios";

   export default {
      name: "SignUpPage",
      layout: 'loginSignUp',

      head(){
         return {
            title: 'iQuire | Sign Up'
         }
      },

      data() {
         return {
            signUpProgress: 1,

            user: {
               firstName: null,
               lastName: null,
               email: null,
               password: null,
               password2: null,
               type: 'student',
            },

            passwordInputs: [
               {
                  label: "Password",
                  type: "text",
                  name: "password",
                  id: "password",
                  isShown: true,
                  model: "password",
                  value: "",
                  ref: 'passwordInput1'
               },
               {
                  label: "Confirm Password",
                  type: "text",
                  name: "password-2",
                  id: "password-2",
                  isShown: true,
                  model: "password2",
                  value: "",
                  ref: 'passwordInput2'
               },
            ],

            errorMssg: null,

            passwordChecks: {
               isShown: false,
               isEightCharcters: false,
               containsCapitalLetter: false,
               containsLowerLetter: false,
               passwordsMatch: false,
            },
         };
      },

      computed: {
         
      },

      methods: {
         VERIFY_SELECTION() {
               this.user.type === null
                  ? console.log("No selection made")
                  : (this.signUpProgress = 1);
         },
         TOGGLE_PASSWORD_VISIBILITY(passwordData) {
               if (passwordData.isShown) {
                  passwordData.isShown = false;
                  passwordData.type = "password";
               } else {
                  passwordData.isShown = true;
                  passwordData.type = "text";
               }
         },
         INIT_PASSWORD_VALIDATION() {
               if (this.user.password === "" || this.user.password === " ") {
                  this.passwordChecks.isShown = false;
               } else {
                  this.passwordChecks.isShown = true;
                  this.START_PASSWORD_CHECKS();
               }
         },
         START_PASSWORD_CHECKS() {
               //get password, make into an array and start checking
               var password = this.user.password;
               var passwordArray = Array.from(password);

               this.CHECK_CHARACTER_LENGTH(passwordArray);
               this.CHECK_FOR_UPPERCASE(password);
               this.CHECK_FOR_LOWERCASE(password);
               this.CHECK_PASSWORDS_MATCH();
         },
         CHECK_CHARACTER_LENGTH(passwordArray) {
               switch (true) {
                  case passwordArray.length >= 8:
                     this.passwordChecks.isEightCharcters = true;
                     break;

                  case passwordArray.length < 8:
                     this.passwordChecks.isEightCharcters = false;
                     break;
               }
         },
         CHECK_FOR_UPPERCASE(password) {
               //first check if letter is present
               var letterIsPresent = this.CKECK_FOR_LETTER(password);

               if (letterIsPresent) {
                  /*make array from password*/
                  var passwordArray = Array.from(password);

                  // letterIsPresent? console.log('yes', password) :console.log('no', password);
                  // console.log(passwordArray)

                  /* make new array of only letters in password */
                  var lettersInpassword = passwordArray.filter(
                     (character) => this.CKECK_FOR_LETTER(character) === true
                  );

                  /* check if any of the letters is uppercase */
                  var upperCaseIsPresent = lettersInpassword.some(
                     (character) => character === character.toUpperCase()
                  );

                  upperCaseIsPresent
                     ? (this.passwordChecks.containsCapitalLetter = true)
                     : (this.passwordChecks.containsCapitalLetter = false);
               } else {
                  this.passwordChecks.containsCapitalLetter = false;
               }
         },
         CHECK_FOR_LOWERCASE(password) {
               //first check if letter is present
               var letterIsPresent = this.CKECK_FOR_LETTER(password);

               if (letterIsPresent) {
                  /*make array from password*/
                  var passwordArray = Array.from(password);

                  // letterIsPresent? console.log('yes', password) :console.log('no', password);
                  // console.log(passwordArray)

                  /* make new array of only letters in password */
                  var lettersInpassword = passwordArray.filter(
                     (character) => this.CKECK_FOR_LETTER(character) === true
                  );

                  /* check if any of the letters is uppercase */
                  var upperCaseIsPresent = lettersInpassword.some(
                     (character) => character === character.toLowerCase()
                  );

                  upperCaseIsPresent
                     ? (this.passwordChecks.containsLowerLetter = true)
                     : (this.passwordChecks.containsLowerLetter = false);
               } else {
                  this.passwordChecks.containsLowerLetter = false;
               }
         },
         CKECK_FOR_LETTER(string) {
               return /[a-z]/i.test(string) ? true : false;
         },
         CHECK_PASSWORDS_MATCH() {
               this.user.password === this.user.password2
                  ? (this.passwordChecks.passwordsMatch = true)
                  : (this.passwordChecks.passwordsMatch = false);
         },
         VALIDATE_PASSWORD() {
            if (
               this.passwordChecks.isEightCharcters === true &&
               this.passwordChecks.containsCapitalLetter === true &&
               this.passwordChecks.containsLowerLetter === true &&
               this.passwordChecks.passwordsMatch === true
            ) {
               this.INIT_USER_REGISTERATION();
            } 
            else {
               this.$refs.passwordInput1[0].focus();
            }
         },

         TOGGLE_BUTTON_STATE(button) {
            if (this.$refs[button].diabled === true) {
               this.$refs[button].value = "Create password";
               this.$refs[button].removeAttribute("disabled");
               this.$refs[button].classList.remove("disabled");
            } 
            else {
               this.$refs[button].value = "Setting up..";
               this.$refs[button].diabled = true;
               this.$refs[button].classList.add("disabled");
            }
         },

         async INIT_USER_REGISTERATION() {
            this.errorMssg = null

            const user = {
               firstName: this.user.firstName,
               lastName: this.user.lastName,
               email: this.user.email,
               password: this.user.password,
               type: this.user.type,
               isVerified: this.user.type == "creator" ? false : true,
            }

            this.TOGGLE_BUTTON_STATE("createPasswordBtn");

            await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/register", user)
               .then((response) => {
                  if (response.status === 200) {

                     localStorage.setItem('userIsLoggedIn', true)
                     localStorage.setItem('user',JSON.stringify(response.data))

                     this.signUpProgress = 3;
                  } 
                  else {
                     this.errorMssg = 'Sorry. Something went wrong'
                     this.TOGGLE_BUTTON_STATE("createPasswordBtn")
                  }
               })
               .catch((error) => {
                  console.log(error)
                  this.errorMssg = 'Network or Server Error'
                  this.TOGGLE_BUTTON_STATE("createPasswordBtn");
               })
         },

         async AUTH_VIA_GOOGLE() {
            this.errorMssg = null

            const provider = new this.$fireModule.auth.GoogleAuthProvider();

            ///////////AUTH START - GET_USER_DATA_FROM_AUTH
            await this.$fire.auth.signInWithPopup(provider)
               .then( async(authResponse) => {
                  const authUser = authResponse.user;
                  
                  let user = {
                     Name: authUser.displayName,
                     email: authUser.email,
                     photoUrl: authUser.photoURL,
                     uid: authUser.uid,
                     type: this.user.type,
                     isVerified: this.user.type == "creator" ? false : true,
                  }

                  ////AXIOS_START
                  await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/AuthSignUp", user)
                  .then((response) => {
                     console.log(response);

                     if (response && response.status === 200) {
                        localStorage.setItem('userIsLoggedIn', true)
                        localStorage.setItem('user',JSON.stringify(response.data));

                        this.$router.push(`/sign-up-successful`);
                     } 
                     else {
                        //ERROR_FROM_SERVER
                        console.log('Server Error: ', response)
                        this.errorMssg = 'Something went wrong'
                        this.TOGGLE_BUTTON_STATE("createPasswordBtn")
                     }
                  })
                  
                  .catch((error) => {
                     console.log('Axios Error: ', error)
                     this.errorMssg = 'Sorry. something went wrong'
                     this.TOGGLE_BUTTON_STATE("createPasswordBtn");
                  })
                  ////AXIOS_END 

               })
               .catch((error) => {
                  console.log('Auth or Network Error: ', error)
                  this.errorMssg = 'Authentication Failed'
                  this.TOGGLE_BUTTON_STATE("createPasswordBtn");
               })
            ///////////AUTH END
         },
         async AUTH_VIA_FACEBOOK() {
            this.errorMssg = null

            let provider = new this.$fireModule.auth.FacebookAuthProvider();

            ///////////AUTH START - GET_USER_DATA_FROM_AUTH
            this.$fire.auth.signInWithPopup(provider)
               .then( async (authResponse) => {
                  const authUser = authResponse.user;
                  
                  let user = {
                     Name: authUser.Name,
                     email: authUser.email,
                     photoUrl: authUser.photoURL,
                     uid: authUser.uid,
                     type: this.user.type,
                  };

                  ////AXIOS START - SEND_DATA_TO_SERVER
                  await axios
                     .post("https://us-central1-dulcet-order-370109.cloudfunctions.net/user/AuthSignUp", user)
                     .then((response) => {
                        if (response.status === 200) {
                           localStorage.setItem('userIsLoggedIn', true)
                           localStorage.setItem('user',JSON.stringify(response.data))

                           this.$router.push(`/sign-up-successful`);
                        }
                        else {
                           //ERROR_FROM_SERVER
                           console.log('Server: ', response)
                           this.errorMssg = 'Something went wrong'
                           this.TOGGLE_BUTTON_STATE("createPasswordBtn")
                        }
                     })
                     .catch((error) => {
                        //ERROR_FROM_AXIOS
                        console.log('Axios Error: ', error);
                        this.errorMssg = 'Sorry. Something went wrong'
                        this.TOGGLE_BUTTON_STATE("createPasswordBtn")
                     });
                  ////AXIOS END

               })
               
               .catch((error) => {
                  //ERROR_MSG_FROM_AUTH
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log('Auth: ', errorMessage, errorCode);

                  this.errorMssg = 'Authentication failed'
                  this.TOGGLE_BUTTON_STATE("createPasswordBtn")
               });
            ///////////AUTH END
         },
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
   @import "@/style/pages/signup.scss";
</style>