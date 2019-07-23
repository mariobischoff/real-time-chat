<template>
  <q-page padding class="container">
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      user: {
        email: 'mariobischoffneto@gmail.com',
        password: 'owna3562'
      }
    }
  },
  methods: {
    ...mapActions(['auth/signIn']),
    signIn () {
      this['auth/signIn'](this.user)
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
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
    h4
      display none
      font-family Robot
      margin 8px 0px
      padding 0px
      text-align center
      font-weight 200
</style>
