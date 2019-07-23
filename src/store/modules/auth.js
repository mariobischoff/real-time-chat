import firebase from 'firebase/app'

const state = {
  user: null,
  status: null,
  error: null
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  removeUser (state) {
    state.user = null
  },
  setStatus (state, payload) {
    state.status = payload
  },
  setError (state, payload) {
    state.error = payload
  }
}

const actions = {
  signUp ({ commit }, payload) {
    commit('setStatus', 'loading')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('setUser', response.user.uid)
        commit('setStatus', 'success')
        commit('setError', null)
      })
      .catch((error) => {
        commit('setStatus', 'failure')
        commit('setError', error.message)
      })
  },
  signIn ({ commit }, payload) {
    commit('setStatus', 'loading')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('setUser', response.user.uid)
        commit('setStatus', 'success')
        commit('setError', null)
      })
      .catch((error) => {
        commit('setStatus', 'failure')
        commit('setError', error.message)
      })
  }
}

const getters = {
  status (state) {
    return state.status
  },
  user (state) {
    return state.user
  },
  error (state) {
    return state.error
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
