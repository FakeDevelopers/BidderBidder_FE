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
      <modal v-if="this.showModal"></modal>
    </nav>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'
import {mapGetters, mapMutations} from 'vuex'
import {firebaseGoogleAuthResult} from "@/firebase"

export default {
  name: "login",
  components: {
    Modal
  },
  methods: {
    ...mapMutations({
      modalOpen: 'setShowModal'
    }),
  },
  computed: {
    ...mapGetters({
      showModal: 'getModalState'
    })
  },
  created() {
    firebaseGoogleAuthResult();
  }

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
