<template>
  <NuxtLink :to="link">
    <slot>
      Link to somewhere
    </slot>
  </NuxtLink>
</template>

<script>
  export default {
    name: 'linkBtn',

    props: {
      link: {
        type: String,
        default: '/'
      },
    },
  }
</script>
