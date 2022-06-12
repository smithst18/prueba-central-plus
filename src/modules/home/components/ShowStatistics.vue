<template>
  <div class="h-5/6 md:pt-7">
    <div class="bg-secondary shadow-sm rounded-lg h-full p-5">
      <div class="md:h-2/6">
        <h4 class="text-base">
          Estadisticas
        </h4>
      </div>
      <div class="md:h-4/6">
        <h4 class="mb-5 text-base">
          Activos
        </h4>
        <div class="md:h-5/6 overflow-y-auto scroll scroll-smooth md:pr-3">
          <div class="mb-5">
            <h5 class="text-primary mb-5 md:sticky md:top-0 bg-secondary py-3 text-xs">Monedas Nacionales</h5>
            <StadiscticItem 
              v-for="national in nationals" 
              :key="national.id" 
              :currency='national'
              class="mb-5" />
          </div>
          <div class="mb-5">
            <h4 class="text-primary mb-5 md:sticky md:top-0 bg-secondary py-3 text-xs">Crypto Monedas</h4>
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
</style>