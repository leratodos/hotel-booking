<script setup>

const navList = [
  {
    name: "home"
  },
  {
    name: "booking_schedule"
  },
  {
    name: "booking_schedule"
  }
]
</script>
<template>
  <header>
    <div class="header-container">
      <div>
        <div class="logo">
          <svg viewBox="0 0 165 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.694 99.242H55.8V118.949H59.694V99.242Z" fill="url(#paint0_linear_503_5)"/>
            <path d="M43.846 99.242H39.952V118.949H43.846V99.242Z" fill="url(#paint1_linear_503_5)"/>
            <path d="M91.536 99.242H87.642V118.949H91.536V99.242Z" fill="url(#paint2_linear_503_5)"/>
            <path d="M75.6879 99.242H71.7939V118.949H75.6879V99.242Z" fill="url(#paint3_linear_503_5)"/>
            <path d="M123.233 99.242H119.339V118.949H123.233V99.242Z" fill="url(#paint4_linear_503_5)"/>
            <path d="M107.384 99.242H103.49V118.949H107.384V99.242Z" fill="url(#paint5_linear_503_5)"/>
            <path d="M69.979 0.173004H66.085V23.019H69.979V0.173004Z" fill="url(#paint6_linear_503_5)"/>
            <path d="M83.539 0.173004H79.645V23.019H83.539V0.173004Z" fill="url(#paint7_linear_503_5)"/>
            <path d="M97.099 0.173004H93.205V23.019H97.099V0.173004Z" fill="url(#paint8_linear_503_5)"/>
            <path d="M56.42 0.173004H52.526V23.019H56.42V0.173004Z" fill="url(#paint9_linear_503_5)"/>
            <path d="M110.658 0.173004H106.764V23.019H110.658V0.173004Z" fill="url(#paint10_linear_503_5)"/>
            <path d="M7.77498 42.086H10.449V84.925H7.77498V67.437H3.06798V84.925H0.393982V42.086H3.06798V64.709H7.77498V42.086Z" fill="#DFCC97"/>
            <path d="M39.329 84.925L38.687 77.598H35.157L34.515 84.925H31.841L35.585 42.086H38.259L42.003 84.925H39.329ZM35.424 74.924H38.472L36.921 57.542L35.424 74.924Z" fill="#DFCC97"/>
            <path d="M73.45 60.323C73.45 61.82 72.915 62.997 72.006 63.8C71.952 63.853 71.899 63.906 71.845 63.96C71.899 64.014 71.952 64.066 72.006 64.12C72.915 64.923 73.45 66.099 73.45 67.597V84.925H70.722V67.971C70.722 67.276 70.454 66.688 70.08 66.26C69.652 65.779 69.01 65.565 68.262 65.511H66.069V84.925H63.395V42.139H68.155C69.92 42.139 71.043 42.568 72.006 43.423C72.915 44.225 73.45 45.402 73.45 46.9V60.323ZM66.069 44.386V62.837H68.155C68.904 62.783 69.652 62.569 70.08 62.088C70.454 61.66 70.722 61.072 70.722 60.323V46.899C70.722 46.15 70.454 45.562 70.08 45.133C69.652 44.652 68.903 44.438 68.155 44.385L66.069 44.386Z" fill="#DFCC97"/>
            <path d="M104.896 60.323C104.896 61.82 104.361 62.997 103.452 63.8C103.399 63.853 103.346 63.906 103.292 63.96C103.346 64.014 103.399 64.066 103.452 64.12C104.361 64.923 104.896 66.099 104.896 67.597V84.925H102.168V67.971C102.168 67.276 101.9 66.688 101.526 66.26C101.098 65.779 100.457 65.565 99.708 65.511H97.515V84.925H94.841V42.139H99.601C101.367 42.139 102.49 42.568 103.452 43.423C104.361 44.225 104.896 45.402 104.896 46.9V60.323ZM97.516 44.386V62.837H99.602C100.351 62.783 101.1 62.569 101.528 62.088C101.902 61.66 102.17 61.072 102.17 60.323V46.899C102.17 46.15 101.902 45.562 101.528 45.133C101.1 44.652 100.351 44.438 99.602 44.385L97.516 44.386Z" fill="#DFCC97"/>
            <path d="M128.963 44.813V62.836H132.815V65.51H128.963V82.25H134.847V84.924H126.289V42.085H134.847V44.813H128.963Z" fill="#DFCC97"/>
            <path d="M158.912 82.251H164.688V84.925H156.238V42.086H158.912V82.251Z" fill="#DFCC97"/>
            <defs>
              <linearGradient id="paint0_linear_503_5" x1="2.45172" y1="100.588" x2="183.547" y2="128.449" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint1_linear_503_5" x1="6.50579" y1="103.65" x2="187.604" y2="131.511" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint2_linear_503_5" x1="-5.69463" y1="94.4362" x2="175.401" y2="122.297" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint3_linear_503_5" x1="-1.6408" y1="97.498" x2="179.457" y2="125.359" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint4_linear_503_5" x1="-13.806" y1="88.3119" x2="167.293" y2="116.173" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint5_linear_503_5" x1="-9.75106" y1="91.3739" x2="171.348" y2="119.235" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint6_linear_503_5" x1="65.9296" y1="-155.866" x2="157.095" y2="210.966" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint7_linear_503_5" x1="78.1297" y1="-161.338" x2="169.295" y2="205.494" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint8_linear_503_5" x1="90.3294" y1="-166.809" x2="181.494" y2="200.023" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint9_linear_503_5" x1="51.0103" y1="-161.338" x2="142.176" y2="205.494" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
              <linearGradient id="paint10_linear_503_5" x1="106.609" y1="-155.866" x2="197.774" y2="210.966" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0C492"/>
                <stop offset="0.5212" stop-color="#F2E6D0"/>
                <stop offset="0.9984" stop-color="#D5C07C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <nav class="nav-bar d-flex">
          <ul class="nav-list">
            <li v-for="el in navList" class="nav-list-item">
              <a href="" class="item-link">
                {{el.name}}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div class="search">
          <label class="form-label" for="field-search">
            search
          </label>
          <input
              id="field-search"
              placeholder="search"
              class="form-control"
              type="text"
          />
        </div>

<!--        <div @click="store.toggleThemeMode()">-->
<!--          <a-->
<!--              class="nav-link style-switcher-toggle hide-arrow"-->
<!--              href="javascript:void(0);"-->
<!--          >-->
<!--            <i-->
<!--                class="fa-regular"-->
<!--                :class="store.darkMode ? 'fa-sun' : 'fa-moon'"-->
<!--            ></i>-->
<!--          </a>-->
<!--        </div>-->
        <div>
          <a
              href="javascript:void(0);"
          >
<!--              <span class="user-name text-lowercase">{{-->
<!--                  authStore.profile.name-->
<!--                }}</span>-->
            <div class="avatar">
<!--              <div-->
<!--                  id="navbar-avatar-box"-->
<!--                  class="img"-->
<!--                  :style="{-->
<!--                    backgroundImage: `url(${-->
<!--                      authStore.profile.avatar_url || '/assets/img/basic-ava.png'-->
<!--                    })`,-->
<!--                  }"-->
<!--              ></div>-->
              <div
                  id="navbar-avatar-box"
                  class="img"
                  style="background-image: url('/assets/img/basic-ava.png')"
              ></div>

            </div>
          </a>
        </div>
      </div>

    </div>
  </header>
</template>