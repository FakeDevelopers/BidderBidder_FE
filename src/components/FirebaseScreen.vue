<template>
  <div>
    <div>
      <p>폰번호: </p>
      <input type="text" v-model="phoneNumber">
    </div>
    <div>
      <button @click="sendCode">발송</button>
      <p>인증번호: </p>
      <input type="number" v-model="configCode">
      <button @click="loginProcess">확인</button>
    </div>
    <div id="recaptcha-container">
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { app } from '@/firebase'
export default {
  name: "FirebaseScreen",
  data() {
    return {
      phoneNumber: '',
      configCode: '',
      authData:'',
      appVerifier:''
    }
  },
  mounted() {
    this.authData = getAuth(app)
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
        console.log("페이지가 만료되었습니다.")
      }
    }, this.authData)
  },
  methods: {
    sendCode() {
      const phoneNumber = `+82${this.phoneNumber}`
      this.appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(this.authData, phoneNumber, this.appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
          }).catch((error) => {
            console.log(error)
          });
    },
    loginProcess(){
      const code = this.configCode
      window.confirmationResult.confirm(code).then((result) => {
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