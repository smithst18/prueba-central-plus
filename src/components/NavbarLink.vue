<template>
  <router-link 
    v-if="link"
    :to="rout"
    v-slot="{ /*href,*/isActive}"
    class="relative py-3 mb-3">
    <div :class="isActive ? 'is-active' : 'in-active' ">
        <div class="lg:ml-8 md:ml-6 ml-8 flex">
            <div class="mr-3">
                <i :class="link.icon"></i> 
            </div>
            <div class="text-sm">
                {{link.name}}
            </div>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
    props:{
        link:{
            type:Object,
            required:true,
        },
    },
    computed:{
        rout(){
            return { name:this.link.to }
        }
    }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
    .is-active{
        &::after{
            content: "";
            width: 12px;
            height: 100%;
            max-height: 32px;
            min-height: 32px;
            top: 0;
            bottom: 0;
            background-color: #ffff;
            position: absolute;
            left: 0px;
            border-radius: 0px 30px 30px 0px;
            transition: ease-in;
        }
    }
}
.in-active{
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
}
router-link{
    div{
        background-color:blue;
    }
}
</style>