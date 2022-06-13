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
                :id="account.id" class=""/> 
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
  <!-- modal add acount -->
  <ModalItem :modalActive="modalActive">
    <!-- content -->
    <div class="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

      <div class="modal-wrapper-flex sm:flex sm:items-start ">

        <div class="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full">
          <!-- title -->
          <div class="flex items-center">
            <h3 class="text-lg font-medium text-gray-900">
              Agregar Cuenta
            </h3>
          </div>

          <!-- content -->
          <div class="modal-text mt-4 w-full py-5">
            <form class="text-start">
              <div class="mb-3">
                <label for="accAlias" class="">Alias:</label>
                <input type="text" class="form-input" id="accAlias" v-model="acct.alias">
              </div>
              <div class="mb-3">
                <label for="accEntity" class="">Entidad:</label>
                <input type="text" class="" id="accEntity" v-model="acct.entity">
              </div>
              <div class="mb-3">
                <label for="accDocument" class="">Documento de Identidad:</label>
                <input type="text" class="" id="accDocument" v-model="acct.document">
              </div>
              <div class="mb-3">
                <label for="accNumber" class="">Numero de cuenta:</label>
                <input type="text" class="" id="accNumber" v-model="acct.acountNumber">
              </div>
              <div class="mb-3">
                <label for="accounttype" class="">Tipo de cuenta:</label>
                <select class="" aria-label="accountType" v-model="acct.type">
                  <option value="ahorro">Ahorro</option>
                  <option value="corriente">Corriente</option>
                </select>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
      <!-- actions -->
    <div class="modal-actions bg-gray-50 px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="submit" class="btn-modal 
        bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-500"
        @click="saveNewAcct">
            Aceptar
        </button>
        <button type="button" class="btn-modal 
        bg-red-600 hover:bg-red-500 focus:ring-red-500 mt-3"
          @click="toggleModal">
            Cancelar
        </button>
    </div>
  </ModalItem>

</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import { randomId } from '@/helpers/randomNum';


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
      let newAcct = {
        "id": randomId(),
        "alias":this.acct.alias,
        "entity":this.acct.entity,
        "document":this.acct.document,
        "acountNumber":this.acct.acountNumber,
        "type":this.acct.type,
      }
      this.createAccount(newAcct);
      this.acct.id = '';
      this.acct.alias = '';
      this.acct.entity = '';
      this.acct.document = '';
      this.acct.acountNumber = '';
      this.acct.type = '';    
      //close toggle
      this.modalActive = false;  
    },
  },
}
</script>

<Style lang="scss" scoped>
table th ,table td{
  @apply px-5 py-3 text-sm;
}
table th{
  @apply capitalize text-primary;
}
form label, form input, form select{
  @apply block w-full;
}
 form input, form select{
  @apply border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-primary;
}
form input{
}
/* space no wrap en todos los td*/
</Style>