import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false

  },
  mutations: {
    setShowModal(state, value){
      this.state.showModal = value
    }
  },
  getters:{
    getModalState(state) {
      return state.showModal
    }
  },
  actions: {
  },
  modules: {
  }
})
