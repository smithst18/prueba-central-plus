<template>
  <div class="h-3/4 md:pt-7">
    
    <div class="bg-secondary shadow-sm h-full lg:p-10 p-3 rounded-lg">
      <!-- title + link -->
      <div class="flex mb-10">
        <p class="text-sm">
          Transaciones recientes
        </p>
        <a href="#" class="text-primary ml-auto text-xs hover:decoration-primary hover:underline">
          Ver todo
        </a>
      </div>
      <!-- transactions  -->
      <div class="h-3/4 overflow-y-auto scroll scroll-smooth">
        <TransactionItem 
          v-for="transaction in transactions" 
          :key="transaction.id" 
          :transaction="transaction"
        />
      </div>
      <div class="h-auto text-right">
        <ActionButton/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex';

export default {
  components:{
    TransactionItem: defineAsyncComponent(() => import("../components/TransactionItem.vue")),
    ActionButton: defineAsyncComponent(() => import("../components/ActionButton.vue")),
  },
  computed:{
    ...mapState('homeModule',['transactions'])
  },
}
</script>

<style lang="scss" scoped>
.add-button{
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: absolute;
  right: 20px;
  width: 60px;
}
</style>

