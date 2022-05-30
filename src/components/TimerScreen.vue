<template>
 <div>
   <section v-show="dayBool">
     남은시간: {{millisToDays(countdown)}}
   </section>
   <section v-show="otherHourBool">
     남은시간: {{millisToHours(countdown)}}
   </section>
   <section v-show="hourBool">
     남은시간: {{millisToHoursAndMinutes(countdown)}}
   </section>
   <section v-show="minuteBool">
     남은시간: {{millisToMinutesAndSeconds(countdown)}}
   </section>
   <section v-show="!minuteBool&&!expirationBool">
     남은시간: 기간 만료
   </section>
 </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "TimerScreen.vue",
  props:{
    expirationDay: String,
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
      expirationBool: false
    }
  },
  mounted() {
    this.setupCountdownTimer(this.expirationDay)
  },
  beforeUpdate() { //새로 타이머가 안나타나게 stopTimer 을 true 로 해서 타이머를 멈춤
    this.stopTimer = true
    this.countdown = dayjs(this.expirationDay).valueOf() - dayjs().valueOf() //페이지 넘어가면 시간 바껴야하는데 안바뀌어서 넣음
    // 밑의 변수들로 화면에 보일 시간 관리
    this.dayBool = this.dayCheck(this.expirationDay)
    this.otherHourBool=this.otherHourCheck(this.expirationDay)
    this.hourBool = this.hourCheck(this.expirationDay)
    this.minuteBool = this.minuteCheck(this.expirationDay)
    this.expirationBool = this.expirationCheck(this.expirationDay)
  },
  methods: {
    expirationCheck(expiration) { // 기간 만료 구분
      let expirationDate = dayjs(expiration)
      return expirationDate.diff(this.currentDate) > 0;
    },
    setupCountdownTimer(expiration) { // 타이머

      let timer = setInterval(() => {
        console.log('시험')
        this.countdown = dayjs(expiration).valueOf() - dayjs().valueOf()

        if(this.countdown<=0){
          clearInterval(timer)
        }

      }, 1000)

      if(this.stopTimer){ // 타이머 멈추기: 중복으로 타이머가 돌아가는걸 방지
        clearInterval(timer)
        this.stopTimer = false
      }
    },
    millisToMinutesAndSeconds(millis) { // 분 + 초 보이기
      const minutes = Math.floor((millis / 60000) % 60)
      const seconds = ((millis % 60000) / 1000).toFixed(0)

      return (minutes!==0? minutes + '분 ' : '') + (seconds < 10 ? '0' : '') + seconds + '초'
    },

    millisToHoursAndMinutes(millis) { // 시간 + 분 보이기
      const hours = Math.floor((millis / (60 * 60000))%24)
      const minutes = Math.floor((millis / 60000) % 60)

      return (hours!==0? hours + '시간' : '') + minutes + '분'
    },
    millisToHours(millis) { // 시간 보이기
      const hours = Math.floor((millis / (60 * 60000))%24);

      return hours + '시간'
    },
    millisToDays(millis){ // 일 보이기
      const days = Math.floor(millis / (24 * 60 * 60000));

      return days + '일'
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
