<template>
  <div class="container" @click="setSearchModal(false)">
    <div class="search-box" @click="$event.stopPropagation()">
      <input type="search" placeholder="검색어를 입력하세요" class="search-input" :value="searchText"
             @keyup.enter="searchResult(this.searchText)"
             @focus="searchingStateCheck" @input="fixSearchText" ref="cursor">
      <button @click="searchResult(this.searchText)"> 검색</button>
    </div>
    <div class="modal-bg" v-if="getSearchModalState" @click="$event.stopPropagation()" @drop="setSearchModal(true)"
         @dragenter.prevent @dragover.prevent>
      <div class="white-bg" :style="{width: this.searchBarWidth+'px'}">
        <div class="search-form" v-if="!getSearchingState">
          <h4>최근검색어</h4>
          <ul>
            <li v-for="(searchWords,index) in this.getSearchWords" v-bind:key="index"
                class="search-list">
              <div class="words" @click="searchResult(searchWords)" @dragstart="false">
                {{ searchWords }}
              </div>
              <span class="removeBtn" @click="removeOneWords(searchWords,index)" @dragstart="false">
                <em class="fa-solid fa-xmark"></em>
              </span>
            </li>
            <li @click="clearAllHistory" v-if="this.showButton">
              기록 모두 삭제
            </li>
          </ul>
        </div>
        <div class="search-form" v-if="!getSearchingState">
          <h4>인기검색어</h4>
          <ul>
            <li v-for="searchList in getPopularSearch" v-bind:key="searchList"
                @click="searchResult(searchList)" class="search-list" @dragstart="false">
              {{ searchList }}
            </li>
          </ul>
        </div>
        <div class="search-form" v-else-if="getSearchingState">
          <ul>
            <li v-for="autoCompleteWords in getAutoCompleted" v-bind:key="autoCompleteWords"
                @click="searchResult(autoCompleteWords)"
                class="search-list" @dragstart="false">
              {{ autoCompleteWords }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  data: function () {
    return {
      searchText: '',
      modalWidth: '',
      showButton: false
    }
  },
  created() {

    let searchHistoryWords = localStorage.getItem('searchHistory')

    let searchHistory = JSON.parse(searchHistoryWords)

    this.setSearchHistory(searchHistory)

    if (searchHistory) {
      this.showButtonControl(true)
    }

  },
  computed: {
    ...mapGetters({
      getSearchModalState: 'getSearchModalState',
      getSearchWords: 'getSearchWords',
      getSearchingState: 'getSearchingState',
      getPopularSearch: 'getPopularSearch',
      getAutoCompleted: 'getAutoCompleted',
      getListSize: 'getListSize',
      getCurrentPage: 'getCurrentPage',
      getResentCheck: 'getResentCheck',
      getPopularCheck: 'getPopularCheck'
    }),
    searchBarWidth() {
      return document.querySelector('.search-box').scrollWidth
    }
  },
  watch: {
    searchText() {
      this.modalChange()
    }
  },
  methods: {
    ...mapMutations({
      setSearchModal: 'setSearchModal',
      setSearchingCheck: 'setSearchingCheck',
      removeWords: 'removeWords',
      clearHistory: 'clearHistory',
      setStartPoint: 'setStartPoint',
      setResentCheck: 'setResentCheck',
      setPopularCheck: 'setPopularCheck',
      setSearchHistory: 'setSearchHistory'
    }),
    addKeyword(words) {
      this.searchText = words
      if (this.searchText !== "") {
        this.$store.commit('addSearchWord', this.searchText)
      }
    },
    searchResult(words) {
      this.setStartPoint(1)
      this.$router.push(/products/ + this.getCurrentPage)
      this.$store.dispatch("FETCH_LIST", {
        listSize: this.getListSize,
        currentPage: this.getCurrentPage,
        searchWord: words,
        searchType: 0
      })
      this.addKeyword(words)
      this.setSearchModal(false)
      this.showButtonControl(true)
    },
    modalChange() {
      if (this.searchText === '') {
        this.setSearchingCheck(false)
      } else {
        this.setSearchingCheck(true)
      }
    },
    fixSearchText(e) {
      this.searchText = e.target.value
      this.setSearchModal(true)
    },
    searchingStateCheck() {
      this.setSearchModal(true)
      this.modalChange()
    },
    showButtonControl(value) {
      this.showButton = value
    },
    clearAllHistory() {
      this.clearHistory()
      this.showButtonControl(false)
    },
    removeOneWords(searchWords,index) {
      this. removeWords({searchWords,index})

      if(this.getSearchWords.length){
        this.showButtonControl(true)
      }
      else{
        this.clearAllHistory()
      }
    }

  }
}
</script>

<style scoped lang="scss">
@import "../css/variables";

$width: 582px;

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.white-bg {
  height: 300px;
  background: whitesmoke;
  border-radius: 8px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
}

.modal-bg {
  display: flex;
  justify-content: center;
  margin-left: 75px;
}

.search {
  &-box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: $width;
    height: 50px;
    border: 3px solid #38BBF3;
    margin-left: 75px;
  }

  &-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    padding: 12px 19px;
    border: 0;
    outline: 0;

    &::placeholder {
      color: #707070;
    }
  }

  &-form {
    width: 100%;
  }

  &-list {
    display: flex;
    text-align: left;
    justify-content: space-between;
  }
}

.removeBtn {
  width: 20%;
  margin-left: auto;
}

.words {
  width: 80%;
}

li:hover:not(.selected-page) {
  background-color: rgba(222, 222, 222, 0.3);
  cursor: pointer;
}

li.selected-page {
  background-color: rgb(222, 222, 222);
}
</style>
