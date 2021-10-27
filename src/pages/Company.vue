<template>
  <div class="company">
    <div class="company__row top">
      <div class="company__head">
        <div class="arrow">
          <a @click="$router.go(-1)">
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9L9 17" stroke="#BCC3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.25 9.125H19.5" stroke="#BCC3D3" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="company__title">
          {{ company.title }}
        </div>
        <div class="correct-icon">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.358 2.98657C15.1286 2.98657 14.8992 3.10126 14.7272 3.27331L5.66621 12.3343L5.20743 14.1121L6.98522 13.6533L16.0462 4.59231C16.2182 4.42027 16.3329 4.19087 16.3329 3.96148C16.3329 3.73209 16.2182 3.5027 16.0462 3.33066C15.8741 3.10126 15.6447 2.98657 15.358 2.98657ZM13.1214 1.66757C13.7523 1.03674 14.5551 0.75 15.4154 0.75C16.2756 0.75 17.0784 1.09409 17.7093 1.66757C18.3401 2.29839 18.6268 3.10126 18.6268 3.96148C18.6268 4.8217 18.2828 5.62457 17.7093 6.2554L8.36157 15.4884C8.18952 15.6605 8.01748 15.7178 7.84543 15.7752L3.94578 16.7501C3.54434 16.8648 3.14291 16.7501 2.85617 16.4633C2.56943 16.1766 2.45473 15.7752 2.56943 15.3737L3.54434 11.4741C3.60169 11.2447 3.71638 11.0726 3.83108 10.9579L13.1214 1.66757Z"
                  fill="#BCC3D3"/>
            <path d="M2.38434 19H18.6268" stroke="#BCC3D3" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="company__period">
        Період кампанії:
        <input type="date" :value="company.date[0].start.split('.').join('-')">
        -
        <input type="date" :value="company.date[0].end.split('.').join('-')">
      </div>
      <div class="company__coupons">
        Кількість купонів:
        <span>{{ company.coupons }}</span>
      </div>
      <div class="company__api">
        API інтеграції:
        <input type="text" :value="company.key">
      </div>
    </div>
    <div class="company__row about">
      <div class="about__title title">Статистика по компанії:</div>
      <div class="about__column">
        <div class="about__item">
          <div class="about__shows">
            Покази:
            <span>{{ company.shows }}</span>
          </div>
          <div class="about__coupons">
            Купони:
            <span>{{ company.coupons }}</span>
          </div>
          <div class="about__cpa">
            CPA:
            <span>{{ company.cpa }}</span>
          </div>
          <div class="about__status">
            <span>Статус:</span>
            <ToggleCheckbox :status="company.status[0].value"/>
            <span>{{ company.status[0].title }}</span>
          </div>
        </div>
        <div class="about__item doughnut">
          <DoughnutChart :chartData="company.data"/>
        </div>
      </div>
    </div>
    <div class="company__row carrier">
      <div class="carrier__title title">Носії:</div>

      <div class="carrier__block">
        <div class="carrier__item carry"
            v-for="carry in company.carrier"
             :key="carry.id"
        >
          <div class="carry__title">{{ carry.title }}</div>
          <div class="carry__img">
            <img :src="require(`@/assets/images${carry.img_link}`)" :alt="carry.title">
          </div>
          <div class="carry__info">
            <div class="carry__shows">
              {{ carry.data.shows[0].title }}: <span>{{ carry.data.shows[0].value }}</span>
            </div>
            <div class="carry__coupons">
              {{ carry.data.coupons[0].title }}: <span>{{ carry.data.coupons[0].value }}</span>
            </div>
            <div class="carry__cpa">
              {{ carry.data.cpa[0].title }}: <span>{{ carry.data.cpa[0].value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "@/components/Chart/DoughnutChart";
import ToggleCheckbox from "@/components/ToggleCheckbox";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Company",
  components: {DoughnutChart, ToggleCheckbox},
  computed: {
    ...mapGetters(['company']),
  },
  mounted() {
    this.getCompany(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getCompany']),

    changeStatus(){
      let hide = {
        title: 'Виключена',
        value: 'hide'
      }
      let active = {
        title: 'Активна',
        value: 'active'
      }
      this.company.status = this.company.status.value === 'active' ? hide : active
    }
  }
}
</script>
