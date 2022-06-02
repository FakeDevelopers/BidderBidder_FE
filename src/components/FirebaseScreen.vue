<template>
  <div>
    <div>
      <p>폰번호: </p>
      <input type="text" v-model="phoneNumber">
    </div>
    <div>
      <button @click="sendCode">발송</button>
      <p>인증번호: </p>
      <input type="number" v-model="certificationCode">
      <button @click="checkCode">확인</button>
    </div>
    <div id="recaptcha-container">
    </div>
  </div>
</template>

<script>
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"
import {firebaseInit} from '@/firebase'

export default {
  name: "FirebaseScreen",
  data() {
    return {
      phoneNumber: '',
      certificationCode: '',
      authData: '',
    }
  },
  mounted() {
    this.authData = getAuth(firebaseInit)
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        console.log(response)

      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, this.authData)
  },
  methods: {
    sendCode() {
      const phoneNumber = `+82${this.phoneNumber}`

      signInWithPhoneNumber(this.authData, phoneNumber, window.recaptchaVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
          }).catch((error) => {
        console.log(error)
      });
    },
    checkCode() {
      window.confirmationResult.confirm(this.certificationCode).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error)
      });
    }
  }
}


</script>

<style scoped>

</style>
