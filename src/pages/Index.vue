<template>
  <q-page class="container q-pa-md">
     <div style="width: 100%; max-width: 500px">

      <q-chat-message
        v-for="msg in messages" :key="msg.id"
        :text="[msg.message]"
        :sent="msg.sent"
      />
      <div class="input-botton">
        <q-input
          v-model="message"
          class="input-send"
          filled />
        <q-btn
          class="btn-send"
          round color="primary"
          icon="send" />
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
  .input-botton
    width 100%
    max-width 500px
    position fixed
    bottom 18px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .input-send
      flex 1
    .btn-send
      margin 0px 18px
</style>

<script>
export default {
  name: 'chat', 
  data () {
    return {
      message: '',
      messages: [
        { message: 'Olá', author: 'Mário', sent: false },
        { message: 'Olá', author: 'Mário', sent: true },
        { message: 'Olá', author: 'Mário', sent: false }
      ]
    }
  },
  methods: {
    sendMsg () {
      db.collection('chat').add({
        message: this.message
      })
    }
  }
}
</script>
