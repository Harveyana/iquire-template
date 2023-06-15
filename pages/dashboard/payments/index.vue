<template>
   <div>
      <div class="payments">
        <div>
            <div class="topbar">
                <!-- HEADING + AVATAR -->
                <dashHeader :user="user">
                    <template #heading>
                        Payments
                    </template>
                </dashHeader>
            </div>

            <!-- PAYMENT HISTORY -->
            <div class="view-content">
               
               <defaultLoader class="loader" v-if="transactions === null"/>  

               <div class="list-else border10" v-else-if="transactions != null && transactions.length === 0">
                  <primaryBtn class="primary-btn mid-text">
                     No Payments Yet.
                  </primaryBtn>
               </div>

            <div v-else-if="transactions != null && transactions.length != 0">
               <table 
                  class="payments_history " 
                  cellspacing="0" 
                  cellpadding="0"
               >
                  <thead>
                     <tr class="payments_row">
                        <td>Date</td>
                        <td>Transaction Type</td>
                        <td>Reference Number</td>
                        <td>Amount</td>
                        <td>Status</td>
                        <td>Action</td>
                     </tr>
                  </thead>

                  <tbody>
                     <tr 
                        v-for="payment in transactions"
                        :key="payment.ref"
                        class="payments_row small-text"
                        @click="modalData.isShown = true, modalData.detail = payment"
                     >

                        <td>
                              {{ payment.date.substr(4, 11) || 'pending' }}
                        </td>

                        <td>
                              {{payment.paymentType[0].toUpperCase() + payment.paymentType.substring(1)}}
                        </td>

                        <td>
                              {{payment.ref.toUpperCase()}}
                        </td>

                        <td>
                              ₦{{(payment.amount / 100).toLocaleString()}}
                        </td>

                        <td>
                              Active
                        </td>

                        <td>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                        </td>
                        
                     </tr>
                  </tbody>

                  <tfoot>
                        
                  </tfoot>
               </table>
            </div>
   
            </div>

        </div>
        
        <!-- PAYMENT DETAILS -->
        <mainModal 
            v-if="modalData.detail" class="modal_container" 
            v-show="modalData.isShown" :modalData="modalData"
            
         >
            <h2>
               Transaction Receipt
            </h2>

            <p>
               <span>
                  Transaction Type
               </span>  <br />

               {{modalData.detail.paymentType.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}} payment
            </p>

            <p>
               <span>
                  User
               </span>  <br />

               {{modalData.detail.userName}}
            </p>

            <p>
               <span>
                  Email
               </span>  <br />

               {{modalData.detail.userEmail}}
            </p>

            <p>
               <span>
                  Reference Number
               </span>  <br />

               {{modalData.detail.ref.toUpperCase()}}
            </p>

            <p>
               <span>
                  Payment Date
               </span>  <br />

               {{modalData.detail.date.slice(0, 16)}}<br/>
               {{modalData.detail.date.slice(16, 25)}}
            </p>

            <p>
               <span>
                  Description
               </span>  <br />

               {{modalData.detail.description.replace('payment for', '').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
            </p>

            <p>
               <span>
                  Amount
               </span>  <br />

               ₦{{(modalData.detail.amount / 100).toLocaleString()}}
            </p>
            
            <p>
               <span>
                  Status
               </span>  <br />

               {{ 
                  modalData.detail.status === 'success' ? 
                  'Successful' :
                  'Failed'
               }}
            </p>

            <img src="@/assets/imgs/logo.svg" alt="iQuire">
        </mainModal>
    </div>
   </div>
</template>

<script>
   export default {
      name: 'PaymentsPage',

      head() {
         return {
            title: 'iQuire | Payments'
         }
      },

      data() {
         return {
            modalData: {
               isShown: false,
               detail: null,
               name: 'receipt'
            }
         
         }
      },

      computed: {
         transactions() {
            return this.$store.state.app.userTransactions 
         },

         user() {
            return this.$store.state.app.user
         }
      },

      methods: {
         TOGGLE_MODAL() {
            this.modalData.isShown = false
         }
      },

      created() {
         this.$nuxt.$on('TOGGLE_MODAL', ($event) => this.TOGGLE_MODAL($event))
      },

      mounted() {
         this.$store.commit('HIDE_SIDEBAR');
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/pages/payments.scss';
</style>