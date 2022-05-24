<template>
  <div>
    <nav class="header">
      <router-link to="/products"> 상품리스트 </router-link>
      <button @click="modalOpen(true)" class="LoginBtn">로그인</button>
      <modal v-if="this.showModal">
        <template v-slot:header>
          <h3>로그인</h3>
        </template>
        <template v-slot:body>
          <form v-on:submit.prevent="submitForm">
            <div>
              <label for="username">id: </label>
              <input id="username" type="text" v-model="email">
            </div><br>
            <div>
              <label for="password">pw:</label>
              <input id="password" type="password" v-model="passwd">
            </div><br><br>
            <button type="submit">로그인</button>
          </form>
        </template>
        <template v-slot:footer>
          <label><input type="checkbox" value="true">자동로그인 하시겠습니까?</label>
        </template>
      </modal>
    </nav>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios'


export default {
  name: "login",
  data() {
    return{
      email: '',
      passwd: '',
    }
  },
  components: {
    Modal
  },
  methods: {
    ...mapMutations({
      modalOpen : 'setShowModal'
    }),
    submitForm: async function() {

      console.log(this.email, this.passwd)

      const url = '/user/login'
      const form = new FormData()

      form.append('email', this.email)
      form.append('passwd', this.passwd)

      try {
        const response = await axios.post(url,form)
        console.log(response)
      } catch(err){
        console.log(err)
      }
    },



  },
  computed: {
    ...mapGetters({
      showModal: 'getModalState'
    })
  },

}

</script>

<style scoped>
.header{
  display: flex;
  font-size: 15px;
  box-shadow: 0 5px 5px -5px rgb(0 0 0 / 20%);
  align-items: center;
}
.LoginBtn {
  margin-left: auto;
  margin-right: 16px;
  width: 80px;
  height: 30px;
}

</style>
