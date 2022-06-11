<template>

  <div class="border border-primary md:w-3/5 md:p-0 md:pr-4 p-2">
    <TotalBalance />
    <ShowStadistics />
  </div>
  <div class="border border-primary md:w-2/5 md:p-4 p-2">
    <WelcomeCard />
    <TransactionsList />
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