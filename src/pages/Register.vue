<template>
  <q-page padding>
 <div class="card q-gutter-lg">
      <h4>Login</h4>
      <q-input
        v-model="user.email"
        label="Email"
        class="inputs"
      />
      <q-input
        v-model="user.password"
        type="password"
        label="Password"
        class="inputs"
      />
      <q-btn
        class="btn"
        flat
        color="green"
        @click="signIn"
      >
        Login
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .card
    box-shadow 9px 7px 22px -2px rgba(0,0,0,0.75)
    width 350px
    background-color #fff
    margin 0
    padding 10px 25px
    display flex
    flex-direction column
    justify-content center
    align-items center
    border-radius 5px
    .logo
      transform rotate(12deg)
      height 120px
      margin 0px
      padding 0px
    .inputs
      width 100%
      margin 6px 0
      padding 0px
    .btn
      width 100%
      margin 10px
      padding 0px
</style>
