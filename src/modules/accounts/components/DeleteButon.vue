<template>
  <button 
    @click="deleteItem"
    class="text-red-600" >
    <i class="fa-solid fa-trash-can"></i>
  </button>

  <ModalItem>

  </ModalItem>
  <!-- <div>
    <button @click="deleteItem" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
      <i class="fa-solid fa-trash-can"></i>
    </button>

    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModal">Eliminar Elemento</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          quieres borrar?
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary text-secondary" data-bs-dismiss="modal" @click="deleteItem">Guardar</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        </div>
      </div>
    </div>
    </div>


  </div> -->
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions } from 'vuex';

export default {
  name: 'DeleteButton',
  props:{
    id:{
      type:String,
    },
  },
  data(){
    return{
      modalActive:true,
    }
  },
  components:{
     ModalItem:defineAsyncComponent(() => import('./ModalItem.vue')),
  },
  methods:{
    ...mapActions('accountModule',['deleteAccount']),
    deleteItem(){
      // this.deleteAccount(this.item);
      console.log(this.id);
    },
  },
}
</script>

<style lang="scss" scoped>
</style>