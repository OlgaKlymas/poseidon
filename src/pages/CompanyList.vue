<template>
  <div class="company-list__wrapper"
       :class="{hide: !showList}">
    <div class="company-list">
      <div class="company-item"
           v-for="company in pageOfItems" :key="company.id"
           :class="{'add-company': Object.keys(company).length < 5}"
      >
        <div v-if="Object.keys(company).length < 5">
          <router-link to="/companies/add-company">
            <AddBtn/>
            <div class="add-company__text">Створити нову кампанію</div>
          </router-link>
        </div>
        <div v-else>
          <router-link :to="`/companies/company/${company.id}`">
            <div class="company-item__date">
              Дати: <span>{{ company.date[0].start }} - {{ company.date[0].end }}</span>
            </div>
            <div class="company-item__title">{{ company.title }}</div>
            <div class="company-item__status"
                 :class="{'company__status--active' : (company.status.value === 'active'), 'company__status--done' : (company.status.value === 'done')}"
            >{{ company.status.title }}
            </div>
            <div class="company-item__messages">Повідомленя: <span>{{ company.messages_count }}</span></div>
            <div class="company-item__shows">Покази: <span>{{ company.shows }}</span></div>
            <div class="company-item__coupons">Купони: <span>{{ company.coupons }}</span></div>
            <div class="company-item__cpa">СРА: <span>{{ company.cpa }}</span></div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pagination-wrap">
      <jw-pagination :items="allCompanies"
                     :pageSize="9"
                     @changePage="onChangePage"
                     :labels="labels"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
import AddBtn from '@/components/AddBtn'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "CompanyList",
  components: {AddBtn},
  props: ['showList'],
  data() {
    return {
      pageOfItems: [],
      labels: {
        previous: '',
        next: ''
      }
    }
  },
  computed: {
    ...mapGetters(['allCompanies']),
  },
  mounted() {
    this.getCompanies()
  },
  methods: {
    ...mapActions(['getCompanies']),

    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  }
}
</script>
