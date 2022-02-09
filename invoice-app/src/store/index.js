import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: null, // create modal 창
    modalActive: null,  // modal 창
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive
    }
  },
  actions: {
  },
  modules: {
  }
})
