import firebase from 'firebase'

export default () => {
  let firebaseConfig = {
    apiKey: 'AIzaSyAAoCbOoe0oCiLFFMs5y3IawBY9SBALO3w',
    authDomain: 'real-time-chat-a42bb.firebaseapp.com',
    databaseURL: 'https://real-time-chat-a42bb.firebaseio.com',
    projectId: 'real-time-chat-a42bb',
    storageBucket: '',
    messagingSenderId: '442031857043',
    appId: '1:442031857043:web:04aeaf84ccdef2d1'
  }
  firebase.initializeApp(firebaseConfig)
}
