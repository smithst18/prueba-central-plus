<template>
  <div class="container-fluid main-container bg-secondary rounded p-4 shadow-sm">
    <!-- title -->
    <div class="d-flex mb-4">
      <h5>Transacciones Recientes</h5>
      <a href="" class="text-decoration-none text-primary ms-auto">Ver todo</a>
    </div>
    <!-- transacion item -->
    <div class="container-fluid" v-for="transaction in transactions" :key="transaction.id">
      <TransactionItem :transaction="transaction"/>
    </div>
    <button class="add-button btn btn-primary text-secondary fs-1 shadow-sm">
      +
    </button>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex';

export default {
  components:{
    TransactionItem: defineAsyncComponent(() => import("../components/TransactionItem.vue")),
  },
  computed:{
    ...mapState('homeModule',['transactions'])
  },
}
</script>

<style lang="scss" scoped>
.main-container{
  position:relative;
  height: calc(100% - 25% - 1.5rem);
}
.add-button{
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: absolute;
  right: 20px;
  width: 60px;
}
</style>

