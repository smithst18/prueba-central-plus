<template>
  <div>
    <button 
      @click="toggleModal"
      class="text-blue-800">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
  
    <ModalItem :modalActive="modalActive">
      <template v-slot:icon>
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-400 sm:mx-0 sm:h-10 sm:w-10">
          <i class="fa-solid fa-pen-to-square text-white"></i>
        </div>
      </template>
      <!-- modal title content -->
      <template v-slot:title>
        <p>Editar metodo de pago</p>
      </template>
      <!-- modal content body -->
      <template v-slot:body>
        <div class="mb-3">
          <label for="accAlias">Alias:</label>
          <input type="text" id="accAlias" v-model="update.alias">
        </div>
        <div class="mb-3">
          <label for="accEntity">Entidad:</label>
          <input type="text" id="accEntity" v-model="update.entity">
        </div>
        <div class="mb-3">
          <label for="accDocument">Documento de Identidad:</label>
          <input type="text" id="accDocument" v-model="update.document">
        </div>
        <div class="mb-3">
          <label for="accNumber">Numero de cuenta:</label>
          <input type="text" id="accNumber" v-model="update.acountNumber">
        </div>
        <div class="mb-3">
          <label for="accounttype">Tipo de cuenta:</label>
          <select class="" aria-label="accountType" v-model="update.type">
            <option value="ahorro">Ahorro</option>
            <option value="corriente">Corriente</option>
          </select>
        </div>
        <div v-if="errors && errors.length > 0">
          <ul>
            <li 
              class="text-red-300 text-sm py-2 bg-gray-50 rounded-lg"
              v-for="error in errors" :key="error">
              {{error}}
            </li>
          </ul>
        </div>
      </template>
      <!-- modal action buttons -->
      <template v-slot:actions>
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm" 
        @click="saveUpdate">
          Guardar
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
        @click="toggleModal">
          Cancelar
        </button>
      </template>
  
    </ModalItem>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions } from 'vuex';
import { validateForm } from '@/helpers/validations';

export default {
  name: 'EditButton',
  props:{
    account:{
      type:Object,
    },
  },
  data(){
    return{
      update:{
        "id":this.account.id,
        "alias":this.account.alias,
        "entity":this.account.entity,
        "document":this.account.document,
        "acountNumber":this.account.acountNumber,
        "type":this.account.type,
      },
      modalActive:false,
      errors: [],
    }
  },
  components:{
    ModalItem:defineAsyncComponent(() => import('./ModalItem.vue')),
  },
  methods:{
    ...mapActions('accountModule',['updateAccount']),
    toggleModal(){
      this.modalActive = !this.modalActive
    },
    saveUpdate(){
      this.errors = validateForm(this.update);
      if(this.errors.length < 1) {
        this.updateAccount(this.update);
        this.toggleModal();
      }
    }
  },
}
</script>

<style lang="scss" scoped>
input,select{
  @apply w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-primary
}
label{
  @apply w-full; 
}
</style>