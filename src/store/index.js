import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false
  },
  mutations: {
    modalOpen(state) {
      state.showModal = false;
      if(!this.state.showModal){
        this.state.showModal = true;
      }
    },
    modalClose(state) {
      state.showModal = true;
      if(this.state.showModal) {
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
