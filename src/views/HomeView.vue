<template>
<div class="container-fluid">
  <div class="row py-3">
    <div class="col-md-2 col-sm-12">
      <NavBar />
    </div>
    <div class="col-md-10 col-sm-12 container-rout">
      <router-view />
    </div>
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

.container-rout{
  height: calc(100vh - 3rem);
}
</style>
