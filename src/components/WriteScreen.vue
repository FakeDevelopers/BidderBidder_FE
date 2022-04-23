<template>
  <div>
    <div><button @click="submitForm">호출</button></div>
    <div>
      <form>
        <input type="file" name="files" multiple @change="upload">
      </form>
    </div>
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
      tick: 1,
      imageList: [],
    }
  },
  methods:{
    submitForm: async function() {

      const url = '/board/write'
      const form = new FormData()

      form.append('board_content', '경매')
      form.append('board_title', '뭐뭐 팝니다.')
      form.append('category', this.category)
      form.append('end_date','2022-05-02 14:00')
      for(let i =0; i<this.imageList.length;i++){
        form.append('files', this.imageList[i])
      }
      form.append('hope_price' , this.hopePrice)
      form.append('opening_bid', this.openingBid)
      form.append('tick', this.tick)

      try{
        const response = await axios.post(url,form, {
          headers: {
            'Content-Type' : 'multipart/form-data'
          }
        })
        console.log(response)
      } catch(err){
        console.log(err)
      }
    },
    upload(e) {
      let fileList = e.target.files || e.dataTransfer.files
      for(let image of fileList){
        this.imageList.push(image)
      }
      console.log(this.imageList)
    }
  },
}
</script>

<style scoped>

</style>
