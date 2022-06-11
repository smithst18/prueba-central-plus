<template>
  <div class="md:flex md:p-3 border border-amber-500 md:h-screen">
    <NavBar />
    <!-- <router-view/> -->
    <div class="border md:ml-5 md:w-full md:flex">
     <router-view />
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
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
