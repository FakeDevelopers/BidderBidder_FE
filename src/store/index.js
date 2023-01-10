import {createStore} from 'vuex'
import {fetchList} from '../api/index'
import {getAuthTokenFromCookie} from "@/utils/cookies";

export default createStore({
    state: {
        showModal: false,
        productList: [],
        accountData: [],
        authToken: getAuthTokenFromCookie() || '',
    },
    mutations: {
        setShowModal(state, value) {
            this.state.showModal = value
            if (value) {
                document.body.style.overflowY = "hidden"
            } else {
                document.body.style.overflowY = "auto"
            }
        },
        setAccountData(state, value) {
            console.log("SET_ACCOUNT_DATA");
            this.state.accountData = value;
        },
        SET_LIST(state, list) {
            state.productList = list
        },
    },
    getters: {
        getModalState(state) {
            return state.showModal
        },
        getProductList(state) {
            return state.productList
        },
        getAccountData(state) {
            return state.accountData
        }
    },
    actions: {
        async FETCH_LIST({commit}, pageInfo) {
            const response = await fetchList(pageInfo.listSize, pageInfo.currentPage)
            commit('SET_LIST', response.data)
            return response
        },
    },
    modules: {}
})
