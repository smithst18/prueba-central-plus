<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
        <div id="add-account-modal" class="fixed inset-0">
            <div v-show="modalActive" class="modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75"></div>
                <div class="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"> &nbsp;</div>
                <!-- modal -->
                <div class="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden   shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                    <!-- modal content and actions -->
                    <slot/>
                </div>
            </div>
        </div>
    </div>
  </transition>


</template>

<script>
export default {
    props: ["modalActive"],
}
</script>

<style lang="scss">
.modal-animation-enter-active,
.modal-animation-leave-active{
    transition: opacity .4s cubic-bezier(0.52,0.02,0.19,1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to{
    opacity:0;
}
.btn-modal{
  @apply 
  w-full 
  inline-flex justify-center 
  rounded-md 
  border border-transparent 
  shadow-md 
  px-4 py-2 
  font-medium text-secondary
  focus:outline-none focus:ring-2 focus:ring-offset-2
  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm;
}
</style>