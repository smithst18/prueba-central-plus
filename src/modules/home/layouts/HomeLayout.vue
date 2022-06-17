<template>

  <div class="md:w-3/5 md:p-0 md:pr-3 p-2">
    <TotalBalance class="mb-3 md:mb-0"/>
    <ShowStadistics />
  </div>
  <div class="md:w-2/5 md:py-0 md:pl-3 md:pr-0 p-2">
    <WelcomeCard class="mb-3 md:mb-0"/>
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

<style scoped>
</style>