<template>
  <div>
    <button id="login-button" @click="modalOpen">로그인</button>
    <modal v-if="this.showModal">
      <template v-slot:header>
        <h3>로그인</h3>
      </template>
      <template v-slot:body>
        <form>
          <div>
            <label for="username">id: </label>
            <input id="username" type="text" v-model="username">
          </div><br>
          <div>
            <label for="password">pw:</label>
            <input id="password" type="password" v-model="password"><br><br>
          </div>
          <button type="submit">로그인</button>
        </form>
      </template>
      <template v-slot:footer>
        <label><input type="checkbox" name="TF" value="true">자동로그인 하시겠습니까?</label>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "login",
  data() {
    return{
      username: '',
      password: '',
    }
  },
  components: {
    Modal
  },
  methods: {
    ...mapMutations({
      modalOpen : 'modalOpen'
    })
  },
  computed: {
    ...mapGetters({
      showModal: 'getModalState'
    })
  }
}

</script>

<style scoped>

</style>