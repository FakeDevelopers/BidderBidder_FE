<template>
  <div>
    <div>
      <p>폰번호: </p>
      <input type="text" v-model="phoneNumber">
    </div>
    <div>
      <button @click="recapture">인증</button>
      <button @click="sendCode">발송</button>
      <p>인증번호: </p>
      <input type="number" v-model="code">
      <button @click="loginProcess">확인</button>
    </div>
    <div>

    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { initializeApp } from "firebase/app";

export default {

  created() {

    initializeApp(firebaseConfig)
  },
  name: "FirebaseScreen",
  data() {
    return {
      phoneNumber: '',
      code: ''
    }
  },
  methods: {
    recapture() {

      const auth = getAuth()
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
      }, auth)
    },
    sendCode() {
      const phoneNumber = this.phoneNumber
      const appVerifier = window.recaptchaVerifier;

      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
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
      const code = this.code
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