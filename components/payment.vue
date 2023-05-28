<template>
    <div class="payments">
        <div>
            <div class="topbar">
                <!-- HEADING + AVATAR -->
                <dashHeader :user="user">
                    <template #heading>
                        Payment 
                    </template>
                </dashHeader>
            </div>

            <!-- PAYMENT HISTORY -->
            <div class="view-content">
                <div v-if="transactions && transactions.length > 0">
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
                                    @click="paymentDetails.isShown = true, modalDetail = payment"
                                >

                                    <td>
                                        {{payment.date.slice(3, 10)}}, {{ payment.date.slice(10, 16) }}
                                    </td>

                                    <td>
                                        {{payment.paymentType[0].toUpperCase() + payment.paymentType.substring(1)}}
                                    </td>

                                    <td>
                                        {{payment.ref.toUpperCase()}}
                                    </td>

                                    <td>
                                        ₦{{payment.amount / 100}}
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

               <div class="list-else border10" v-else>
                  <primaryBtn class="primary-btn mid-text">
                     No Payments Yet.
                  </primaryBtn>
               </div>
            </div>

        </div>
        
        <!-- PAYMENT DETAILS -->
        <div class="modal_container" v-show="paymentDetails.isShown">
            <div class="payments_receipt border10 modal">
                <div v-if="modalDetail">
                    <h2>
                        Transaction Receipt
                    </h2>

                    <hamCloseCircle @click="paymentDetails.isShown = false" />

                    <p>
                        <span>
                            Transaction Type
                        </span>  <br />

                        {{modalDetail.paymentType.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}} payment
                    </p>

                    <p>
                        <span>
                            User
                        </span>  <br />

                        {{modalDetail.userName}}
                    </p>

                    <p>
                        <span>
                            Email
                        </span>  <br />

                        {{modalDetail.userEmail}}
                    </p>

                    <p>
                        <span>
                            Reference Number
                        </span>  <br />

                        {{modalDetail.ref.toUpperCase()}}
                    </p>

                    <p>
                        <span>
                            Payment Date
                        </span>  <br />

                        {{modalDetail.date.slice(0, 16)}}<br/>
                        {{modalDetail.date.slice(16, 25)}}
                    </p>

                    <p>
                        <span>
                            Description
                        </span>  <br />

                        {{modalDetail.description.replace('payment for', '').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}}
                    </p>

                    <p>
                        <span>
                            Amount
                        </span>  <br />

                        ₦{{modalDetail.amount / 100}}
                    </p>
                   
                    <p>
                        <span>
                            Status
                        </span>  <br />

                        {{ 
                           modalDetail.status === 'success' ? 
                           'Successful' :
                           'Failed'
                        }}
                    </p>

                    <img src="@/assets/imgs/logo.svg" alt="iQuire">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'paymentSection',
        
        data() {
            return {
               paymentDetails:  {
                  isShown: false
               },

               transactions: null,
               
               modalDetail: null,
            }
        },
        
        computed: {
            user() {
                return JSON.parse(localStorage.getItem('UserDetails'))
            },
        },

        methods: {
            HIDE_SIDEBAR() {
               if (window.innerWidth < 1200) {
                    this.$store.commit('HIDE_SIDEBAR')
               } 
            },
            async getTransactions(){
                 this.$store.state.operationProgress = "...";
			this.$store.state.loadingState = "Fetching Transactions";
			this.$store.state.showOperation = true;
                const response = await axios.post("https://us-central1-dulcet-order-370109.cloudfunctions.net/payment/userTransactions", {userId : this.user.uid})
            //    console.log(response)
              this.transactions = response.data
              console.log(this.transactions)
              this.$store.state.operationProgress = null;
					this.$store.state.loadingState = null;
					this.$store.state.showOperation = false;
            }
        },

        mounted() {
            // hide sidebar by default before the component is initialized
            this.HIDE_SIDEBAR();
            this.getTransactions()
        },
    }
</script>
