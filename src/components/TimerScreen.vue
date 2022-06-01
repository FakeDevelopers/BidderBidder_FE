<template>
  <div>
    <section>
      {{$t('remainedTime')}}: {{ millisToDate(countdown) }}
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TimerScreen.vue",
  props: {
    expirationDay: String
  },
  data: function () {
    return {
      countdown: 0,
      expirationTime: 0,
      stopTimer: false,
      dayBool: false,
      otherHourBool: false,
      hourBool: false,
      minuteBool: false,
      expirationBool: false,
    }
  },
  mounted() {
    this.expirationTime = new Date(this.expirationDay).getTime()
    this.setupCountdownTimer()
  },
  watch: {
    pageCheck() {
      if (this.pageCheck) {
        this.$store.state.pageMove = false
        if (this.countdown < 0) {
          this.countdown = this.expirationTime - new Date().getTime()
          this.setupCountdownTimer()
        }
      }
    },
    countdown() {
      this.dayBool = this.dayCheck(this.countdown)
      this.otherHourBool = this.otherHourCheck(this.countdown)
      this.hourBool = this.hourCheck(this.countdown)
      this.minuteBool = this.minuteCheck(this.countdown)
      this.expirationBool = this.expirationTime - new Date().getTime()
    },
    expirationDay(newVal) {
      this.expirationTime = new Date(newVal).getTime()
    }
  },
  computed: {
    ...mapGetters({
      pageCheck: 'getPageMove'
    })
  },
  methods: {
    setupCountdownTimer() { // 타이머
      let timer = setInterval(() => {
        this.countdown = this.expirationTime - new Date().getTime()
        if (this.countdown <= 0) {
          clearInterval(timer)
        }
      }, 1000)
    },

    millisToDate(millis) {

      if (this.dayBool) {
        const days = Math.floor(millis / (24 * 60 * 60000))
        return days + this.$t('days')
      }
      if (this.otherHourBool) {
        const hours = Math.floor((millis / (60 * 60000)) % 24)
        return hours + this.$t('hours')
      }
      if (this.hourBool) {
        const hours = Math.floor((millis / (60 * 60000)) % 24)
        const minutes = Math.floor((millis / 60000) % 60)
        return hours + this.$t('hours') + (minutes !== 0 ? minutes + this.$t('minutes') : '')
      }
      if (this.minuteBool) {
        const minutes = Math.floor((millis / 60000) % 60)
        const seconds = ((millis % 60000) / 1000).toFixed(0)
        return (minutes !== 0 ? minutes + this.$t('minutes') : '') + (seconds < 10 ? '0' : '') + seconds + this.$t('seconds')
      }
      if (this.expirationBool) {
        return this.$t('expired')
      }
    },
    minuteCheck(expiration) { // 1시간보다 작거나 같으면 true

      return expiration <= (60 * 60 * 1000) && expiration > 0
    },
    hourCheck(expiration) { //3시간보다 작거나 같고 1시간 보다 크면 true

      return expiration <= 3 * 60 * 60000 && expiration > 60 * 60000
    },
    otherHourCheck(expiration) { //24시간 보다 작거나 같고 3시간보다 크면 true

      return expiration < 24 * 60 * 60000 && expiration > 3 * 60 * 60000
    },
    dayCheck(expiration) { // 24시간 보다 크거나 같으면 true

      return expiration >= 24 * 60 * 60000
    }
  }
}
</script>
