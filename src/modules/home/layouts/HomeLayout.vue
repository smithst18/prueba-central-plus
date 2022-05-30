<template>
  <div class="container-fluid">
    <div class="row container-main">
      <div class="col-lg-7 container-rout  col-md-12 col-sm-12 mb-5 mb-lg-0 mt-5 mt-md-0 ">
        <TotalBalance />
        <ShowStadistics />
      </div>
      <div class="col-lg-5 container-rout col-md-12 col-sm-12">
        <WelcomeCard />
        <TransactionsList />
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex';

export default {
  components:{
    TotalBalance:defineAsyncComponent( () => import('../components/TotalBalance.vue')),
    ShowStadistics: defineAsyncComponent(() => import('../components/ShowStatistics.vue')),
    WelcomeCard: defineAsyncComponent(() => import('../components/WelcomeCard.vue')),
    TransactionsList: defineAsyncComponent( () => import('../components/ShowTransactions.vue')),
  },
  methods:{
    ...mapActions('homeModule',['getCurrencyType','getTransactions'])
  },
  created(){
    this.getCurrencyType();
    this.getTransactions();
  },
}
</script>

<style>
</style>