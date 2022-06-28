<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

  export default {
    name:'my-modal',
    
    props:{
        show:Boolean,
        default:false,
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        }
    }
      
  }
</script>
<style scoped>
 
 .dialog{
    
 }
 .dialog__content{
     
 }
 
</style>