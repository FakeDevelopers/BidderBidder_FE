<template>
  <div>
    <nav class="header">
      <router-link to="/products"> {{ $t('productList') }}</router-link>
      <button @click="modalOpen(true)" class="LoginBtn">{{ $t('login') }}</button>
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
      <modal v-if="this.showModal">
        <template v-slot:header>
          <h3>{{ $t('login') }}</h3>
        </template>
        <template v-slot:body>
          <form v-on:submit.prevent="submitForm">
            <div>
              <label for="username">id: </label>
              <input id="username" type="text" v-model="email">
            </div>
            <br>
            <div>
              <label for="password">pw:</label>
              <input id="password" type="password" v-model="passwd">
            </div>
            <br><br>
            <button type="submit">{{ $t('login') }}</button>
          </form>
        </template>
        <template v-slot:footer>
          <label><input type="checkbox" value="true">{{ $t('automaticLogin') }}</label>
        </template>
      </modal>
    </nav>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'
import {mapGetters, mapMutations} from 'vuex'
import {submitAccount} from "@/api";


export default {
  name: "login",
  data() {
    return {
      email: '',
      passwd: '',
    }
  },
  components: {
    Modal
  },
  methods: {
    ...mapMutations({
      modalOpen: 'setShowModal'
    }),
    submitForm: function () {
      submitAccount(this.email, this.passwd)
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
.header {
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
