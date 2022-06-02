<template>
  <div>
    <div>
      <button @click="submitForm">호출</button>
    </div>
    <div>
      <form>
        <input type="file" name="files" multiple @change="upload">
      </form>
    </div>
  </div>
</template>

<script>
import {submitWrite} from "@/api";

export default {
  name: "WriteScreen",
  data() {
    return {
      category: 0,
      hopePrice: 7000,
      openingBid: 3000,
      tick: 1,
      imageList: [],
    }
  },
  methods: {
    submitForm: function () {
      submitWrite(this.category, this.imageList, this.hopePrice, this.openingBid, this.tick)
    },
    upload(e) {
      let fileList = e.target.files || e.dataTransfer.files
      for (let image of fileList) {
        this.imageList.push(image)
      }
    }
  },
}
</script>

<style scoped>

</style>
