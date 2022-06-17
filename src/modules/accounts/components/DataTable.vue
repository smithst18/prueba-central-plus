<template>
  <div class="h-3/4 md:pt-7" v-if="accounts">
    <div class="shadow-sm h-full rounded-lg bg-secondary md:p-10 p-3">
      <div class="mb-16 flex p-5 md:p-0">
        <h5 class="text-base">
          Metodos de Pago
        </h5>
        <button 
          class="ml-auto text-primary lg:mr-5 text-sm hover:decoration-primary hover:underline hover:underline-offset-2"
          @click="toggleModal">
          Agregar Cuenta
        </button>
      </div>
      <!-- table for md & lg & xxl-->
      <div id="data-table" class="h-5/6 w-full container overflow-auto hidden md:block">
        <table class="w-full h-max">

          <thead class="border border-transparent border-b-gray-300">
            <tr>
              <th>Alias</th>
              <th>Entidad</th>
              <th>Documento de Identidad</th>
              <th>Numero de cuenta</th>
              <th>tipo de cuenta</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr class="text-center" v-for="account in accounts" :key="account.id">
              <td>{{account.alias}}</td>
              <td>{{account.entity}}</td>
              <td>{{account.document}}</td>
              <td>{{account.acountNumber}}</td>
              <td>{{account.type}}</td>
              <td v-if="account" class="flex">
                <EditButton  
                :account="account" class="mr-5"/>
                <DeleteButton 
                :id="account.id" /> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- items for mobile -->
      <div class="block md:hidden">
        <AccountItem 
        v-for="account in accounts" :key="account.id" 
        :account="account"
        class="mb-3"/>
      </div>
    </div>
  </div>
  
  <!-- modal add account -->
  <ModalItem :modalActive="modalActive">
    <template v-slot:icon>
      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-400 sm:mx-0 sm:h-10 sm:w-10">
        <i class="fa-solid fa-floppy-disk text-white"></i>
      </div>
    </template>
    <!-- modal title content -->
    <template v-slot:title>
      <p>Nuevo metodo de pago</p>
    </template>
    <!-- modal content body -->
    <template v-slot:body>
      <form>
        <div class="mb-3">
          <label for="accAlias">Alias:</label>
          <input type="text" id="accAlias" v-model="acct.alias">
        </div>
        <div class="mb-3">
          <label for="accEntity">Entidad:</label>
          <input type="text" id="accEntity" v-model="acct.entity">
        </div>
        <div class="mb-3">
          <label for="accDocument">Documento de Identidad:</label>
          <input type="text" id="accDocument" v-model="acct.document">
        </div>
        <div class="mb-3">
          <label for="accNumber">Numero de cuenta:</label>
          <input type="text" id="accNumber" v-model="acct.acountNumber">
        </div>
        <div class="mb-3">
          <label for="accounttype">Tipo de cuenta:</label>
          <select class="" aria-label="accountType" v-model="acct.type">
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
      </form>
    </template>
    <!-- modal action buttons -->
    <template v-slot:actions>
      <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm" 
      @click="saveNewAcct">
        Guardar
      </button>
      <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
      @click="toggleModal">
        Cancelar
      </button>
    </template>
  </ModalItem>

</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import { randomId } from '@/helpers/randomNum';
import { validateForm } from '@/helpers/validations';

export default{
  name: 'DataTable',
  data(){
    return{
      acct:{
        "id":'',
        "alias":'',
        "entity":'',
        "document":'',
        "acountNumber":'',
        "type":'',
      },
      modalActive:false,
      errors: [],
    }
  },
  components:{
    DeleteButton: defineAsyncComponent( () => import('./DeleteButon.vue')),
    EditButton: defineAsyncComponent( () => import('./EditButton.vue')),
    AccountItem:defineAsyncComponent( () => import('./AccountItem.vue')),
    ModalItem:defineAsyncComponent(() => import('./ModalItem.vue')),
  },
  computed:{
    ...mapState('accountModule',['accounts'])
  },
  methods:{
    ...mapActions('accountModule',['createAccount']),
    toggleModal(){
      this.modalActive = !this.modalActive
    },
    saveNewAcct(){
      this.errors = validateForm(this.acct);
      if(this.errors.length < 1){
        let newAcct = {
          "id": randomId(),
          "alias":this.acct.alias,
          "entity":this.acct.entity,
          "document":this.acct.document,
          "acountNumber":this.acct.acountNumber,
          "type":this.acct.type,
        };
        //save the acc
        this.createAccount(newAcct);
        //close modal
        this.modalActive = false;  
        //reset form
        this.acct.id = '';
        this.acct.alias = '';
        this.acct.entity = '';
        this.acct.document = '';
        this.acct.acountNumber = '';
        this.acct.type = '';    
      }
    },
  },
}
</script>

<style lang="scss" scoped>
table th ,table td{
  @apply px-5 py-3 text-sm;
}
table th{
  @apply capitalize text-primary;
}
form label, form input, form select{
  @apply w-full;
}
 form input, form select{
  @apply border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-primary;
}

</style>