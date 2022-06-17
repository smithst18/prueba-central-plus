<template>
  <div 
    class="flex" 
    v-if="currency">
    <div class="flex items-center">
      <img :src="imgSrc" height="30" width="30"  class="rounded-full mr-3" alt="">
      <span class="text-xs">{{currency.name}}</span>
    </div>
    <div class="ml-auto flex items-center ">
      <p class="text-primary text-sm">{{currency.quantity}} 
        <span class="me-1 text-primary text-sm">
          {{currency.symbol}}
        </span>
      </p>
    </div>
  </div>
  <!-- <div class="container-fluid p-0 d-flex align-items-center" v-if="currency">
    <div class="d-flex align-items-center">
      <img :src="imgSrc" height="35" width="35"  class="profile-picture img-fluid rounded-circle me-2" alt="">
      <span>{{currency.name}}</span>
    </div>

    <div class="ms-auto d-flex align-items-center">
      <p class="text-primary">{{currency.quantity}} <span class="me-1 text-primary">{{currency.symbol}}</span></p>
    </div>
  </div> -->
</template>

<script>
export default {
  props:{
    currency:Object,
  },
  computed:{
    imgSrc(){
      return require(`@/assets/${this.currency.img}`);
    }
  },
}
</script>

<style lang="scss" scoped>
p{
  margin:-2.5% 0;
}
</style>