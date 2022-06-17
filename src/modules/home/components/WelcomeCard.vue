<template>
  <div class="main-card rounded-lg shadow-sm bg-secondary md:h-1/4 text-secondary flex items-center justify-center py-3">
    <div class="text-center lg:w-2/4 md:w-3/4">
      <h5 class="text-2xl">
        Bienvenido {{user.name}}
      </h5>
      <p class="text-xs my-3">
        Completa tu verificacion de perfil para disfrutar de todas las funciones Central +
      </p>
      <button class="bg-secondary text-primary px-12 py-3 text-xs rounded-full hover:opacity-75">
        Verificar Perfil
      </button>
    </div>
  </div>
  <!-- <div class="container-fluid rounded d-flex align-items-center justify-content-center mb-4 shadow-sm">

    <div class="card d-flex align-items-center text-center w-100  h-75">

      <h3 class="text-secondary">Bienvenido {{user.name}}</h3>
      <p class="text-secondary">Completa tu verificacion de perfil para disfrutar de todas las funciones de central+</p>
      <button class="btn rounded-pill btn-secondary text-primary px-5 py-2">Verificar Perfil</button>

    </div>  

  </div> -->
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
.main-card{
  background-color: #29BB89;
  background-image: url(@/assets/central+.svg);
  background-position: center center; 
  background-repeat: no-repeat;
}
</style>