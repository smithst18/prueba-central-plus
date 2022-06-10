<template>
  <div class="container-fluid table-container shadow-sm p-5" v-if="accounts">
    <!-- title + icon -->
    <div class="d-flex align-items-center mb-5">
      <i class="fa-solid fa-wallet fs-2 me-3 text-primary"></i>
      <span class="fs-4">
        Metodos de Pago
      </span>  
      <button class="ms-auto d-flex align-items-center btn btn-outline-primary p-3" data-bs-toggle="modal" data-bs-target="#addAcountModal">
        Agregar
        <i class="fa-solid fa-plus fs-2 ms-2"></i>
      </button>
    </div>
      <!-- data table with accounts -->
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr class="text-center">
            <th scope="col">Alias</th>
            <th scope="col">Entidad</th>
            <th scope="col">Documento de Identidad</th>
            <th scope="col">Numero de cuenta</th>
            <th scope="col">tipo de cuenta</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="account in accounts" :key="account.id">
            <td>{{account.alias}}</td>
            <td>{{account.entity}}</td>
            <td>{{account.document}}</td>
            <td>{{account.acountNumber}}</td>
            <td>{{account.type}}</td>
            <td class="d-flex" v-if="account">
              <EditButton class="me-2" :account="account"/>
              <DeleteButton :id="account.id"/> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- modal for add account -->
  <div class="modal fade" id="addAcountModal" tabindex="-1" aria-labelledby="addaccountlabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Registrar cuenta nueva</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="text-start">
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Alias:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="acct.alias">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Entidad:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="acct.entity">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Documento de Identidad:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="acct.document">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Numero de cuenta:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="acct.acountNumber">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Tipo de cuenta:</label>
              <select class="form-select" aria-label="Default select example" v-model="acct.type">
                <option value="ahorro">Ahorro</option>
                <option value="corriente">Corriente</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary text-secondary" data-bs-dismiss="modal" @click="saveNewAcct">Guardar</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
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
      }
    }
  },
  components:{
    DeleteButton: defineAsyncComponent( () => import('./DeleteButon.vue')),
    EditButton: defineAsyncComponent( () => import('./EditButton.vue')),
  },
  computed:{
    ...mapState('accountModule',['accounts'])
  },
  methods:{
    ...mapActions('accountModule',['createAccount']),
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
      console.log(this.acct);
      console.log(newAcct);
      
    },
  },
}
</script>

<Style lang="scss" scoped>
.table-container{
  height: calc(100% - 25% - 1.5rem);
}
.fa-plus,
.btn-outline-primary{
  &:hover{
    color:#ffffff !important;
  }
  &:focus{
    color:#ffffff !important;
  }
}
</Style>