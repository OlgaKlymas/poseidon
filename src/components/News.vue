<template>
  <div class="news"
       :class="{'news--active': active}"
  >
    <div class="news__decor">
      <svg width="18" height="55" viewBox="0 0 18 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.374999 27.5C11.2093 21.1793 10.4431 15.1657 17.1562 0.274299L17.1562 54.7256C10.702 41.1826 11.7323 34.832 0.374999 27.5Z" fill="white"/>
      </svg>
    </div>
    <div class="news__wrapper">
      <div class="news__header">
        <div class="news__wrap">
          <div class="news__title">Poseidon</div>
          <div class="news__label">new</div>
        </div>
        <div class="close-btn"
             @click="active = false"
        ></div>
      </div>
      <div class="news__show-btn"
           @click="active = true"
      >
        <AddBtn/>
      </div>
      <div class="news__items">
        <div class="news__item item">
          <div class="item__img">
            <img src="@/assets/images/news/new_function.png" alt="">
          </div>
          <div class="item__title">
            <a href="">Обновленные функции масштабирования</a>
          </div>
        </div>
        <div class="news__item item">
          <div class="item__img">
            <img src="@/assets/images/news/more_statistics.png" alt="">
          </div>
          <div class="item__title">
            <a href="">Теперь еще больше статистики</a>
          </div>
        </div>
        <div class="news__item item">
          <div class="item__img">
            <img src="@/assets/images/news/new_possibility.png" alt="">
          </div>
          <div class="item__title">
            <a href="">Новые возможности коллаборации</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddBtn from "@/components/AddBtn";

export default {
  name: "News",
  components: {AddBtn},
  data() {
    return {
      active: false
    }
  }
}
</script>
