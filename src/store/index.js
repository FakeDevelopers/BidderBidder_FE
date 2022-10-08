import {createStore} from 'vuex'
import {fetchList} from '../api/index'

export default createStore({
    state: {
        showLoginPopup: false,
        productList: [],
    },
    mutations: {
        setShowLoginPopup(state, value) {
            this.state.showLoginPopup = value
        },
        setList(state, list) {
            state.productList = list
        },
    },
    getters: {
        getModalState(state) {
            return state.showLoginPopup
        },
        getProductList(state) {
            return state.productList
        }
    },
    actions: {
        async FETCH_LIST({commit}, pageInfo) {
            const response = await fetchList(pageInfo.listSize, pageInfo.currentPage)
            commit('SET_LIST', response.data)
            return response
        }
    },
    modules: {}
})
