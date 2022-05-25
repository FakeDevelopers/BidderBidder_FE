<template>
  <div>
    <ul class="ListContainer">
      <li v-for="product in listItems.items" v-bind:key="product.title" class="listDesign">
          <img :src="`${product.thumbnail}`" class="image-container" alt="상품 사진">
         <section>
           상품이름: {{product.boardTitle}}
         </section>
        <section>
          최소 입찰가: {{comma(product.openingBid)}}
        </section>
        <section>
          희망가: {{comma(product.hopePrice)}}
        </section>
        <section>
          입찰자 수: {{product.bidderCount}}
        </section>
        <section>
          남은시간: {{remainedTime(product.expirationDate)}}
        </section>
      </li>
    </ul>
    <div>
      <ul class="pagination-frame">
        <li @click="startPointChange(
            'start'
        )">
          <a class="page-text">
            〈〈
          </a>
        </li>
        <li
            class="page-left-btn"
            @click="startPointChange(
                'left'
            )"
        >
          <a class="page-text">
            〈
          </a>
        </li>
        <li
          v-for="n in paginationUnits"
          :key="n"
          :class="[n === currentPage? 'selected-page' : '', 'page-btn']"
          @click="changeCurrentPage(n)"
        >
          <a class="page-text">
            {{n}}
          </a>
        </li>
        <li
            class="page-right-btn"
            @click="startPointChange(
                'right'
            )"
        >
          <a class="page-text">
            〉
          </a>
        </li>
        <li @click="startPointChange(
            'end'
        )">
          <a class="page-text">
            〉〉
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "ProductView.vue",
  data: function() {
    return {
      currentDate: dayjs(),
      listSize: 15,
      pageCount: 10,
      currentPage: 1,
      startPoint:1
    }
  },
  created() {
    this.$store.dispatch("FETCH_LIST",this.listSize,this.currentPage)
  },
  computed: {
    listItems() {
      return this.$store.state.productList
    },
    startPage() {
      return this.startPoint
    },
    maxPage() {  // 총 페이지 수(and 최대 페이지 번호)
      return Math.round(this.$store.state.productList.itemCount/this.listSize)
    },
    endPage() {
      let end = this.startPage + this.pageCount -1

      return end < this.maxPage? end : this.maxPage
    },
    paginationUnits() {
      return Array.from({length:this.endPage-this.startPage+1},(_,i) => this.startPage+i)
    }
  },
  methods: {
    remainedTime(expiration){
      let relativeTime = require('dayjs/plugin/relativeTime')
      let updateLocale = require('dayjs/plugin/updateLocale')
      dayjs.extend(relativeTime)
      dayjs.extend(updateLocale)
      dayjs.updateLocale('en', {
        relativeTime: {
          future: "%s ",
          past: "기간 만료",
          s: '%d 초',
          m: "%d 분",
          mm: "%d 분",
          h: "1 시간",
          hh: "%d 시간",
          d: "1일",
          dd: "%d 일",
          M: "1달 ",
          MM: "%d 달",
          y: "1년",
          yy: "%d 년"
        }
      })

      return dayjs(expiration).fromNow()
    },
    changeCurrentPage(page) {
      if(this.currentPage !== page) {
        this.currentPage = page
      }
      this.$store.dispatch("FETCH_LIST",this.currentPage)
    },
    getPage(startPoint){
      this.startPoint= startPoint
      this.currentPage = startPoint
      this.$store.dispatch("FETCH_LIST",this.currentPage)
    },
    startPointChange(location) {
      if (location === 'left'){
        if(this.startPoint<=1){
          this.startPoint = 1
        }else{
          this.startPoint-=this.pageCount
          this.getPage(this.startPoint)
        }
      }
      else if(location === 'right'){
        if(this.startPoint>=this.maxPage){
          this.startPoint = this.maxPage
        }else{
          this.startPoint+=this.pageCount
        this.getPage(this.startPoint)
        }
      }
      else if(location === 'start'){
        this.startPoint=1
        this.getPage(this.startPoint)
      }
      else if(location === 'end'){
        this.startPoint = this.maxPage
        this.getPage(this.startPoint)
      }
    },
    comma(val){
      return val.toLocaleString()
    }
  }


}
</script>

<style scoped>
.ListContainer {
  display: grid;
  margin-top: 100px;
  grid-template-rows: repeat(5,300px);
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
.pagination-frame{
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1vh;

}
.page-text{
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
}
li.selected-page {
  background-color: rgb(222, 222, 222);
}
.listDesign{
  box-shadow: lavender 0 0 0 2px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
