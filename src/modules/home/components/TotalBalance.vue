<template>
  <div class="total-container d-flex align-items-center shadow-sm rounded p-4 mb-4">
    <div class="me-md-5">
      <div class="d-inline-block d-sm-block">
        Balance Total
        <i class="fa-solid fa-eye-slash ms-2"></i>
        <p class="d-md-block"><span class="">* 1.805,05</span> = 2502</p>
      </div>
    </div>
    <!-- icon -->
    <div class="me-auto d-flex">

      <div class="mb-2 mx-md-3 mx-lg-4 mx-2 text-center">
        <button class="icon-container mb-2">
          <img src="@/assets/pagar.svg" class="img-fluid" alt="pagar central + icon">
        </button>
        <span class="d-block">Pagar</span>
      </div>

      <div class="mb-2 mx-md-3 mx-lg-4 mx-2 text-center">
        <button class="icon-container mb-2">
          <img src="@/assets/convertir.svg" class="img-fluid" alt="convertir central + icon">
        </button>
        <span class="d-block">Convertir</span>
      </div>

      <div class="mb-2 mx-md-3 mx-lg-4 mx-2 text-center">
        <button class="icon-container mb-2">
          <img src="@/assets/retirar.svg" class="img-fluid" alt="retirar central + icon">
        </button>
        <span class="d-block">Retirar</span>
      </div>

      <div class="mb-2 mx-md-3 mx-lg-4 mx-2 text-center">
        <button class="icon-container mb-2">
          <img src="@/assets/recargar.svg" class="img-fluid" alt="recar central + icon">
        </button>
        <span class="d-block">Recargar</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .total-container{
    height: 20%;
  }

.icon-container{
  background-color: #29BB89;
  border: 0px;
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
}
</style>