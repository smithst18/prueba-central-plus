<template>
  <div>
    <button @click="deleteItem" class="btn btn-danger">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DeleteButton',
  props:{
    item:{
      type:String,
    },
  },
  methods:{
    ...mapActions('accountModule',['deleteAccount']),
    deleteItem(){
      this.deleteAccount(this.item);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>