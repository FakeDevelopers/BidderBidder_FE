<template>
 <div>
   <section>
     남은시간: {{millisToDate(countdown)}}
   </section>
 </div>
</template>

<script>
import dayjs from "dayjs"

export default {
  name: "TimerScreen.vue",
  props:{
    expirationDay: String,
    pageCheck: Boolean
  },
  data: function (){
    return{
      currentDate: dayjs(),
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
  beforeUpdate() { //새로 타이머가 안나타나게 stopTimer 을 true 로 해서 타이머를 멈춤
    this.countdown = dayjs(this.expirationDay).valueOf() - dayjs().valueOf() //페이지 넘어가면 시간 바껴야하는데 안바뀌어서 넣음
    // 밑의 변수들로 화면에 보일 시간 관리
    this.dayBool = this.dayCheck(this.expirationDay)
    this.otherHourBool=this.otherHourCheck(this.expirationDay)
    this.hourBool = this.hourCheck(this.expirationDay)
    this.minuteBool = this.minuteCheck(this.expirationDay)
    this.expirationBool = dayjs(this.expirationDay).diff(this.currentDate)
  },
  watch : {
    pageCheck() {
      if(this.$store.state.pageMove){
        this.pageMoveCheck()
      }
    }
  },
  methods: {
    setupCountdownTimer() { // 타이머
      let day = dayjs(this.expirationDay).diff(this.currentDate)

      let timer = setInterval(() => {
        console.log('시험')
        this.countdown = day

        if(this.countdown<=0||this.$store.state.pageMove){
          this.$store.state.pageMove = false
          clearInterval(timer)

        }
      }, 1000)
    },
    pageMoveCheck(){
        console.log("페이지 이동")
        this.setupCountdownTimer()
    },
    millisToDate(millis){
      const days = Math.floor(millis / (24 * 60 * 60000))
      const hours = Math.floor((millis / (60 * 60000))%24)
      const minutes = Math.floor((millis / 60000) % 60)
      const seconds = ((millis % 60000) / 1000).toFixed(0)

      if(this.dayBool){
        return days + '일'
      }
      else if(this.otherHourBool){
        return hours + '시간'
      }
      else if(this.hourBool){
        return (hours!==0? hours + '시간' : '') + (minutes!==0? minutes + '분' : (seconds < 10 ? '0' : '') + seconds + '초' )
      }
      else if(this.minuteBool){
        return (minutes!==0? minutes + '분 ' : '') + (seconds < 10 ? '0' : '') + seconds + '초'
      }
      else if(this.expirationBool){
        return '기간 만료'
      }
    },
    hourToMillis(hour) { //비교를 위한 시간 연산
      return hour * 60 * 60 * 1000
    },
    minuteToMillis(minute){ // 비교를 위한 분 연산
      return minute *60 *1000
    },
    minuteCheck(expiration) { // 30분보다 작거나 같으면 true
      let compare = dayjs(expiration).valueOf() - dayjs().valueOf()

      return compare <= this.minuteToMillis(30) && compare>0
    },
    hourCheck(expiration) { //3시간보다 작거나 같고 30분 보다 크면 true
      let compare = dayjs(expiration).valueOf() - dayjs().valueOf()

      return compare <= this.hourToMillis(3) && this.countdown > this.minuteToMillis(30)
    },
    otherHourCheck(expiration) { //24시간 보다 작거나 같고 3시간보다 크면 true
      let compare = dayjs(expiration).valueOf() - dayjs().valueOf()

      return compare < this.hourToMillis(24) && this.countdown > this.hourToMillis(3)
    },
    dayCheck(expiration) { // 24시간 보다 크거나 같으면 true
      let compare = dayjs(expiration).valueOf() - dayjs().valueOf()

      return compare >= this.hourToMillis(24)
    }
  }
}
</script>
