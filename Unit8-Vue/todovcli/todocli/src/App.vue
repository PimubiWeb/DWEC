<template>
  <div id="app">

    <!--HEADER-->
    <header>
        <h1>ToDo List dadw</h1>
    </header>

    <!-- Tarea -->
    <Tarea></Tarea>
    
  
  </div>
</template>

<script>
import Tarea from './components/Tarea.vue'

export default {
  name: 'App',
  components: {
    Tarea
  }
}
</script>
