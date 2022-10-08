<template>
  <div @click="modalControl(false)">
    <div class="header">
      <div class="top-nav">
        <div class="app-cta">
          <span class="app-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_16_254)">
                <path d="M20.6338 0H3.3662C1.5071 0 0 1.5071 0 3.3662V20.6338C0 22.4929 1.5071 24 3.3662 24H20.6338C22.4929 24 24 22.4929 24 20.6338V3.3662C24 1.5071 22.4929 0 20.6338 0Z" fill="#21CEFF"/>
                <path d="M10.5362 18.3044C10.5362 18.3044 10.5362 17.1969 9.42871 17.1969H10.5362V18.3044Z" fill="white"/>
                <path d="M14.4302 17.1973C14.4302 17.1973 13.3228 17.1973 13.3228 18.3047V17.1973H14.4302Z" fill="white"/>
                <path d="M13.3227 13.6422H10.5361V23.6173H13.3227V13.6422Z" fill="white"/>
                <path d="M18.4111 6.43848H5.58924C4.60298 6.43848 3.80347 7.23799 3.80347 8.22425V15.4155C3.80347 16.4017 4.60298 17.2012 5.58924 17.2012H18.4111C19.3973 17.2012 20.1969 16.4017 20.1969 15.4155V8.22425C20.1969 7.23799 19.3973 6.43848 18.4111 6.43848Z" fill="white"/>
                <path d="M12.5133 19.3748L13.4235 18.2006C13.9308 17.5382 13.0526 16.8232 12.5089 17.3948C12.0333 17.9973 10.9807 19.329 10.5125 19.9177L12.5015 22.338L13.5905 22.5313L14.3216 22.0257" fill="#21CEFF"/>
                <path d="M13.6487 22.7982L12.3656 22.5707L10.1876 19.9205L10.3149 19.7606C10.7956 19.1567 11.8869 17.7755 12.3107 17.2383L12.3258 17.2208C12.7052 16.8219 13.2169 16.8804 13.5259 17.1444C13.8241 17.3992 13.982 17.8863 13.6238 18.3542L12.7126 19.5296C12.6271 19.6397 12.4686 19.6599 12.3585 19.5744C12.2484 19.4889 12.2282 19.3304 12.3137 19.2203L13.2239 18.0462C13.3929 17.8257 13.3216 17.6338 13.198 17.5284C13.0805 17.4281 12.8806 17.3776 12.6991 17.5614C12.3043 18.062 11.3584 19.2587 10.837 19.9154L12.6372 22.1061L13.5323 22.265L14.1783 21.8183C14.293 21.7389 14.4502 21.7678 14.5293 21.8823C14.6085 21.9967 14.5798 22.1543 14.4654 22.2334L13.6487 22.7982Z" fill="white"/>
                <path d="M13.3749 23.9779C13.7091 23.7503 13.9885 23.4514 14.2063 23.1107C14.3555 22.8778 14.5433 22.5842 14.5433 22.5842C14.8755 21.944 14.1249 21.3785 13.6307 21.8726" fill="#21CEFF"/>
                <path d="M9.36996 22.4782C9.18482 21.9312 9.19593 21.3161 9.35212 20.8324L9.57295 20.1952C9.66484 19.8572 9.62714 19.4126 9.61873 19.0625L9.48341 17.2016C9.47398 16.8125 9.76852 16.4735 10.157 16.4503C10.565 16.4257 10.9087 16.7445 10.9184 17.1495L11.1126 19.836L14.356 22.6976L13.3751 23.9785L10.5121 24.0004" fill="#21CEFF"/>
                <path d="M12.6907 24.0001L12.8869 23.887C13.2518 23.6769 13.5703 23.3921 13.8066 23.0437C13.8221 23.0212 13.8369 22.9983 13.852 22.975L14.1459 22.5314C14.1809 22.4765 14.2327 22.3887 14.2624 22.3308C14.325 22.2072 14.3216 22.0258 14.1839 21.9305C14.086 21.8629 13.8904 21.8322 13.7359 21.984C13.6544 22.0638 13.5524 22.0658 13.4535 22.0093C13.3006 21.9218 13.2818 21.7238 13.3966 21.609C13.7012 21.3044 14.1755 21.3424 14.5088 21.5865C14.8535 21.839 14.8339 22.3005 14.6256 22.701L14.6141 22.7209L14.2772 23.2474C14.091 23.5382 13.8712 23.7903 13.6214 24.0004" fill="white"/>
                <path d="M10.1131 24.0003C9.66807 23.626 9.32236 23.1235 9.13116 22.5593C8.93828 21.9901 8.93121 21.3155 9.11231 20.755L9.11399 20.7499L9.33179 20.1215C9.39574 19.8788 9.38363 19.5492 9.37285 19.2577C9.3705 19.1941 9.36814 19.1322 9.3668 19.0732L9.23114 17.17C9.21835 16.6442 9.627 16.1914 10.142 16.1605C10.408 16.1446 10.6618 16.2349 10.8573 16.4146C11.0519 16.5934 11.163 16.8367 11.1707 17.1006L11.365 19.8209C11.3734 19.9599 11.2674 20.0797 11.1283 20.0882C10.9896 20.0966 10.8695 19.9905 10.8611 19.8515L10.6661 17.1178C10.6631 16.9902 10.6096 16.8728 10.5157 16.7862C10.4218 16.7001 10.3002 16.6566 10.1723 16.6644C9.92659 16.6792 9.73169 16.8983 9.73573 17.1538L9.87139 19.0567C9.87273 19.1153 9.87509 19.1762 9.87745 19.2392C9.88957 19.5698 9.90337 19.9444 9.81719 20.2618L9.81214 20.2783L9.59233 20.9129C9.44422 21.3737 9.45095 21.9285 9.60984 22.3977C9.82864 23.0433 10.2858 23.6886 10.8641 24.001" fill="white"/>
                <path d="M12.8478 20.7982L13.7022 19.7819C14.2041 19.1881 13.3861 18.3964 12.8401 18.9885L12.3638 19.5678" fill="#21CEFF"/>
                <path d="M12.8475 21.0506C12.7902 21.0506 12.7323 21.0311 12.6852 20.9914C12.5785 20.9015 12.5647 20.7423 12.6546 20.6356L13.7011 19.3948C13.8846 19.178 13.7701 18.976 13.6735 18.8909C13.6204 18.8437 13.4308 18.7084 13.2221 18.9299L12.5583 19.7277C12.4698 19.8354 12.3106 19.8509 12.2028 19.7624C12.0951 19.6738 12.0796 19.5146 12.1682 19.4069L12.8461 18.5923C13.2151 18.1924 13.7092 18.2493 14.0071 18.5122C14.3124 18.7818 14.4441 19.2968 14.0866 19.72L13.0404 20.9601C12.9905 21.0193 12.9188 21.0499 12.8471 21.0499L12.8475 21.0506Z" fill="white"/>
                <path d="M13.4837 22.0742L14.0496 21.2993C14.1068 21.2209 14.1499 21.1323 14.1687 21.0371C14.3007 20.4403 13.5282 19.9986 13.1067 20.4901L12.8236 20.823" fill="#21CEFF"/>
                <path d="M13.3635 22.2748C13.3117 22.2748 13.2598 22.259 13.2147 22.2263C13.1023 22.1442 13.0774 21.986 13.1599 21.8736L13.7856 21.1276C13.8186 21.0768 13.8503 21.0192 13.861 20.9654L13.862 20.9596C13.9041 20.7688 13.8482 20.6385 13.7143 20.5715C13.6577 20.5432 13.4601 20.4655 13.2985 20.654L13.0161 20.9859C12.9259 21.0923 12.7663 21.105 12.6603 21.0148C12.5539 20.9246 12.5411 20.7651 12.6314 20.659L12.9145 20.3261C13.1767 20.0201 13.5793 19.9397 13.9398 20.1198C14.3108 20.3049 14.4417 20.6711 14.3555 21.0657C14.3303 21.1912 14.2758 21.3124 14.1929 21.4252L13.5672 22.1711C13.5177 22.2388 13.4409 22.2748 13.3632 22.2748H13.3635Z" fill="white"/>
                <path d="M7 9V15H8.65892V9" stroke="#21CEFF" stroke-width="0.996678" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.7708 9V15" stroke="#21CEFF" stroke-width="0.996678" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.7673 9H13.1527V15L15.2363 14.5698" stroke="#21CEFF" stroke-width="0.996678" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5891 11.8694L16.8842 12.0111" stroke="#21CEFF" stroke-width="0.996678" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.18164 12.0111L8.47677 12.1534" stroke="#21CEFF" stroke-width="0.996678" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8842 9V15" stroke="#21CEFF" stroke-width="0.996678" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_16_254">
                  <rect width="24" height="24.0003" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span class="app-text">
            앱 다운로드
          </span>
        </div>
        <div class="nav-menu">
          <span class="button" @click="modalOpen(true)">로그인</span>
          <a href="" class="button button__link__primary">회원가입</a>
          <a href="" class="button">이벤트</a>
          <a href="" class="button">기획전</a>
          <a href="" class="button">고객센터</a>
        </div>
      </div>
      <div class="nav-border"></div>
      <div class="search">
        <a href="/" class="logo">
          <svg width="173" height="53" viewBox="0 0 173 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_252)">
              <path d="M3.74377 3.74365V48.8177H16.2061V3.74365" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32.071 3.74365V48.8177" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M62.0954 3.74365H49.9658V48.8177L65.6186 45.5856" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M68.2682 25.2949L78.0018 26.364" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.10803 26.3639L14.8416 27.4288" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M96.3667 25.2949L106.096 26.364" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M78.002 3.74365V48.8177" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M95.0023 3.74365V48.8177H107.465V3.74365" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M123.33 3.74365V48.8177" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M153.354 3.74365H141.224V48.8177L156.877 45.5856" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M159.527 25.2949L169.256 26.364" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M169.256 3.74365V48.8177" stroke="#21CEFF" stroke-width="7.48738" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_15_252">
                <rect width="173" height="52.5614" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <search-engine></search-engine>
        <div class="trending">
          <ul>
            <li class="trending-item">
              <a href="">
                <span class="rank">
                <span class="rank-num">1</span>
              </span>
                <span class="keyword">스마트폰</span>
                <span class="fluctuate-value fluctuate-none">-</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-nav">
        <div class="left-menu">
          <a href="" class="category-expand button button__icon-text button__link">
          <span class="icon">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1.77273" x2="18" y2="1.77273" stroke="#030303" stroke-width="2.45455"/>
              <line y1="8.31814" x2="18" y2="8.31814" stroke="#030303" stroke-width="2.45455"/>
              <line y1="14.8637" x2="18" y2="14.8637" stroke="#030303" stroke-width="2.45455"/>
            </svg>

          </span>
            <span class="text">카테고리</span>
          </a>
        </div>
        <div class="right-menu">
          <a href="" class="upload button button__icon-text button__link__primary">
          <span class="icon">
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4923 8.06466H20.7491C20.9461 8.06486 21.136 8.13816 21.282 8.27037C21.428 8.40257 21.5197 8.58427 21.5394 8.78026L22.0245 13.6304H20.4247L20.0271 9.65488H17.4923V12.0402C17.4923 12.2511 17.4086 12.4533 17.2595 12.6024C17.1103 12.7515 16.9081 12.8353 16.6972 12.8353C16.4864 12.8353 16.2841 12.7515 16.135 12.6024C15.9859 12.4533 15.9021 12.2511 15.9021 12.0402V9.65488H9.54125V12.0402C9.54125 12.2511 9.45748 12.4533 9.30837 12.6024C9.15926 12.7515 8.95702 12.8353 8.74614 12.8353C8.53527 12.8353 8.33303 12.7515 8.18392 12.6024C8.0348 12.4533 7.95103 12.2511 7.95103 12.0402V9.65488H5.41464L4.14246 22.3766H12.7217V23.9668H3.26307C3.15202 23.9667 3.04222 23.9434 2.94075 23.8982C2.83928 23.8531 2.74838 23.7872 2.67393 23.7048C2.59947 23.6224 2.5431 23.5253 2.50845 23.4198C2.4738 23.3143 2.46163 23.2027 2.47274 23.0922L3.90393 8.78026C3.92363 8.58427 4.01537 8.40257 4.16139 8.27037C4.3074 8.13816 4.49729 8.06486 4.69427 8.06466H7.95103V7.50968C7.95103 4.75224 10.0756 2.4989 12.7217 2.4989C15.3678 2.4989 17.4923 4.75224 17.4923 7.50968V8.06625V8.06466ZM15.9021 8.06466V7.50968C15.9021 5.61096 14.4677 4.08912 12.7217 4.08912C10.9756 4.08912 9.54125 5.61096 9.54125 7.50968V8.06625H15.9021V8.06466ZM20.9065 20.0867L19.0826 18.2643V23.9668C19.0826 24.1777 18.9988 24.38 18.8497 24.5291C18.7006 24.6782 18.4983 24.7619 18.2874 24.7619C18.0766 24.7619 17.8743 24.6782 17.7252 24.5291C17.5761 24.38 17.4923 24.1777 17.4923 23.9668V18.2643L15.6699 20.0867C15.5966 20.1626 15.5089 20.2232 15.4119 20.2649C15.3149 20.3066 15.2105 20.3285 15.1049 20.3294C14.9994 20.3303 14.8947 20.3102 14.797 20.2702C14.6992 20.2303 14.6105 20.1712 14.5358 20.0966C14.4612 20.0219 14.4021 19.9331 14.3621 19.8354C14.3222 19.7377 14.302 19.633 14.303 19.5274C14.3039 19.4219 14.3258 19.3175 14.3675 19.2205C14.4092 19.1235 14.4697 19.0358 14.5457 18.9624L17.7261 15.782C17.8752 15.6329 18.0774 15.5492 18.2882 15.5492C18.4991 15.5492 18.7013 15.6329 18.8504 15.782L22.0308 18.9624C22.1068 19.0358 22.1673 19.1235 22.209 19.2205C22.2507 19.3175 22.2726 19.4219 22.2735 19.5274C22.2744 19.633 22.2543 19.7377 22.2143 19.8354C22.1744 19.9331 22.1153 20.0219 22.0407 20.0966C21.966 20.1712 21.8772 20.2303 21.7795 20.2702C21.6818 20.3102 21.5771 20.3303 21.4715 20.3294C21.366 20.3285 21.2616 20.3066 21.1646 20.2649C21.0676 20.2232 20.9799 20.1626 20.9065 20.0867Z" fill="#21CEFF" stroke="#21CEFF" stroke-width="0.227583"/>
            </svg>
          </span>
            <span class="text">경매 등록하기</span>
          </a>
          <span class="divider">|</span>
          <a href="" class="favorite button button__icon-text button__link">
          <span class="icon">
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3116 7.53467V12.8163C20.7803 12.7569 20.2427 12.7873 19.7214 12.9064V7.53467C19.7214 7.32379 19.6376 7.12155 19.4885 6.97244C19.3394 6.82333 19.1372 6.73956 18.9263 6.73956H16.6693C16.241 7.37883 15.5126 7.79971 14.6857 7.79971H10.9752C10.1483 7.79971 9.41998 7.37883 8.99168 6.73956H6.73463C6.52375 6.73956 6.32152 6.82333 6.1724 6.97244C6.02329 7.12155 5.93952 7.32379 5.93952 7.53467V21.8466C5.93952 22.2855 6.29573 22.6417 6.73463 22.6417H13.933L15.5232 24.232H6.73463C6.102 24.232 5.49529 23.9806 5.04795 23.5333C4.60061 23.086 4.3493 22.4793 4.3493 21.8466V7.53467C4.3493 6.90204 4.60061 6.29532 5.04795 5.84799C5.49529 5.40065 6.102 5.14934 6.73463 5.14934H8.60473C8.66992 4.56625 8.94773 4.02764 9.38504 3.63649C9.82235 3.24533 10.3885 3.02907 10.9752 3.02905H14.6857C15.2724 3.02907 15.8386 3.24533 16.2759 3.63649C16.7132 4.02764 16.991 4.56625 17.0562 5.14934H18.9263C19.2395 5.14934 19.5497 5.21104 19.8391 5.33091C20.1285 5.45079 20.3915 5.62649 20.613 5.84799C20.8345 6.06949 21.0102 6.33244 21.1301 6.62184C21.2499 6.91125 21.3116 7.22142 21.3116 7.53467ZM17.0657 5.25112L17.071 5.41438C17.071 5.35925 17.0689 5.30518 17.0657 5.25112ZM10.9752 4.61927C10.7643 4.61927 10.5621 4.70304 10.413 4.85215C10.2639 5.00126 10.1801 5.2035 10.1801 5.41438C10.1801 5.62525 10.2639 5.82749 10.413 5.97661C10.5621 6.12572 10.7643 6.20949 10.9752 6.20949H14.6857C14.8966 6.20949 15.0988 6.12572 15.2479 5.97661C15.3971 5.82749 15.4808 5.62525 15.4808 5.41438C15.4808 5.2035 15.3971 5.00126 15.2479 4.85215C15.0988 4.70304 14.8966 4.61927 14.6857 4.61927H10.9752Z" fill="#030303"/>
              <path d="M18.1322 24.2495L18.1303 24.2477L13.4572 19.5745L13.4573 19.5745L13.4487 19.5662C13.1723 19.2982 12.9519 18.9779 12.8005 18.6239C12.649 18.27 12.5695 17.8894 12.5665 17.5044C12.5635 17.1195 12.6371 16.7377 12.783 16.3815C12.929 16.0252 13.1443 15.7015 13.4165 15.4292C13.5161 15.3296 13.7438 15.171 14.0043 15.0122C14.1235 14.9396 14.2334 14.8764 14.3136 14.8314C14.3349 14.8195 14.3539 14.8089 14.3703 14.7999C14.3884 14.7948 14.4094 14.789 14.4329 14.7825C14.5216 14.7583 14.6442 14.7261 14.7801 14.6943C15.0771 14.6246 15.3507 14.5777 15.4915 14.5788C15.8765 14.5817 16.2571 14.6612 16.6111 14.8126C16.965 14.9639 17.2854 15.1842 17.5534 15.4606L17.5534 15.4606L17.5617 15.469L17.5999 15.5071L18.146 16.0533L18.6922 15.5071L18.7304 15.469L18.7304 15.469L18.7334 15.4659C19.0025 15.1938 19.3226 14.9776 19.6755 14.8297C20.0284 14.6817 20.407 14.605 20.7896 14.6039C21.1723 14.6029 21.5513 14.6774 21.905 14.8234L22.1979 14.1135L21.905 14.8234C22.2587 14.9693 22.5801 15.1837 22.8507 15.4542C23.1212 15.7248 23.3356 16.0462 23.4816 16.3999C23.6275 16.7536 23.702 17.1327 23.701 17.5153C23.6999 17.8979 23.6232 18.2765 23.4752 18.6294C23.3273 18.9823 23.1111 19.3024 22.839 19.5715L22.839 19.5715L22.836 19.5745L18.1618 24.2476L18.1599 24.2495C18.1581 24.2514 18.1559 24.2528 18.1535 24.2538L18.1535 24.2538C18.1512 24.2548 18.1486 24.2553 18.146 24.2553C18.1435 24.2553 18.1409 24.2548 18.1385 24.2538L17.8417 24.9669L18.1385 24.2538C18.1361 24.2528 18.134 24.2514 18.1322 24.2495Z" stroke="#FF3303" stroke-width="1.54478"/>
            </svg>
          </span>
            <span class="text">찜 목록</span>
          </a>
          <span class="divider">|</span>
          <a href="" class="mypage button button__icon-text button__link">
          <span class="icon">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4256 9.54124C17.4256 10.6539 16.9836 11.7209 16.1969 12.5077C15.4101 13.2944 14.3431 13.7364 13.2304 13.7364C12.1178 13.7364 11.0508 13.2944 10.264 12.5077C9.47729 11.7209 9.0353 10.6539 9.0353 9.54124C9.0353 8.42862 9.47729 7.36157 10.264 6.57482C11.0508 5.78808 12.1178 5.34609 13.2304 5.34609C14.3431 5.34609 15.4101 5.78808 16.1969 6.57482C16.9836 7.36157 17.4256 8.42862 17.4256 9.54124ZM14.7618 11.0726C15.168 10.6665 15.3962 10.1156 15.3962 9.54124C15.3962 8.96685 15.168 8.41599 14.7618 8.00984C14.3557 7.60369 13.8048 7.37551 13.2304 7.37551C12.6561 7.37551 12.1052 7.60369 11.699 8.00984C11.2929 8.41599 11.0647 8.96685 11.0647 9.54124C11.0647 10.1156 11.2929 10.6665 11.699 11.0726C12.1052 11.4788 12.6561 11.707 13.2304 11.707C13.8048 11.707 14.3557 11.4788 14.7618 11.0726Z" fill="#030303" stroke="white" stroke-width="0.0908696"/>
              <path d="M13.2994 16.9168C12.0981 16.9159 10.9144 17.2053 9.849 17.7602C8.78358 18.3151 7.86796 19.1191 7.18005 20.1039L7.15588 20.1385L7.18862 20.1652C8.89536 21.5546 11.0297 22.3117 13.2304 22.3084C15.4701 22.3115 17.6396 21.5273 19.3596 20.0927L19.392 20.0657L19.3675 20.0314C18.6767 19.067 17.7657 18.2813 16.7104 17.7396C15.655 17.1979 14.4856 16.9159 13.2994 16.9168ZM13.2994 16.9168L13.2994 16.9622L13.2993 16.9168C13.2993 16.9168 13.2994 16.9168 13.2994 16.9168ZM5.6761 18.625L5.71237 18.6713L5.74804 18.6245C6.6335 17.4617 7.77582 16.5193 9.08574 15.871C10.3957 15.2228 11.8377 14.8861 13.2993 14.8874H13.2994C14.742 14.886 16.166 15.214 17.4627 15.8462C18.7594 16.4785 19.8947 17.3984 20.7821 18.5359L20.8183 18.5823L20.854 18.5355C21.777 17.325 22.3984 15.9121 22.6669 14.4138C22.9354 12.9155 22.8432 11.3747 22.398 9.91911C21.9528 8.46347 21.1674 7.13476 20.1068 6.04292C19.0461 4.95109 17.7407 4.12752 16.2986 3.64035C14.8565 3.15318 13.3191 3.01643 11.8136 3.2414C10.3081 3.46637 8.87784 4.0466 7.64113 4.93408C6.40441 5.82155 5.39681 6.99077 4.70168 8.34498C4.00656 9.69918 3.6439 11.1995 3.6437 12.7216C3.6437 14.9479 4.40321 16.9974 5.6761 18.625ZM1.61428 12.7217C1.61428 6.30637 6.81515 1.10549 13.2304 1.10549C19.6457 1.10549 24.8466 6.30637 24.8466 12.7217C24.8466 19.1369 19.6457 24.3378 13.2304 24.3378C6.81515 24.3378 1.61428 19.1369 1.61428 12.7217Z" fill="#030303" stroke="white" stroke-width="0.0908696"/>
            </svg>
          </span>
            <span class="text">마이페이지</span>
          </a>
        </div>
      </div>
      <div class="nav-border"></div>
      <modal v-if="this.showModal"></modal>
    </div>
  </div>
