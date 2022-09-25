<template>
  <div class="container" @click="modalControl(false)">
    <div class="search-box" @click="$event.stopPropagation()">
      <input type="search" placeholder="검색어를 입력하세요" class="search-input" :value="searchText"
             @keyup.enter="searchResult(this.searchText),modalControl(false)"
             @focus="searchingStateCheck" @input="fixSearchText" ref="cursor">
      <button @click="searchResult(this.searchText)"> 검색</button>
    </div>
    <div class="modal-bg" v-if="showModal" @click="$event.stopPropagation()">
      <div class="white-bg" :style="{width: this.searchBarWidth+'px'}">
        <div class="search-form" v-if="!getSearchingState">
          <h4>최근검색어</h4>
          <ul>
            <li v-for="(searchWords,index) in this.getSearchWords" v-bind:key="index"
                class="search-list">
              <div class="words" @click="searchResult(searchWords),modalControl(false)" @dragstart="dragPrevent">
                {{ searchWords }}
              </div>
              <span class="removeBtn" @click="removeWords({searchWords,index})" @dragstart="dragPrevent">
                <em class="fa-solid fa-xmark"></em>
              </span>
            </li>
            <li @click="clearHistory">
              기록 모두 삭제
            </li>
          </ul>
        </div>
        <div class="search-form" v-if="!getSearchingState">
          <h4>인기검색어</h4>
          <ul>
            <li v-for="searchList in getPopularWords" v-bind:key="searchList"
                @click="searchResult(searchList), modalControl(false)" class="search-list" @dragstart="dragPrevent">
              {{ searchList }}
            </li>
          </ul>
        </div>
        <div class="search-form" v-else-if="getSearchingState">
          <ul v-if="showAutoComplete">
            <li v-for="autoCompleteWords in getAutoWords" v-bind:key="autoCompleteWords"
                @click="searchResult(autoCompleteWords), modalControl(false)"
                class="search-list" @dragstart="dragPrevent">
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
      modalWidth: ''
    }
  },
  computed: {
    ...mapGetters({
      showModal: 'getSearchModalState',
      getSearchWords: 'getSearchWords',
      getSearchingState: 'getSearchingState',
      getPopularWords: 'getPopularSearch',
      getAutoWords: 'getAutoCompleted',
      showAutoComplete: 'getAutoWordsState',
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
      this.modalChange()
      const words = /[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z!?@#$%^&*():;+-=~{}<>\\_[\]|"',./`]/;
      if (words.test(value)) {
        this.autoCheck(true)
      } else {
        this.autoCheck(false)
      }
    }
  },
  methods: {
    ...mapMutations({
      modalControl: 'setSearchModal',
      searchingControl: 'setSearchingCheck',
      removeWords: 'removeList',
      autoCheck: 'setAutoWordsCheck',
      clearHistory: 'clearHistory',
      setStartPoint: 'setStartPoint',
      setResentCheck: 'setResentCheck',
      setPopularCheck: 'setPopularCheck',
    }),
    addKeyword(word) {
      this.searchText = word
      if (this.searchText !== "") {
        this.$store.commit('addSearchWord', this.searchText)
        this.searchText = ''
      }
    },
    searchResult(word) {
      this.setStartPoint(1)
      this.$router.push(/products/ + this.getCurrentPage)
      this.$store.dispatch("FETCH_LIST", {
        listSize: this.getListSize,
        currentPage: this.getCurrentPage,
        searchWord: word,
        searchType: 0
      })
      if (localStorage.getItem(word)) {
        return false
      } else {
        this.addKeyword(word)
      }
    },
    modalChange() {
      if (this.searchText === '') {
        this.searchingControl(false)
      } else {
        this.searchingControl(true)
      }
    },
    fixSearchText(e) {
      this.searchText = e.target.value
    },
    searchingStateCheck() {
      this.modalControl(true)
      this.modalChange()
    },
    dragPrevent() {
      return false
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
