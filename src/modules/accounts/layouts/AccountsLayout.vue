<template>
  <div>
    askjdasda
  </div>
  <!-- <div class="row min-vh-100 mt-3 mt-md-0">
      <div class="col-12">
        <AccountCard />
        <DataTable />
      </div>
  </div> -->
</template>

<script>
//import { defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex'

export default{
  components:{
    // este componente puede variar en el futuro
    //AccountCard : defineAsyncComponent( () => import('@/modules/home/components/WelcomeCard.vue')),
    //DataTable : defineAsyncComponent( () => import('../components/DataTable.vue')),
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