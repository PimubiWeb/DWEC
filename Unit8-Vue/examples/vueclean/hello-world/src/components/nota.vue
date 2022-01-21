<template>
  <div class="tarea">
    <p>
      Mi tarea
    </p>
    
  </div>
</template>

<script>
export default {
  name:'tarea',
  
  data() {
        return {
            tarea: "",
            descripcion: "",
            tarea_array: [],
        }
    },
    props: []
    ,
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
            this.tarea_array
        }
        
    },

    mounted(){ // Called right before the mounting begins: the render function is about to be called for the first time.

            //bajar local storage
            if(JSON.parse(localStorage.getItem('tarea_array')))
                this.tarea_array = JSON.parse(localStorage.getItem('tarea_array'));
    },
    template: `
        <h1> {{tarea}}  </h1>
        <hr>
        `

}
</script>