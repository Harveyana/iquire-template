<template>
    <div class="modal_container">
        <div class="modal border10" :class="modalData.name">
            <div>
               <hamCloseCircle/>

               <slot>
                  iQuire
               </slot>

            </div>

        </div>

        
        <div class="blurBg">
                
        </div>
    </div>
</template>

<script>

   export default {

      name: 'mainModal',
      
      props: {
         modalData: {
            type: Object,
            default: () => {}
         },
      },
   }

</script>

<style lang="scss" scoped>
   @import '@/style/components/mainModal.scss';
</style>

