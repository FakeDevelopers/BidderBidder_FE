<template>
  <div>
    <nav class="header" @click="setSearchModal(false)">
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
import Modal from './common/LoginPopup.vue'
import {mapGetters, mapMutations} from 'vuex'


export default {
  name: "login",
  components: {
    Modal
  },
  methods: {
    ...mapMutations({
      modalOpen: 'setShowLoginPopup',
      setSearchModal: 'setSearchModal'
    }),
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
