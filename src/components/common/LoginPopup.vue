<template>
  <transition name="ease-out">
    <div class="login" @click.self="modalClose(false)">
      <div class="wrapper" >
        <div class="header">
          <div class="close-button" @click.self="modalClose(false)"></div>
          <div class="logo">
            <a href="/">
              <img src="@/assets/BDBD_primary_typo_2x.png" alt="">
            </a>
          </div>
        </div>
        <div class="content">
          <div class="bdbd-login">
            <form v-on:submit.prevent="submitForm">
              <div>
                <input id="username" type="text" v-model="id" :placeholder="$t('username')">
              </div>
              <div>
                <input id="password" type="password" v-model="passwd" :placeholder="$t('password')">
              </div>
              <div class="remember-me">
                <input type="checkbox" id="automatic-login" value="true"><label for="automatic-login">{{ $t('automaticLogin') }}</label>
              </div>
              <button type="submit">{{ $t('login') }}</button>
            </form>
            <div class="help">
              <a href="/" class="find-id">{{ $t('findUsername') }}</a>
              <span>|</span>
              <a href="/" class="find-password">{{ $t('findPassword') }}</a>
              <span>|</span>
              <a href="/" class="signup">{{ $t('signup') }}</a>
            </div>
          </div>
          <div class="divider">
            <hr>
            <span>{{ $t('socialLogin-label') }}</span>
            <hr>
          </div>
          <div class="social-login">
            <a href="" class="button button__icon-text button__social social__kakao">
              <span class="icon"></span>
              <span class="text" v-if="$i18n.locale === 'ko'">{{ $t('kakao') + $t('loginWith') }}</span>
              <span class="text" v-if="$i18n.locale === 'en'">{{ $t('loginWith') + $t('kakao') }}</span>
            </a>
            <a href="" class="button button__icon-text button__social social__naver">
              <span class="icon"></span>
              <span class="text" v-if="$i18n.locale === 'ko'">{{ $t('naver') + $t('loginWith') }}</span>
              <span class="text" v-if="$i18n.locale === 'en'">{{ $t('loginWith') + $t('naver') }}</span>
            </a>
            <a href="" class="button button__icon-text button__social social__google">
              <span class="icon"></span>
              <span class="text" v-if="$i18n.locale === 'ko'">{{ $t('google') + $t('loginWith') }}</span>
              <span class="text" v-if="$i18n.locale === 'en'">{{ $t('loginWith') + $t('google') }}</span>
            </a>
            <a href="" class="button button__icon-text button__social social__apple">
              <span class="icon"></span>
              <span class="text" v-if="$i18n.locale === 'ko'">{{ $t('apple') + $t('loginWith') }}</span>
              <span class="text" v-if="$i18n.locale === 'en'">{{ $t('loginWith') + $t('apple') }}</span>
            </a>
          </div>
        </div>
        <div class="footer">
          <div class="signup-cta">
            <span class="label">{{ $t('signupCTA-label') }}</span>
            <a href="" class="button button__link__primary" v-if="$i18n.locale === 'ko'">{{ $t('signup') + $t('do') }}</a>
            <a href="" class="button button__link__primary" v-if="$i18n.locale === 'en'">{{ $t('signup') }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapMutations} from 'vuex'
import {submitAccount} from "@/api";

