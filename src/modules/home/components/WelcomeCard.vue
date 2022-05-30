<template>
  <div class="container-fluid rounded d-flex align-items-center justify-content-center mb-4 shadow-sm">

    <div class="card d-flex align-items-center text-center w-100  h-75">

      <h3 class="text-secondary">Bienvenido {{user.name}}</h3>
      <p class="text-secondary">Completa tu verificacion de perfil para disfrutar de todas las funciones de central+</p>
      <button class="btn rounded-pill btn-secondary text-primary px-5 py-2">Verificar Perfil</button>

    </div>  

  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  computed:{
    ...mapState(['user']),
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  background-color: #29BB89;
  background-image: url(@/assets/central+.svg);
  background-position: center center; 
  background-repeat: no-repeat;
  height: 25%;
  .card{
    background-color: transparent;
    border:0px
  }
}
</style>