<template>
  <button 
    @click="saveToUpdate(account)"
    class="text-blue-800">
    <i class="fa-solid fa-pen-to-square"></i>
  </button>
  <!-- <div>
    <button @click="saveToUpdate(account)" class="btn btn-primary text-secondary" data-bs-toggle="modal" data-bs-target="#editModal">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>

    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModaLlabelle">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registrar cuenta nueva</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="text-start">
            <div class="mb-3">
              <label for="alias" class="col-form-label">Alias:</label>
              <input type="text" class="form-control" id="alias" v-model="update.alias">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Tipo de cuenta:</label>
              <select class="form-select" aria-label="typLabel" v-model="update.type">
                <option value="ahorro" selected>Ahorro</option>
                <option value="corriente">Corriente</option>
              </select>
            </div>
          </form>
          </div>
          <div class="modal-footer">
            <button @click="saveUpdate" type="button" class="btn btn-primary text-secondary" data-bs-dismiss="modal">Guardar</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
    
  </div> -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

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
      "id":'',
      "alias":'',
      "entity":'',
      "document":'',
      "acountNumber":'',
      "type":'corriente',
      },
    }
  },
  methods:{
    ...mapMutations('accountModule',['saveAccountToUpdate']),
    ...mapActions('accountModule',['updateAccount']),

    saveToUpdate(param){
      this.$store.commit('accountModule/saveAccountToUpdate',param);
      this.update.alias = this.account.alias
    },

    saveUpdate(){
      console.log(this.update)
      this.update.id = this.acountToUpdate.id ;
      this.update.entity = this.acountToUpdate.entity ;
      this.update.document = this.acountToUpdate.document ;
      this.update.acountNumber = this.acountToUpdate.acountNumber ;
      this.updateAccount(this.update);
    }
  },
  computed:{
    ...mapState('accountModule',['acountToUpdate']),
    alias(){
      return this.acountToUpdate.alias;
    }
  }
}
</script>

<style>

</style>