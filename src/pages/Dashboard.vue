<template>
    <div class="dashboard">
      <div class="dashboard__item item statistics-company">
        <div class="item__header">
          <p class="item__head">Статистика по кампаніям</p>
          <router-link to="/companies">Всі компанії</router-link>
        </div>
        <div class="item__body">
          <div class="item__body-title">
            <span>Назва кампанії</span>
            <span>Покази</span>
            <span>Купони</span>
            <span>CPA</span>
          </div>
          <div class="item__body-row"
               v-for="company in statisticsCompanies"
               :key="company.key"
          >
            <span>{{ company.name }}</span>
            <span>{{ company.shows }}</span>
            <span>{{ company.coupons }}</span>
            <span>{{ company.cpa }}</span>
          </div>
        </div>
      </div>

      <div class="dashboard__item doughnut">
        <DoughnutChart :chartData="companiesData" />
      </div>

      <div class="dashboard__item item statistics-audience">
        <div class="item__header">
          <p class="item__head">Статистика по аудиторії</p>
          <router-link to="/audience">Всі компанії</router-link>
        </div>
        <div class="item__body">
          <div class="item__body-title">
            <span>Назва кампанії</span>
            <span>Загальні</span>
            <span>Унікальні</span>
          </div>
          <div class="item__body-row"
               v-for="audience in statisticsAudience"
               :key="audience.key"
          >
            <span>{{ audience.name }}</span>
            <span>{{ audience.general }}</span>
            <span>{{ audience.unique }}</span>
          </div>
        </div>
      </div>

      <div class="dashboard__item doughnut">
        <DoughnutChart :chartData="audienceData" />
      </div>

    </div>
</template>

<script>

import DoughnutChart from "@/components/Chart/DoughnutChart";
export default {
  name: "Dashboard",
  components: {DoughnutChart},
  data() {
    return {
      statisticsCompanies: [
        {
          id: 1,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        },
        {
          id: 2,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        },
        {
          id: 3,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        },
        {
          id: 4,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        },
        {
          id: 5,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        },
        {
          id: 6,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        },
        {
          id: 7,
          name: 'Pampers Active Baby 2020-10 POS',
          shows: 25617,
          coupons: 526,
          cpa: 0.6,
        }
      ],
      statisticsAudience: [
        {
          id: 1,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        },
        {
          id: 2,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        },
        {
          id: 3,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        },
        {
          id: 4,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        },
        {
          id: 5,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        },
        {
          id: 6,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        },
        {
          id: 7,
          name: 'Pampers Active Baby 2020-10 POS',
          general: 549,
          unique: 356
        }
      ],
      companiesData: [
        {
          title: 'Покази',
          value: 6830
        },
        {
          title: 'Купони',
          value: 6830
        },
        {
          title: 'СРА',
          value: 6830
        }
      ],
      audienceData: [
        {
          title: 'Унікальні',
          value: 6830
        },
        {
          title: 'Загальні',
          value: 6830
        }
      ]
    }
  }
}
</script>
