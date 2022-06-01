<template>
 <div>
   <section>
     남은시간: {{millisToDate(countdown)}}
   </section>
 </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TimerScreen.vue",
  props:{
    expirationDay: String
  },
  data: function (){
    return{
      countdown: 0,
      stopTimer: false,
      dayBool: false,
      otherHourBool:false,
      hourBool:false,
      minuteBool:false,
      expirationBool: false,
    }
  },
  mounted() {
    this.setupCountdownTimer()
  },
  watch : {
     pageCheck() {
      if(this.pageCheck){
        this.$store.state.pageMove = false
        if(this.countdown<0){
          this.countdown = this.expirationCount - new Date().getTime()
          this.setupCountdownTimer()
        }
      }
    },
    countdown() {
      this.dayBool = this.dayCheck(this.countdown)
      this.otherHourBool=this.otherHourCheck(this.countdown)
      this.hourBool = this.hourCheck(this.countdown)
      this.minuteBool = this.minuteCheck(this.countdown)
      this.expirationBool = this.expirationCount - new Date().getTime()
    }
  },
  computed:{
    expirationCount(){
      return new Date(this.expirationDay).getTime()
    },
    ...mapGetters({
      pageCheck: 'getPageMove'
    })
  },
  methods: {
    setupCountdownTimer() { // 타이머
      let timer = setInterval(() => {
        console.log('시험')
        this.countdown = this.expirationCount - new Date().getTime()
        if(this.countdown<=0){
          clearInterval(timer)
        }
      }, 1000)
    },

    millisToDate(millis){

      if(this.dayBool){
        const days = Math.floor(millis / (24 * 60 * 60000))
        return days + '일'
      }
      if(this.otherHourBool){
        const hours = Math.floor((millis / (60 * 60000))%24)
        return hours + '시간'
      }
      if(this.hourBool){
        const hours = Math.floor((millis / (60 * 60000))%24)
        const minutes = Math.floor((millis / 60000) % 60)
        return (hours!==0? hours + '시간' : '') + (minutes!==0? minutes + '분' : '')
      }
      if(this.minuteBool){
        const minutes = Math.floor((millis / 60000) % 60)
        const seconds = ((millis % 60000) / 1000).toFixed(0)
        return (minutes!==0? minutes + '분 ' : '') + (seconds < 10 ? '0' : '') + seconds + '초'
      }
      if(this.expirationBool){
        return '기간만료'
      }
    },
    hourToMillis(hour) { //비교를 위한 시간 연산
      return hour * 60 * 60 * 1000
    },
    minuteToMillis(minute){ // 비교를 위한 분 연산
      return minute *60 *1000
    },
    minuteCheck(expiration) { // 30분보다 작거나 같으면 true

      return expiration <= this.minuteToMillis(30) && expiration>0
    },
    hourCheck(expiration) { //3시간보다 작거나 같고 30분 보다 크면 true

      return expiration <= this.hourToMillis(3) && this.countdown > this.minuteToMillis(30)
    },
    otherHourCheck(expiration) { //24시간 보다 작거나 같고 3시간보다 크면 true

      return expiration < this.hourToMillis(24) && this.countdown > this.hourToMillis(3)
    },
    dayCheck(expiration) { // 24시간 보다 크거나 같으면 true

      return expiration >= this.hourToMillis(24)
    }
  }
}
</script>
