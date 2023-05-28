
<template>
    <button @click="$nuxt.$emit('TOGGLE_MODAL')">
        <img src="@/assets/imgs/payment/close-circle.svg" alt="close">
    </button>
</template>

<script>
    export default {
        name: 'hamCloseCircle'
    }
</script>

<style lang="scss" scoped>
    @import '@/style/partials/mixins';
    
    button {
        @include hoverPointer;
        @include resetDefault;
        position: absolute;
        top: 0;
        right: 0;
    }
</style>