<template>
  <button 
    @click="toggleModal"
    class="text-red-600" >
    <i class="fa-solid fa-trash-can"></i>
  </button>

  <!-- modal for delete  -->
  <ModalItem :modalActive="modalActive">
    <!-- modal icon -->
    <template v-slot:icon>
      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <i class="fa-solid fa-triangle-exclamation text-red-600"></i>
      </div>
    </template>
    <!-- modal title content -->
    <template v-slot:title>
      <p>Eliminar Metodo de Pago</p>
    </template>
    <!-- modal content body -->
    <template v-slot:body>
      <p class="text-sm text-gray-500">
        ¿Estás seguro de que quieres eliminar la cuenta? Todos sus datos serán eliminados permanentemente. Esta acción no se puede deshacer.
      </p>
    </template>
    
    <!-- modal action buttons -->
    <template v-slot:actions>
      <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" 
      @click="deleteItem">
        Eliminar
      </button>
      <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
      @click="toggleModal">
        Cancelar
      </button>
    </template>
  </ModalItem>
  
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
      modalActive:false,
    }
  },
  components:{
     ModalItem:defineAsyncComponent(() => import('./ModalItem.vue')),
  },
  methods:{
    ...mapActions('accountModule',['deleteAccount']),
    toggleModal(){
      this.modalActive = !this.modalActive
    },
    deleteItem(){
      let deleted = this.id;
      console.log(`has eliminado el item id: ${deleted}`);
      this.deleteAccount(this.id);
      this.toggleModal();
    },
  },
}
</script>

<style lang="scss" scoped>
</style>