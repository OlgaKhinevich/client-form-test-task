<template>
  <div id="app" class="app-container">
    <Form />
  </div>
</template>

<script>
import Form from './components/ClientForm.vue';

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  @import '@/assets/media.scss';

  body {
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
    background-color: #e3e3e3;
    font-size: 16px;
    .app-container { 
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
</style>
