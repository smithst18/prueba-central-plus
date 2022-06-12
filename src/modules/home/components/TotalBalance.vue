<template>
  <div class="rounded-lg shadow-sm bg-secondary h-1/6 lg:p-5 p-3 border flex items-center">
    <!-- main grid -->
    <div class="grid grid-cols-7 w-full">

      <!-- balace -->
      <div class=" h-full col-span-3 flex flex-col justify-center">
        <div class=" ">
          <span class="mr-3 text-primary text-xs">Balance total</span>
          <i class="fa-solid fa-eye-slash ms-2 text-gray-500"></i>
        </div>
        <div class=" ">
          <p class="md:text-2xl text-lg align-middle"> Φ 1,102.84 = <span class="text-xs align-middle"> 230.00 $ </span></p>
        </div>
      </div>
      <!-- action buttons -->
      <div class="h-full text-center">
        <button class="h-14 w-14 bg-primary rounded-full hover:opacity-75">
          <img src="@/assets/pagar.svg" class="mx-auto" alt="pagar central + icon">
        </button>
        <span class="block w-full mt-1 text-xs">Pagar</span>
      </div>

      <div class="h-full text-center ">
        <button class="h-14 w-14 bg-primary rounded-full hover:opacity-75">
          <img src="@/assets/convertir.svg" class="mx-auto" alt="pagar central + icon">
        </button>
        <span class="block w-full mt-1 text-xs">Convertir</span>
      </div>

      <div class="h-full text-center">
        <button class="h-14 w-14 bg-primary rounded-full hover:opacity-75">
          <img src="@/assets/retirar.svg" class="mx-auto" alt="pagar central + icon">
        </button>
        <span class="block w-full mt-1 text-xs">Retirar</span>
      </div>

      <div class="h-full text-center">
        <button class="h-14 w-14 bg-primary rounded-full hover:opacity-75">
          <img  src="@/assets/recargar.svg" class="mx-auto" alt="pagar central + icon">
        </button>
        <span class="block w-full mt-1 text-xs">Recargar</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>