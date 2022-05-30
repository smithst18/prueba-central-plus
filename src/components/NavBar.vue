<template>
  <nav 
    class="navbar navbar-expand-lg d-flex flex-lg-column  justify-content-center bg-primary shadow-sm rounded " 
    id="sidebard">
    
    <div class="navbar-brand mt-md-5 text-center w-100">
      <img src="@/assets/logo.svg" alt="central +" class="img-fluid d-none d-lg-inline-block">

      <button type="button" class="navbar-toggler border-0 order-1" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse  w-100 order-2 rounded" id="nav">
      <ul class="navbar-nav d-flex flex-lg-column flex-column mt-5 w-100 text-white text-md-start text-lg-start mb-auto">
        <li class="nav-item w-100">
          <router-link  to="/" class="nav-link">
            <i class="fa-solid fa-house mx-3"></i> 
            <span>Home</span>
          </router-link>
        </li>
        <li class="nav-item w-100">
          <router-link to="/home/accounts" class="nav-link">
            <i class="fa-solid fa-building-columns mx-3"></i>
            <span>Metodos de pago</span>
          </router-link>
        </li>
        <li class="nav-item w-100 d-block d-lg-none">
          <a href="#" class="nav-link">
            <i class="fa-solid fa-right-from-bracket mx-3"></i>
            <span>Cerrar Sesion</span>
          </a>
        </li>
      </ul>
    </div>

    <a class="w-100 text-center order-3 text-decoration-none text-secondary opacity-75 mb-4 d-lg-block d-none pointer">
      Cerrar Session
    </a>

    <div class="w-100 d-flex justify-content-center order-last">
      <div class="user-container d-lg-flex align-items-center bg-white d-none d-lg-inline-block">
        <img src="https://github.com/mdo.png" class="profile-picture img-fluid rounded-circle  ms-2 me-3">
        <div class="textos">
          <p class="w-100">
            {{user.name +' '+ user.lastName}}
          </p>
          <p class="text-muted">
            {{user.email}}
          </p>
        </div>
      </div>
    </div>
    
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(["user"]),
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  height: 100vh;
  width:100%;
}
@media (max-width: 750px) { 
    .navbar{
    border-radius: 8px;
    width: 100%;
    background-color:#29BB89; 
    height:auto;
  }
  *{
    font-size: 12px;
  }
}
.nav-link{
  font-size:14px;
  transition: 0.2s all ease-in;
  color:inherit;
  &:hover{
    background-color:lighten($color: #29BB89, $amount: 5%);
    transition: 0.2s all ease-in;
  }
  // &:active{
  //   span{
  //     position:absolute;
  //     background-color:#ffffff;
  //   }
  // }
}
.user-container{  
  border-radius: 8px;
  height: 60px;
  width: 90%;
  p{
    word-break: break-all;
  }
}
.profile-picture{
  width:3rem;
  height:3rem;
}
p{
  margin:-2.5% 0;
}
</style>
