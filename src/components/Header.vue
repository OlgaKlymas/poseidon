<template>
  <header class="header">
    <div class="header__left">
      <div class="logo">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8797 0.776306C11.1295 3.52359 12.5031 7.02012 13.0026 7.76938C12.8777 7.64451 11.8787 7.145 11.7538 7.26988C11.629 7.26988 11.5041 7.51963 11.5041 7.76938L12.0036 23.7536C12.0036 25.3769 14.8757 23.7536 16.3743 23.0043C17.4981 22.3799 17.1235 22.255 16.7489 21.0063C15.3753 17.0102 14.1265 12.7644 14.3762 9.01815C15.0006 11.3908 17.2484 14.1381 17.7479 14.5127C17.3733 14.5127 16.7489 14.1381 16.3743 14.0132C15.8748 13.7634 15.7499 13.6386 15.8748 14.3878C16.4991 17.3849 18.9967 21.8804 21.2444 24.2531C21.3693 24.5028 21.2444 24.5028 20.8698 24.6277C16.2494 25.1272 12.1285 26.7506 12.2533 31.2461L12.3782 33.9934C11.3792 33.9934 10.3802 33.9934 9.25631 33.9934L9.38119 31.1213C9.50606 26.6257 5.38514 25.1272 0.764719 24.6277C0.39009 24.6277 0.265214 24.5028 0.39009 24.2531C2.51299 21.8804 5.01052 17.3849 5.75977 14.3878C5.88465 13.6386 5.75977 13.8883 5.26027 14.0132C4.88564 14.263 4.38613 14.5127 3.88663 14.5127C4.38613 14.1381 6.75878 11.3908 7.25829 9.01815C7.50804 12.7644 6.25928 17.0102 4.88564 21.0063C4.51101 22.255 4.0115 22.3799 5.26027 23.0043C6.75878 23.7536 9.50606 25.3769 9.63094 23.7536L10.1304 7.76938C10.1304 7.39475 10.1304 7.26988 9.88069 7.26988C9.63094 7.145 8.7568 7.64451 8.63193 7.76938C9.25631 7.02012 10.5051 3.52359 10.8797 0.776306Z" fill="white"/>
        </svg>
      </div>
      <Search/>
    </div>
    <div class="header__right user">
      <div class="user__message">
        <a href="#">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3005 9.37732C17.3005 5.86277 14.4514 3.01367 10.9369 3.01367C7.42235 3.01367 4.57324 5.86277 4.57324 9.37732C4.57324 16.8016 1.39142 18.9228 1.39142 18.9228H20.4824C20.4824 18.9228 17.3005 16.8016 17.3005 9.37732Z" stroke="#BCC3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.7718 21.273C12.3923 21.9272 11.6932 22.3299 10.9369 22.3299C10.1806 22.3299 9.48153 21.9272 9.10205 21.273" stroke="#BCC3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.94236 3.22406C9.32184 2.56987 9.97502 1.45682 10.7313 1.45682C11.4876 1.45682 12.2326 2.56987 12.6121 3.22406" stroke="#BCC3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>54</span>
        </a>
      </div>
      <div class="user__profile"
           @click="showInfo = !showInfo"
      >
        <img src="@/assets/images/user.png">
        <div class="arrow">
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2185 1.5625L6.34351 6.4375L1.46851 1.5625" stroke="#BCC3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="user__profile-desc"
             v-if="showInfo"
        >
          <div class="user__profile-wrapper">
            <p class="user__profile-name">
              {{user.name}}
            </p>
            <ul>
              <li><a href="">Партнерська програма</a></li>
              <li><a href="">Мої дані</a></li>
            </ul>
          </div>
          <p class="logout"><a href="">Вихід</a></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: "Header",
  components: {Search},
  data(){
    return{
      showInfo: false,
      user:{
        name: 'Константин Константинопольский',
        auth: true
      }
    }
  }
}
</script>

<style scoped>

</style>
