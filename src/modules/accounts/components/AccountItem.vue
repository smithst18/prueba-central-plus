<template>
  <div class="shadow-sm bg-zinc-50 p-8 rounded-lg">
    <h5 class="mb-5">{{account.alias}}</h5>
    <div class="grid grid-rows-3 gap-y-2">
        <div class="">
            <p>{{account.entity}}</p>
            <p class="ml-auto">{{account.type}}</p>
        </div>
        <div class="">
            <p>N#: {{account.acountNumber}}</p>
            <p class="ml-auto">V: {{account.document}}</p>
        </div>
        <div class="ml-auto mt-5">
            <EditButton class="mr-5" :account="account"/>
            <DeleteButton :id="account.id"/>
        </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    props:{
        account:{
            type:Object,
            require:true,
        }   
    },
    components:{
        DeleteButton: defineAsyncComponent( () => import('./DeleteButon.vue')),
        EditButton: defineAsyncComponent( () => import('./EditButton.vue')),
    }
}
</script>

<style>
.grid div{
    @apply flex items-center;
}
</style>