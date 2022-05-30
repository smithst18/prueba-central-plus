<template>
  <div class="stadisticas-container bg-white shadow-sm rounded p-4">
      <div class="stadistics">
        <h4 class="">Estadisticas</h4>
        
      </div>

      <div class="currency-container">
        <h4 class="mb-3">Activos</h4>
        <h5 class="fs-6 text-primary mb-3">Monedas Nacionales:</h5>
        <div class="currency">
          <div v-for="national in nationals" :key="national.id" class="mb-3">
            <StadiscticItem :currency='national'/>
          </div>
        </div>
      </div>

      <div class="currency-container mt-5">
        <h5 class="fs-6 text-primary mb-3">Crypto Monedas</h5>
        <div class="currency h-100">
          <div v-for="crypto in cryptos" :key="crypto.id" class="mb-3">
            <StadiscticItem :currency='crypto'/>
          </div>
        </div>
      </div>



  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex'

export default {  
  components:{
    StadiscticItem: defineAsyncComponent( () => import('./StatisticItem.vue')),
  },
  computed:{
    ...mapState('homeModule',['nationals','cryptos']),
  },
}
</script>

<style lang="scss" scoped>
.stadisticas-container{
  height: calc(100% - 20% - 1.5rem);
}
.stadistics{
  max-height: 30%;
  height:30%;
}
.currency-container{
  max-height: 30%;
}
.currency{
  height: 6rem;
  overflow:scroll;
  cursor:pointer;
}
.currency::-webkit-scrollbar {
    display: none;
}
</style>