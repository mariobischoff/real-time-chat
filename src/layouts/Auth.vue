<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container class="container" >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .container
    background-color $primary
    display flex
    justify-content center
    align-items center
</style>
