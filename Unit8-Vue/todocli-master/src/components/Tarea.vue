<template>
  <ol>
    <!-- TAREA -->
    <li v-for="(tarea, index) in tarea_array" :key="index">
        <strong>{{tarea.nombre}}</strong> <i>{{tarea.descripcion}}</i> {{tarea.fecha}}
        <span v-on:click="cambiarestado(index)">{{tarea.completado}}</span>
        <button v-on:click="borrartarea(index)">borrar</button>
    </li> 
  </ol>

  <!-- NOTIFICACION DE TAREAS -->
  <p>tengo {{tarea_array.length}} tareas y {{activas}} activas</p>
  <input type="text" v-model="tarea">
  <input type="text" v-model="descripcion">
  <button v-on:click="metertarea">añadir tarea</button>
</template>

<script>
export default {
  name: 'Tarea',
  
    data() {
        return {
            tarea: "",
            descripcion: "",
            tarea_array: [],
        }
    },
    methods: {
        metertarea() { //METODO PARA AÑADIR UNA NUEVA TAREA A LA LISTA
            this.tarea_array.push({
                nombre: this.tarea,
                descripcion: this.descripcion,
                fecha: new Date().toDateString(),
                prioridad: 0, //0 alta, 1 media, 2 baja
                completado: false});

            //subir al localstorage
            this.subirlocalstorage();
        },
        cambiarestado(index){ //METODO QUE CAMBIA EL ESTADO BOOLEANO
            //this.tarea_array[index].completado ? this.tarea_array[index].completado = false : this.tarea_array[index].completado = true;
            this.tarea_array[index].completado = !this.tarea_array[index].completado;
            this.subirlocalstorage();
        },
        borrartarea(index){ //METODO QUE BORRA UNA TAREA
            this.tarea_array.splice(index, 1);
            this.subirlocalstorage();
        },
        subirlocalstorage(){
            //subir al localstorage
            localStorage.setItem('tarea_array', JSON.stringify(this.tarea_array));
        }

    },
    computed: { //CAMPOS CALCULADOS

        activas(){ //metodo calculado que saca todas las ta
            let contador = 0
            this.tarea_array.forEach(t => {
                t.completado ? "" : contador++;
            });
            return contador;
        },
        completadas(){
            return this.tarea_array;
        }
        
    },
    mounted(){ // Called right before the mounting begins: the render function is about to be called for the first time.

            //bajar local storage
            if(JSON.parse(localStorage.getItem('tarea_array')))
                this.tarea_array = JSON.parse(localStorage.getItem('tarea_array'));
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
