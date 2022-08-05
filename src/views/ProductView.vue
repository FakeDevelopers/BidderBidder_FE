<template>
  <div>
    <SearchEngine></SearchEngine>
    <ul class="ListContainer" @click="modalControl(false)">
      <li v-for="product in listItems.items" v-bind:key="product.title" class="listDesign">
        <img :src="`${this.apiAddress}${product.thumbnail}`" class="image-container" alt="상품 사진">
        <section>
          {{ $t('productName') }}: {{ product.productTitle }}
        </section>
        <section>
          {{ $t('openingBid') }}: {{ comma(product.openingBid) }}
        </section>
        <section>
          {{ $t('hopePrice') }}: {{ comma(product.hopePrice) }}
        </section>
        <section>
          {{ $t('bidderCount') }}: {{ product.bidderCount }}
        </section>
        <section>
          <section>
            <TimerScreen :expiration-day="product.expirationDate"></TimerScreen>
          </section>
        </section>
      </li>
    </ul>
    <div>
      <ul class="pagination-frame">
        <li @click="startPointChange(
            'start'
        ),$router.push(/products/ + this.getCurrentPage)">
          <a class="page-text">
            〈〈
          </a>
        </li>
        <li
            class="page-left-btn"
            @click="startPointChange(
                'left'
            ),$router.push(/products/ + this.getCurrentPage)"
        >
          <a class="page-text">
            〈
          </a>
        </li>
        <li
            v-for="n in paginationUnits"
            :key="n"
            :class="[n === currentPage? 'selected-page' : '', 'page-btn']"
            @click="changeCurrentPage(n),$router.push(/products/+ n)"
        >
          <a class="page-text">
            {{ n }}
          </a>
        </li>
        <li
            class="page-right-btn"
            @click="startPointChange(
                'right'
            ),$router.push(/products/ + this.getCurrentPage)"
        >
          <a class="page-text">
            〉
          </a>
        </li>
        <li @click="startPointChange(
            'end'
        ),$router.push(/products/ + this.getCurrentPage)">
          <a class="page-text">
            〉〉
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TimerScreen from "@/components/TimerScreen";
import SearchEngine from "@/components/SearchEngine";
import {mapGetters, mapMutations} from "vuex";
import {config} from "@/api/baseUrl";

export default {
  name: "ProductView.vue",
  data: function () {
    return {
      pageCount: 10,
      apiAddress: config.baseUrl,
      searchText: ''
    }
  },
  components: {
    TimerScreen,
    SearchEngine
  },
  created() {
    this.$store.dispatch("FETCH_LIST", {listSize: this.getListSize, currentPage: this.getCurrentPage})
  },
  computed: {
    ...mapGetters({
      listItems: 'getProductList',
      showModal: 'getSearchModalState',
      getStartPoint: 'getStartPoint',
      getCurrentPage: 'getCurrentPage',
      getListSize: 'getListSize'
    }),
    startPage() {
      return this.getStartPoint
    },
    maxPage() {  // 총 페이지 수(and 최대 페이지 번호)
      return this.listItems.itemCount > this.getListSize ? Math.round(this.listItems.itemCount / this.getListSize) : 1
    },
    endPage() {
      let end = this.startPage + this.pageCount - 1

      return end < this.maxPage ? end : this.maxPage
    },
    paginationUnits() {
      return Array.from({length: this.endPage - this.startPage + 1}, (_, i) => this.startPage + i)
    }
  },
  methods: {
    changeCurrentPage(page) {
      this.setCurrentPage(page)
      this.$store.dispatch("FETCH_LIST", {listSize: this.getListSize, currentPage: this.getCurrentPage})
    },
    getPage(startPoint) {
      this.setStartPoint(startPoint)
      this.setCurrentPage(startPoint)
      this.$store.dispatch("FETCH_LIST", {listSize: this.getListSize, currentPage: this.getCurrentPage})
    },
    startPointChange(location) {
      if (location === 'left') {
        this.setStartPoint(this.getStartPoint <= this.pageCount ? 1 : this.getStartPoint - this.pageCount)
        this.getPage(this.getStartPoint)
      } else if (location === 'right') {
        this.setStartPoint(Math.min(this.getStartPoint + this.pageCount, this.maxPage))
        this.getPage(this.getStartPoint)
      } else if (location === 'start') {
        this.setStartPoint(1)
        this.getPage(this.getStartPoint)
      } else if (location === 'end') {
        this.setStartPoint(this.maxPage)
        this.getPage(this.getStartPoint)
      }
    },
    comma(val) {
      if (val === null) {
        return this.$t('none')
      }

      return val.toLocaleString()
    },
    ...mapMutations({
      modalControl: 'setSearchModal',
      setStartPoint: 'setStartPoint',
      setCurrentPage: 'setCurrentPage'
    })
  }
}
</script>

<style scoped>
body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.ListContainer {
  display: grid;
  margin-top: 50px;
  grid-template-rows: repeat(5, 300px);
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  margin-bottom: 50px;
}

.image-container {
  width: 125px;
  height: 125px;
  object-fit: fill;
  margin-top: 10px;
}

.pagination-frame {
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1vh;

}

.page-text {
  text-decoration: none;
  cursor: pointer;
}

.pagination-frame > li {
  width: 1.55vw;
  height: 1.8vh;
  background-color: #fff;
  border: 1px solid rgb(211, 210, 211);
  text-align: center;
  padding: 3px 1px;
  cursor: pointer;
}

.page-btn {
  margin: 0 1px;
}

.page-left-btn {
  margin-right: 5px;
}

.page-right-btn {
  margin-left: 5px;
}

.page-text:hover {
  color: #000;
}

li:hover:not(.selected-page) {
  background-color: rgba(222, 222, 222, 0.3);
  cursor: pointer;
}

li.selected-page {
  background-color: rgb(222, 222, 222);
}

.listDesign {
  box-shadow: lavender 0 0 0 2px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
