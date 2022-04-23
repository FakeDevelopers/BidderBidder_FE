<template>
  <div>
    <button id="test api" @click="submitForm">호출</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WriteScreen",
  data() {
    return{
      category: 0 ,
      hopePrice: 7000,
      openingBid:3000,
      tick: 1

    }
  },
  methods:{
    submitForm: async function() {

      const url = '/board/write'
      const form = new FormData()

      form.append('board_content', '경매')
      form.append('board_title', '뭐뭐 팝니다.')
      form.append('category', this.category)
      form.append('hope_price' , this.hopePrice)
      form.append('opening_bid', this.openingBid)
      form.append('tick', this.tick)

      try{
        const response = await axios.post(url,form)
        console.log(response)
      } catch(err){
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>