export default {
  methods: {
    ...mapMutations({
      modalClose: 'setShowLoginPopup'
    }),
    submitForm: function () {
      submitAccount(this.id, this.passwd)
    },
  },
  data() {
    return {
      id: '',
      passwd: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/css/variables";

body {
  overflow: hidden !important;
}

// Login
.login {
  position: fixed;
  z-index: 9998;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: auto;

  * {
    box-sizing: border-box;
    font-family: Pretendard, Helvetica, Arial, sans-serif;
    font-weight: 600;
  }

  .wrapper {
    margin: 60px;
    padding-top: 78px;
    padding-bottom: 50px;
    align-items: center;
    background-color: white;
    height: auto;
    max-width: 837px;
    width: 100%;
    display: block;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    position: relative;

    @include tablet {
      width: 456px;
      padding-left: 72px;
      padding-right: 72px;
    }
    @include mobile {
      width: 100%;
      margin: 0;
      height: auto;
      border-radius: 0;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

// Login Header
.login .header {
  padding-bottom: 87px;

  @include tablet {
    padding-bottom: 56px;
  }

  .close-button {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 15 15 1M1 1l14 14' stroke='%23BDBDBD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 14px;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 17px;
    right: 24px;
    cursor: pointer;
    background-position-x: center;
    background-position-y: center;
  }
  .logo {
    img {
      width: 175px;
    }
  }
}

// Login Content
.login .content {
  display: flex;
  align-items: center;
  justify-content: center;

  @include tablet {
    flex-direction: column;
  }

  @include mobile {
    flex-direction: column;
    width: 100%;
  }

  .bdbd-login {
    width: 310px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @include mobile {
      width: 100%;
      max-width: 310px;
    }

    .remember-me {
      display: flex;
    }

    form {
      width: 100%;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      width: 100%;
      height: 50px;
      display: flex;
      border: 1px solid #BDBDBD;
      border-radius: 7.5px;
      padding: 0 18px;
      margin-bottom: 15px;

      &::placeholder {
        color: #BDBDBD;
        font-size: 14px;
      }

      &#password {
        letter-spacing: 3px;

        &::placeholder {
          letter-spacing: 0px;
        }
      }

      &:focus, &:hover, &:focus-visible, &:target {
        border: 1px solid #21CEFF;
        outline: none;
      }

      &[type=checkbox] {
        display: none;
      }

      &[type=checkbox]#automatic-login {
        & + label {
          color: #BDBDBD;
          cursor: pointer;
          background-repeat: no-repeat;
          padding-left: 28px;
          padding-top: 4px;
          padding-bottom: 4px;
          font-size: 12px;
          background-image: url("data:image/svg+xml,%3Csvg width='19' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9.5' cy='9.5' r='8.75' stroke='%23BDBDBD' stroke-width='1.5'/%3E%3Cpath d='M5.5 10 8 12.5 14 6' stroke='%23BDBDBD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        }
        &:checked + label {
          background-image: url("data:image/svg+xml,%3Csvg width='19' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9.5' cy='9.5' r='8.75' stroke='%2321CEFF' stroke-width='1.5'/%3E%3Cpath d='M5.5 10 8 12.5 14 6' stroke='%2321CEFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        }
      }
    }

    button {
      height: 50px;
      width: 100%;
      margin-top: 18px;
      background: #21CEFF;
      border: none;
      border-radius: 7.5px;
      color: white;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .help {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding-top: 15px;
    color: #BDBDBD;
    font-size: 12px;
    font-weight: 600;

    .signup {
      color: #21CEFF
    }

    @include desktop {
      span:last-of-type {
        display: none;
      }
      .signup {
        display: none;
      }
    }


    a {
      color: #BDBDBD;
      text-decoration: none;
    }
    span {
      padding: 0 8px
    }
  }

  .divider {
    hr {
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      height: 0;
      width: 0;
      border-width: 0;
    }
    @include desktop {
      padding: 0 34px;
      hr:first-child {
        height: 247px;
        width: 1px;
        border-width: 0;
        background-color: #BDBDBD;
        border-color: #BDBDBD;
      }
      hr:last-child {
        display: none;
      }
      span {
        display: none;
      }
    }
    @include tablet {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 20px 0;

      hr:first-child, hr:last-child {
        justify-content: space-between;
        width: 88px;
        height: 1px;
        background-color: #BDBDBD;
      }
      span {
        justify-content: space-between;
        color: #BDBDBD;
      }
    }
    @include mobile {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 310px;
      padding: 20px 0;

      hr:first-child, hr:last-child {
        justify-content: space-between;
        width: 88px;
        height: 1px;
        background-color: #BDBDBD;
      }
      span {
        justify-content: space-between;
        color: #BDBDBD;
      }
    }

  }
}

// Login Footer
.login .footer {
  padding-top: 57px;

  .signup-cta {
    .label {
      color: #BDBDBD;
      padding-right: 6px;
    }
  }

  @include tablet {
    padding-top: 0px;

    .signup-cta {
      display: none;
      .label {
        color: #BDBDBD;
        padding-right: 6px;
      }
    }
  }

  @include mobile {
    padding-top: 0px;

    .signup-cta {
      display: none;
      .label {
        color: #BDBDBD;
        padding-right: 6px;
      }
    }
  }
}

// Social Login
.social {
  &-login {
    display: flex;
    width: 312px;
    height: 245px;
    flex-direction: column;
    justify-content: space-between;

    * {
      font-weight: 700;
    }

    @include mobile {
      width: 100%;
      max-width: 310px;
    }

    a {
      border: none;
      flex-grow: 0;
    }
  }

  &__kakao {
    background-color: #FEE500;
    color: rgba(0, 0, 0, 0.85);
    .icon {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath width='22px' height='10px' fill-rule='evenodd' d='M17.999,0.936 C8.58,0.936 0.0,7.192 0.0,14.909 C0.0,19.706 3.116,23.938 7.862,26.454 L5.865,33.784 C5.689,34.433 6.426,34.950 6.993,34.574 L15.746,28.768 C16.485,28.840 17.236,28.881 17.999,28.881 C27.941,28.881 35.999,22.625 35.999,14.909 C35.999,7.192 27.941,0.936 17.999,0.936 '/%3E%3C/svg%3E");
      background-size: 20px;
    }
  }

  &__naver {
    background-color: #03C75A;
    color: white;
    .icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.1 12'%3E%3Cpath style='fill:%23fff' d='M8.21 6.42 3.72 0H0v12h3.9V5.58L8.38 12h3.72V0H8.21v6.42z'/%3E%3C/svg%3E");
      background-size: 17px;
    }
  }

  &__google {
    background-color: #fff;
    color: #4285F4;
    border: 1px solid #BDBDBD !important;
    .icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='46' height='46'%3E%3Cdefs%3E%3Cfilter x='-50%25' y='-50%25' width='200%25' height='200%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0' in='shadowBlurOuter1' result='shadowMatrixOuter1'/%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter2'/%3E%3CfeGaussianBlur stdDeviation='.5' in='shadowOffsetOuter2' result='shadowBlurOuter2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0' in='shadowBlurOuter2' result='shadowMatrixOuter2'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='shadowMatrixOuter2'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3Crect id='b' x='0' y='0' width='40' height='40' rx='2'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(3 3)' filter='url(%23a)'%3E%3Cuse fill='%23FFF' xlink:href='%23b'/%3E%3Cuse xlink:href='%23b'/%3E%3Cuse xlink:href='%23b'/%3E%3Cuse xlink:href='%23b'/%3E%3C/g%3E%3Cpath d='M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z' fill='%234285F4'/%3E%3Cpath d='M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 23 32Z' fill='%2334A853'/%3E%3Cpath d='M17.964 24.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 14 23c0 1.452.348 2.827.957 4.042l3.007-2.332Z' fill='%23FBBC05'/%3E%3Cpath d='M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71Z' fill='%23EA4335'/%3E%3Cpath d='M14 14h18v18H14V14Z'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 54px;
    }
  }

  &__apple {
    background-color: #000000;
    color: #fff;
    .icon {
      background-image: url("data:image/svg+xml,%3Csvg data-name='Layer 2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.97 15.94'%3E%3Cpath d='M319.15-124.4a3.59 3.59 0 0 0-1.73 3 3.52 3.52 0 0 0 2.14 3.22 8.38 8.38 0 0 1-1.1 2.26c-.68 1-1.39 2-2.47 2s-1.37-.63-2.62-.63-1.65.65-2.64.65-1.69-.91-2.48-2a9.78 9.78 0 0 1-1.66-5.28c0-3.1 2-4.74 4-4.74 1.06 0 1.94.69 2.6.69s1.61-.73 2.81-.73a3.76 3.76 0 0 1 3.16 1.58Zm-3.73-2.89a3.6 3.6 0 0 0 .84-2.22 1.51 1.51 0 0 0 0-.32 3.53 3.53 0 0 0-2.34 1.21 3.41 3.41 0 0 0-.88 2.15 1.4 1.4 0 0 0 0 .29h.22a3.1 3.1 0 0 0 2.16-1.13Z' transform='translate(-306.59 129.83)' style='fill:%23fff'/%3E%3C/svg%3E");
      background-size: 16px;
    }
  }
}

// Button
.button {
  display: inline-flex;
  text-decoration: none;


  // Button Type
  &__default {
    border: 1px solid #BDBDBD;
  }
  &__icon-text {
    border: 1px solid #BDBDBD;
    justify-content: start;
    align-items: center;
    vertical-align: center;
    border-radius: 7.5px;
    font-size: 14px;
    flex-grow: 1;
    padding: 18px 22px;
    height: 54px;

    .icon {
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      justify-content: start;
      flex-shrink: 1;
    }
    .text {
      flex-grow: 1;
    }
  }

  &__link {
    &__primary {
      color: #21CEFF;
    }
  }
}

.ease-out {
  opacity: 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform-origin: 1% 1%;
  transform: scale(1.1);
}

</style>
