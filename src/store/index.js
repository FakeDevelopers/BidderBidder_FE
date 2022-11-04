import {createStore} from 'vuex'
import {fetchList} from '../api/index'


export default createStore({
    state: {
        showLoginPopup: false,
        searchModal: false,
        searchingCheck: false,
        autoWordsCheck: false,
        resentCheck: false,
        popularCheck: false,
        productList: [],
        listSize: 15,
        startPoint: 1,
        currentPage: 1,
        searchHistory: [],
        searchPopularWords: ["엑조디아", "일단", "대충", "테스트", "월드플리퍼", "블루 아카이브"],
        autoCompleteList: ["test1", "test2", "test", "photo", "photo2", "cat"]
    },
    mutations: {
        setShowLoginPopup(state, value) {
            state.showLoginPopup = value
        },
        setSearchModal(state, value) {
            state.searchModal = value
        },
        SET_LIST(state, list) {
            state.productList = list
        },
        removeWords(state, list) {
            state.searchHistory.splice(list.index, 1);
            localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
        },
        setSearchingCheck(state, value) {
            state.searchingCheck = value
        },
        setAutoWordsCheck(state, value) {
            state.autoWordsCheck = value
        },
        clearHistory(state) {
            state.searchHistory = []
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
        },
        addSearchWord(state, words) {
            let searchHistoryWords = localStorage.getItem("searchHistory")

            let searchHistory = JSON.parse(searchHistoryWords)
            if (searchHistory) {
                if (searchHistory.includes(words)) {
                    let idx = searchHistory.indexOf(words)
                    state.searchHistory.splice(idx, 1)

                    state.searchHistory.unshift(words)
                    localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
                } else {
                    state.searchHistory.unshift(words)
                    localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
                }
            } else {
                state.searchHistory = []
                state.searchHistory.unshift(words)
                localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
            }
        },
        setSearchHistory(state, value) {
            state.searchHistory = value
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
        }
    },
    modules: {}
})