</template>

<script>
import Modal from './common/LoginPopup.vue';
import {mapGetters, mapMutations} from 'vuex';
import SearchEngine from "@/components/SearchEngine";
import {initFirebaseAuth, firebaseSignOut} from "@/firebase";
import {requestSocialSignin} from "@/api";

export default {
  name: "login",
  components: {
    Modal,
    SearchEngine,
  },
  methods: {
    ...mapMutations({
      modalControl: 'setSearchModal',
      modalOpen: 'setShowLoginPopup'
    }),
    signOut() {
      firebaseSignOut();
    }
  },
  computed: {
    ...mapGetters({
      showModal: 'getModalState',
    })
  },
  created() {
    if (localStorage.getItem("firebaseAuthData") === null) {
      initFirebaseAuth();
    } else {
      console.log("로그인 데이터 확인");
      const accountData = JSON.parse(localStorage.getItem("firebaseAuthData"));
      this.$emit('setAccountData', accountData);
      console.log(accountData[0]);
      requestSocialSignin("google", accountData[0]);
    }
  }

}

</script>

<style scoped lang="scss">
@import "src/css/variables";
* {
  box-sizing: border-box;
  font-family: Pretendard, Helvetica, Arial, sans-serif;
  font-weight: 600;
}
// Header
.header {
  display: flex;
  width: 100%;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.nav-border {
  height: 1px;
  width: 100%;
  background: linear-gradient(to bottom, transparent 50%, #BDBDBD 50%);
}


// TOP-NAV
.top-nav {
  width: 100%;
  max-width: 1194px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .app {
    &-cta {
      display: flex;
      height: 24px;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 11px;
      cursor: pointer;
    }

    &-text {
      margin-left: 12px;
      font-size: 16px;
      color: #888888;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 8px;

    & > * {
      margin-left: 22px;
      cursor: pointer;
    }

    & > .button {
      font-weight: 500;
    }
  }
}

// SEARCH
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 51px;
  padding-bottom: 31px;

  logo {
    cursor: pointer;
  }

  &-box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 582px;
    height: 50px;
    border: 3px solid #38BBF3;
    margin-left: 75px;
  }
  &-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    padding: 12px 19px;
    border: 0;
    outline: 0;

    &::placeholder {
      color: #707070;
    }
  }

  &-icon {
    margin-right: 19px;
    cursor: pointer;
  }

  .trending {
    padding-left: 84px;

    li {
      display: flex;
    }

    a {
      display: flex;
      text-decoration: none;
    }

    .ul, .li {
      list-style: none;
    }
    .rank {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      background-color: #38BBF3;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;

      &-num {
        font-weight: 800;
        position: relative;
        top: 4px;
        left: 1.5px;
      }
    }
    .keyword {
      display: flex;
      width: 115px;
      font-size: 12px;
      color: #030303;
      padding-left: 10px;
      text-align: center;
      justify-content: center;
    }
    .fluctuate {
      &-value {
        display: flex;
        justify-content: center;
      }
    }
  }
}

// BOTTOM-NAV
.bottom-nav {
  width: 100%;
  max-width: 1194px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    .divider {
      color: #BDBDBD;
      font-size: 25px;
      font-weight: 400;
      padding: 0 12px;
    }
  }

  .button__icon-text {
    flex-grow: 0;
    width: auto;
    padding: 0;

    .text {
      padding-left: 12px;
      font-size: 20px;
    }

    .icon {
      width: 25px;
      height: 25px;
    }
  }

  a.category-expand {
    .icon {
      width: 18px;
      height: 18px;
    }
  }
}

// Button
.button {
  display: inline-flex;
  text-decoration: none;
  color: #030303;

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
    border: 0;
    &__primary {
      color: #21CEFF;
      border: 0;
    }
  }
}
</style>
