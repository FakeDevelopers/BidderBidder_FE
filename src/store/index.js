import {createStore} from 'vuex'
import {fetchList} from '../api/index'
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length>0) {
            for(let i = 0; i< localStorage.length ; i++){
                arr.push(localStorage.getItem(localStorage.key(i)));
            }
        }
        return arr;
    },
};

export default createStore({
    state: {
        showModal: false,
        searchModal: false,
        searchingCheck: false,
        autoWordsCheck: false,
        resentCheck: false,
        popularCheck: false,
        productList: [],
        listSize: 15,
        startPoint: 1,
        currentPage: 1,
        searchHistory: storage.fetch(),
        searchPopularWords: ["엑조디아","일단", "대충","테스트", "월드플리퍼","블루 아카이브"],
        autoCompleteList:["가방","가디언","가이오가","가지","가자미","가상"]
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
        setSearchModal(state, value) {
            this.state.searchModal = value
        },
        SET_LIST(state, list) {
            state.productList = list
        },
        removeList(state,list) {
            state.searchHistory.splice(list.index,1);
            localStorage.removeItem(list.searchWords);
        },
        setSearchingCheck(state, value) {
            this.state.searchingCheck = value
        },
        setAutoWordsCheck(state, value) {
            this.state.autoWordsCheck=value
        },
        clearHistory() {
            this.state.searchHistory = []
            localStorage.clear()
        },
        setListSize(state, value) {
            this.state.listSize = value
        },
        setStartPoint(state, value) {
            this.state.startPoint = value
        },
        setCurrentPage(state, value) {
            this.state.currentPage = value
        },
        setResentCheck(state, value) {
            this.state.resentCheck = value
        },
        setPopularCheck(state, value) {
            this.state.popularCheck = value
        }

    },
    getters: {
        getModalState(state) {
            return state.showModal
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
