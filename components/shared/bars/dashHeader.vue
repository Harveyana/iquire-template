<template>
    <header class="header">
        <div v-show="notDesktop">
            <img 
               :src="user.profilePic"
               alt="Avatar"  
            >
        </div>

        <h1 class ="mid-text-2">
            <slot name = "heading">
               Dashboard
            </slot>
        </h1>

        <div>
            <img 
               v-if="user.Name"
               :src="user.profilePic" 
               alt="Avatar"
               v-show="!notDesktop"
               style="display: flex; align-items: center;"
            >

            <span>
                {{user.Name}}
            </span>

            <hamOpen v-show="notDesktop" @click="this.$store.commit('SHOW_SIDEABAR')" />
        </div>
    </header>
</template>

<script>
   export default {
      name: 'dashHeader',

      computed: {
         notDesktop() {
            if(process.client) {
               return window.innerWidth < 1200 ? true : false
            }
         },
         user() {
            return this.$store.state.app.user
         },
      },
   }
</script>

<style lang="scss" scoped>
   @import '@/style/components/dashHeader.scss';
</style>

