<template>
  <div class="h-5/6 md:pt-7">
    <div class="bg-secondary shadow-sm h-full p-5">
      <div class="md:h-2/6">
        <h4 class="text-base">
          Estadisticas
        </h4>
      </div>
      <div class="md:h-4/6">
        <h4 class="mb-5 text-base">
          Activos
        </h4>
        <div class="md:h-5/6 snap-y overflow-y-auto scroll scroll-smooth md:pr-3">
          <div class="mb-5">
            <h5 class="text-primary mb-5 sticky top-0 bg-secondary py-3 text-xs">Monedas Nacionales</h5>
            <StadiscticItem 
              v-for="national in nationals" 
              :key="national.id" 
              :currency='national'
              class="mb-5" />
          </div>
          <div class="mb-5">
            <h4 class="text-primary mb-5 sticky top-0 bg-secondary py-3 text-xs">Crypto Monedas</h4>
            <StadiscticItem 
              v-for="crypto in cryptos" 
              :key="crypto.id" 
              :currency='crypto'
              class="mb-5"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="stadisticas-container bg-white shadow-sm rounded p-4">
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
  </div> -->
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