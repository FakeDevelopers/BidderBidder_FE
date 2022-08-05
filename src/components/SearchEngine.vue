<template>
  <div>
    <div class="searchEngin">
      <button @click="searchResult(this.searchText),addKeyword(this.searchText)"> 검색</button>
      <input type="search" placeholder="검색어를 입력하세요" v-model="searchText"
             @keyup.enter="searchResult(this.searchText),addKeyword(this.searchText),modalControl(false),searchingControl(false)"
             @focus="modalControl(true)" @input="searchingControl(true)" ref="cursor">
    </div>
    <div class="modal-bg" v-if="showModal" @click="modalControl(false)">
      <div class="white-bg">
        <div class="searchForm" v-if="!getSearchingState">
          <h4>최근검색어</h4>
          <ul>
            <li v-for="(searchWords,index) in this.getSearchWords" v-bind:key="searchWords" class="searchList">
              <div class="words" @click="searchResult(searchWords), modalControl(false)">
                {{ searchWords }}
              </div>
              <span class="removeBtn" @click="removeWords({searchWords,index})">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </li>
            <li @click="clearHistory">
              기록 모두 삭제
            </li>
          </ul>
        </div>
        <div class="searchForm" v-if="!getSearchingState">
          <h4>인기검색어</h4>
          <ul>
            <li v-for="searchList in getPopularWords" v-bind:key="searchList"
                @click="searchResult(searchList), modalControl(false), addKeyword(searchList)" class="searchList">
              {{ searchList }}
            </li>
          </ul>
        </div>
        <div class="searchForm" v-else-if="getSearchingState">
          <ul v-if="showAutoComplete">
            <li v-for="autoCompleteWords in getAutoWords" v-bind:key="autoCompleteWords"
                @click="searchResult(autoCompleteWords), addKeyword(autoCompleteWords), modalControl(false)" class="searchList">
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
      searchText: ''
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
  },
  watch: {
    searchText(value) {
      if(this.searchText===''){
        this.searchingControl(false)
      }
      const words = /[ㄱ|ㅏ가]/;
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
      setPopularCheck: 'setPopularCheck'
    }),
    addKeyword(word) {
      this.searchText=word
      if (this.searchText !== "") {
        localStorage.setItem(this.searchText, this.searchText)
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
    }
  }
}
</script>

<style scoped>
.white-bg {
  margin-top: 2px;
  width: 300px;
  height: 300px;
  background: whitesmoke;
  border-radius: 8px;
  display: flex;
}

.modal-bg {
  display: flex;
  justify-content: center;
}

.searchEngin {
  margin-top: 20px;
  justify-content: center;
}

.searchForm {
  width: 100%;
}

.searchList {
  display: flex;
  text-align: left;
  justify-content: space-between;
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
