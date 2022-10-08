import {createStore} from 'vuex'
import {fetchList} from '../api/index'

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(localStorage.getItem(localStorage.key(i)));
            }
        }
        return arr;
    },
};

export default createStore({
    state: {
        showLoginPopup: false,
        showModal: false,
        searchModal: false,
        searchingCheck: false,
        autoWordsCheck: false,
        resentCheck: false,
        popularCheck: false,
        productList: [],
        accountData: [],
        listSize: 15,
        startPoint: 1,
        currentPage: 1,
        searchHistory: storage.fetch(),
        searchPopularWords: ["엑조디아", "일단", "대충", "테스트", "월드플리퍼", "블루 아카이브"],
        autoCompleteList: ["test1", "test2", "test", "photo", "photo2", "cat"]
    },
    mutations: {
        setShowLoginPopup(state, value) {
            this.state.showLoginPopup = value
        },
        setAccountData(state, value) {
            console.log("SET_ACCOUNT_DATA");
            this.state.accountData = value;
        },
        setSearchModal(state, value) {
            state.searchModal = value
        },
        SET_LIST(state, list) {
            state.productList = list
        },
        removeList(state, list) {
            state.searchHistory.splice(list.index, 1);
            localStorage.removeItem(list.searchWords);
        },
        setSearchingCheck(state, value) {
            state.searchingCheck = value
        },
        setAutoWordsCheck(state, value) {
            state.autoWordsCheck = value
        },
        clearHistory() {
            this.state.searchHistory = []
            localStorage.clear()
        },
        setListSize(state, value) {
            state.listSize = value
        },
        setStartPoint(state, value) {
            state.startPoint = value
        },
        setCurrentPage(state, value) {
            state.currentPage = value
        },
        setResentCheck(state, value) {
            state.resentCheck = value
        },
        setPopularCheck(state, value) {
            state.popularCheck = value
        }, addSearchWord(state, words) {
            localStorage.setItem(words, words);
            state.searchHistory.push(words)
        }
    },
    getters: {
        getModalState(state) {
            return state.showLoginPopup
        },
        getSearchModalState(state) {
            return state.searchModal
        },
        getSearchingState(state) {
            return state.searchingCheck
        },
        getProductList(state) {
            return state.productList
        },
        getAccountData(state) {
            return state.accountData
        },
        getPopularSearch(state) {
            return state.searchPopularWords
        },
        getSearchWords(state) {
            return state.searchHistory
        },
        getAutoCompleted(state) {
            return state.autoCompleteList
        },
        getAutoWordsState(state) {
            return state.autoWordsCheck
        },
        getListSize(state) {
            return state.listSize
        },
        getStartPoint(state) {
            return state.startPoint
        },
        getCurrentPage(state) {
            return state.currentPage
        },
        getResentCheck(state) {
            return state.resentCheck
        },
        getPopularCheck(state) {
            return state.popularCheck
        }
    },
    actions: {
        async FETCH_LIST({commit}, pageInfo) {
            const response = await fetchList(pageInfo.listSize, pageInfo.currentPage, pageInfo.searchWord, pageInfo.searchType)
            commit('SET_LIST', response.data)
            return response
        },
    },
    modules: {}
})
