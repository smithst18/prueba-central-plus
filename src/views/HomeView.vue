<template>
  <div class="md:flex md:p-3 md:h-screen">
    <!-- principal navbar -->
    <NavBar />
    <!-- <router-view/> -->
    <div class="md:ml-5 md:w-full md:flex">
     <router-view />
    </div> 
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    NavBar: defineAsyncComponent ( () => import('@/components/NavBar.vue'))
  },
  methods:{
    ...mapActions(['loadUser'])
  },
  created(){
    this.loadUser();
  }
}
</script>

<style lang="scss">
</style>
