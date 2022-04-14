import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false
  },
  mutations: {
    setShowModal(state, value){
      if (value){
        this.state.showModal = true;
      }
      else {
        this.state.showModal = false;
      }
    }
  },
  getters:{
    getModalState(state) {
      return state.showModal;
    }
  },
  actions: {
  },
  modules: {
  }
})
