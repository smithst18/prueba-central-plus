<template>
  <nav class="md:flex md:flex-col bg-primary text-secondary text-xs md:w-1/5 md:h-full shadow-md md:rounded-lg sticky  top-0">
    <!-- toggle button  + logo -->
    <div class="lg:px-10 md:py-10 md:block p-5 flex items-center">
      
      <img src="@/assets/logo.svg" alt="central +" class="pointer">
      <div class="mx-auto">
        <i :class="toggleIcon" @click="changeIcon()"></i>
      </div>
    </div>
    <!-- links -->
    <div 
      class="md:mb-auto md:mt-16 md:z-auto md:static md:opacity-100 md:pl-0 pl-7  absolute bg-primary w-full left-0 opacity-0 top-[-400px] transition-all ease-out duration-700 md:transition-none" id="collapse">
        <NavbarLink v-for="link in links" :key="link.name" :link="link" class="block"/>
    </div>
    <!-- logOut button -->
    <a class="md:ml-10 md:mb-5 pointer hidden md:block text-sm">
      Cerrar sesion  
    </a>
    <!-- minicard -->
    <div class="p-3 hidden lg:block">
      <div class="border flex items-center bg-secondary rounded-lg p-2 ">
        <img src="https://github.com/mdo.png" class="rounded-full h-10 w-10 mr-3">
        <div>
          <div class="text-black mb-1 text-sm">
            {{user.name +' '+ user.lastName}}
          </div>
          <div class="text-zinc-400 text-xs">
            {{user.email}}
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex'

export default {
  data(){
    return{
      links:[
        { to: 'dashboard', name:'Home',icon:"fa-solid fa-house" },
        { to: 'accounts', name:'Metodos de Pago',icon:"fa-solid fa-building-columns"},
      ],
      toggleIcon:'fa-solid fa-bars md:hidden block text-4xl',
    }
  },
  components:{
    NavbarLink: defineAsyncComponent(() => import("./NavbarLink")),
  },
  computed:{
    ...mapState(["user"]),
  },
  methods:{
    changeIcon(){
      let collapse = document.querySelector('#collapse')

      this.toggleIcon === 'fa-solid fa-bars md:hidden block text-4xl' 
      ? (this.toggleIcon = 'fa-solid fa-xmark md:hidden block text-4xl', 
          collapse.classList.add('top-[68px]'),
          collapse.classList.add('opacity-100'))
      : (this.toggleIcon = 'fa-solid fa-bars md:hidden block text-4xl', 
          collapse.classList.remove('top-[68px]'),
          collapse.classList.remove('opacity-100'));
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  margin:-2.5% 0;
}
</style>
