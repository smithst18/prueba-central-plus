<template>
  <div class="flex mb-10" v-if="transaction">
    <!-- transaction type / transaction id -->
    <div class="flex items-center">
      <img :src="imgSrc" height="35" width="35"  class="mr-3" alt="icon-transaction">
      <div>
        <p class="capitalize  text-sm"> {{this.transaction.description}} </p>
        <p class=" text-xs"> {{this.transaction.code}} </p>
      </div>
    </div>
    <!-- quantitys date -->
    <div class="ml-auto flex items-center">
      <div>
        <p class="text-sm text-right">{{this.transaction.mount}} <span>{{this.transaction.currency}}</span></p>
        <p class="text-xs">{{this.transaction.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    transaction:Object,
  },
  computed:{
    imgSrc(){
      return require(`@/assets/${this.transaction.icon}`);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>