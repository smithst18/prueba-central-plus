<template>
  <div class="w-full p-2 md:p-0">
    <AccountCard  class="mb-5 md:mb-0"/>
    <DataTable />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex'

export default{
  components:{
    // este componente puede variar en el futuro
    AccountCard : defineAsyncComponent( () => import('@/modules/home/components/WelcomeCard.vue')),
    DataTable : defineAsyncComponent( () => import('../components/DataTable.vue')),
  },
  methods:{
    ...mapActions('accountModule',['loadAccounts']),
  },
  created(){
    this.loadAccounts();
  }
}
</script>

<Style langs="scss" scoped>
</Style>