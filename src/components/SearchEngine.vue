<template>
  <div class="container" @click="setSearchModal(false)">
    <div class="search-box" @click="$event.stopPropagation()">
      <input type="text" placeholder="상품명, 판매자명 등을 입력하세요" class="search-input" :value="searchText"
             @keyup.enter="searchResult(this.searchText)"
             @focus="searchingStateCheck" @input="fixSearchText" ref="cursor">
      <div class="search-icon" @click="searchResult(this.searchText)">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M7.91668 1.58337C6.92596 1.5839 5.94919 1.81685 5.06486 2.26349C4.18053 2.71012 3.41332 3.358 2.82488 4.15503C2.23644 4.95207 1.8432 5.87603 1.67675 6.85267C1.51031 7.8293 1.5753 8.83137 1.86651 9.77832C2.15772 10.7253 2.66703 11.5907 3.35349 12.305C4.03995 13.0194 4.88443 13.5627 5.81904 13.8914C6.75366 14.22 7.75234 14.3249 8.73483 14.1974C9.71731 14.07 10.6562 13.7138 11.476 13.1575L15.39 17.0684C15.4987 17.185 15.6298 17.2786 15.7755 17.3435C15.9212 17.4084 16.0784 17.4433 16.2379 17.4461C16.3973 17.449 16.5557 17.4196 16.7035 17.3599C16.8514 17.3002 16.9857 17.2113 17.0985 17.0985C17.2113 16.9858 17.3001 16.8514 17.3599 16.7036C17.4196 16.5557 17.4489 16.3973 17.4461 16.2379C17.4433 16.0784 17.4084 15.9212 17.3435 15.7755C17.2786 15.6299 17.185 15.4988 17.0683 15.39L13.1575 11.476C13.8045 10.5238 14.1797 9.4132 14.2428 8.26367C14.3059 7.11415 14.0544 5.96917 13.5155 4.95185C12.9765 3.93454 12.1705 3.08337 11.184 2.48986C10.1975 1.89635 9.06794 1.58296 7.91668 1.58337V1.58337ZM3.95835 7.91671C3.95835 6.86689 4.37538 5.86008 5.11772 5.11774C5.86005 4.37541 6.86686 3.95837 7.91668 3.95837C8.96649 3.95837 9.97331 4.37541 10.7156 5.11774C11.458 5.86008 11.875 6.86689 11.875 7.91671C11.875 8.96652 11.458 9.97334 10.7156 10.7157C9.97331 11.458 8.96649 11.875 7.91668 11.875C6.86686 11.875 5.86005 11.458 5.11772 10.7157C4.37538 9.97334 3.95835 8.96652 3.95835 7.91671Z"
              fill="#38BBF3"/>
        </svg>
      </div>
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
          <ul v-if="getAutoWordsState">
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

    if (searchHistory.length) {
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
      getAutoWordsState: 'getAutoWordsState',
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
    searchText(value) {
      this.setSearchingCheck(this.searchText)
      this.setAutoWordsCheck(value.trim())
    }
  },
  methods: {
    ...mapMutations({
      setSearchModal: 'setSearchModal',
      setSearchingCheck: 'setSearchingCheck',
      removeWords: 'removeWords',
      setAutoWordsCheck: 'setAutoWordsCheck',
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
      let searchWords = words.trim()
      if (searchWords) {
        this.setStartPoint(1)
        this.$router.push(/products/ + this.getCurrentPage)
        this.$store.dispatch("FETCH_LIST", {
          listSize: this.getListSize,
          currentPage: this.getCurrentPage,
          searchWord: searchWords,
          searchType: 0
        })
        this.addKeyword(searchWords)
      }
      this.setSearchModal(false)
      this.showButtonControl(true)
      this.$refs.cursor.blur()
    },
    fixSearchText(e) {
      this.searchText = e.target.value
      this.setSearchModal(true)
    },
    searchingStateCheck() {
      this.setSearchModal(true)
      this.setSearchingCheck(this.searchText)
    },
    showButtonControl(value) {
      this.showButton = value
    },
    clearAllHistory() {
      this.clearHistory()
      this.showButtonControl(false)
    },
    removeOneWords(searchWords, index) {
      this.removeWords({searchWords, index})

      if (this.getSearchWords.length) {
        this.showButtonControl(true)
      } else {
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

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 51px;
  padding-bottom: 31px;

  .logo {
    cursor: pointer;
  }

  &-box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 582px;
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

  &-icon {
    margin-right: 19px;
    cursor: pointer;
  }

  .trending {
    padding-left: 84px;

    li {
      display: flex;
    }

    a {
      display: flex;
      text-decoration: none;
    }

    .ul, .li {
      list-style: none;
    }

    .rank {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      background-color: #38BBF3;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;

      &-num {
        font-weight: 800;
        position: relative;
        top: 4px;
        left: 1.5px;
      }
    }

    .keyword {
      display: flex;
      width: 115px;
      font-size: 12px;
      color: #030303;
      padding-left: 10px;
      text-align: center;
      justify-content: center;
    }

    .fluctuate {
      &-value {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
