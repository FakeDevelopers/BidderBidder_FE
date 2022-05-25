<template>
 <div>
   <section v-show="countdownCheck(countdown)"> 남은시간: {{millisToHoursAndMinutes(countdown)}}</section>
   <section v-show="!countdownCheck(countdown)">남은시간: {{millisToMinutesAndSeconds(countdown)}}</section>
 </div>
</template>

<script>
export default {
  name: "TimerScreen.vue",
  props:{
    expirationDay: String,
  },
  data: function (){
    return{
      countdown: 0
    }
  },
  mounted() {
    this.setupCountdownTimer(this.expirationDay)
  },

  methods: {
    setupCountdownTimer(expiration) {
      let dayjs = require('dayjs')

      let timer = setInterval(() => {
        this.countdown = dayjs(expiration).valueOf() - dayjs().valueOf()

        if (this.countdown <= 0) {
          this.countdown = 0
          clearInterval(timer)
        }
      }, 1000)
    },

    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor(millis / 60000 % 60)
      const seconds = ((millis % 60000) / 1000).toFixed(0)

      return minutes + '분 ' + (seconds < 10 ? '0' : '') + seconds + '초'
    },

    millisToHoursAndMinutes(millis) {
      const hours = Math.floor(millis / (60 * 60 * 1000));
      const minutes = Math.floor(millis / 60000 % 60)

      return hours + '시간 ' + minutes + '분'
    },
    countdownCheck(millis) {
      const hours = Math.floor(millis / (60 * 60 * 1000));
      const minutes = Math.floor(millis / 60000 % 60)

      return hours<=3 && minutes>=30
    }
  }
}
</script>

<style scoped>
</style>
