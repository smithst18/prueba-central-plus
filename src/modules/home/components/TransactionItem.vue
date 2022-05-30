<template>
  <div class="d-flex align-items-center mb-5" v-if="transaction">
    <div class="d-flex align-items-center">
      <img :src="imgSrc" height="25" width="25"  class="profile-picture img-fluid rounded-circle me-2" alt="">
      <div class="text-start">
        <p class="text-capitalize">{{this.transaction.description}}</p>
        <p class="text-muted">{{this.transaction.code}}</p>
      </div>
    </div>
    <div class="d-flex align-items-center ms-auto">
      <div class="text-end">
        <p>{{this.transaction.mount}} <span>{{this.transaction.currency}}</span></p>
        <p class="text-muted">{{this.transaction.date}}</p>
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
p{
  margin:-2.5% 0;
  font-size:11px !important;
  .text-muted{
    font-size:8px !important;
  }
}
</style>