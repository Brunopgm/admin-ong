<template>
    <div class="app">
      <Menu :open="openMenu"></Menu>
      <Content @open="openMenu = $event"></Content>
    </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Content from './components/Content.vue';

export default {
  data(){
    return{
      openMenu: false
    }
  },
  components: {
    Menu,
    Content
  }
};
</script>

<style scoped>
  
  .app{
    
    
  }

  @media(min-width: 960px){
      .app{
        display: flex;
        

      }  
    }
</style>
