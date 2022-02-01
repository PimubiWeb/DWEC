<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <micomponente v-show="mostrar" titulo="got temp1 ep1" @llegada= "muestra"></micomponente>
  <tarea></tarea> 
  <!-- <h1>Pablo</h1> -->
  <img src="./assets/gatito.jpg" alt="gato"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import micomponente from './components/micomponente.vue'
//import tarea from './components/tarea.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    micomponente
    //tarea
  },
  data(){
    return {
      mostrar:true
    }
  },
  methods: {
    muestra(tit){
      console.log(tit);
      // this.mostrar = false;
    }
  }
}
</script>