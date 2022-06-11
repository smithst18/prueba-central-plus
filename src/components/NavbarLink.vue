<template>
  <router-link 
    to="#"
    v-slot="{ /*href, isActive */}">
    <div class="">
        <div class="ml-8 flex">
            <div class="mr-3">
                <i :class="link.icon"></i> 
            </div>
            <div>
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
}
</script>

<style>

</style>